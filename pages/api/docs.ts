// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
// import * as fs from "node:fs/promises";
import { promises as fs } from "fs";
import { Buffer } from "buffer";
import { DBDoc } from "../../lib/mongo";
import { basepathSaveDoc } from "../../lib/myFunctions";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const body = req.body;
  const query = req.query;
  const file = body.file;

  if (query.action == "apiall") {
    const docs = await DBDoc.find({});
    res.send(docs);
  }

  if (query.action == "delete") {
    const count = query.count;
    const doc = await DBDoc.findOne({ count: count });
    await fs.unlink(basepathSaveDoc + doc.file);
    await DBDoc.deleteOne({ count: count });

    res.send("Ok");
  }
}

// save the file
async function savePdf(base64doc: string) {
  const cleanBase64 = base64doc.split(",")[1];
  const buf = Buffer.from(cleanBase64, "base64");

  const datenow = Date.now();

  const path = basepathSaveDoc + "/" + datenow + ".pdf";
  return new Promise((resolve) => {
    fs.writeFile(path, buf, "base64").then(() => {
      resolve(datenow);
    });
  });
}
