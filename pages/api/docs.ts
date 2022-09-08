// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import * as fs from "node:fs/promises";
import { Buffer, Blob } from "node:buffer";
import { MDoc } from "../../lib/models";
import { DBDoc, updateCounter } from "../../lib/mongo";
import { basepathSaveDoc } from "../../lib/myFunctions";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const body = req.body as MDoc;
  const query = req.query;

  if (query.action == "save") {
    console.log(body);
    const promisePaths = body.files.map(async (file) => {
      return await savePdf(file);
      // body.files.push(path);
    });

    const paths = (await Promise.all(promisePaths)) as string[];

    const counter = await updateCounter("docs");

    body.count = counter;

    body.files = paths;

    console.log(paths);
    const resDoc = await new DBDoc(body).save();
    res.send(body);
  }

  if (query.action == "delete") {
    const id = query.id;
    await DBDoc.deleteOne({ _id: id });
    res.send("Ok");
  }

  if (query.action == "apiall") {
    const docs = await DBDoc.find({});
    res.send("hello");
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
