// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
// import * as fs from "node:fs/promises";
import { promises as fs } from "fs";
import { Buffer } from "buffer";
import { MDoc } from "../../lib/models";
import { DBDoc, updateCounter } from "../../lib/mongo";
import { basepathSaveDoc } from "../../lib/myFunctions";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const body = req.body;
  const query = req.query;
  const file = body.file;

  // if (query.action == "save") {
  //   // console.log(body);
  //   // const promisePaths = body.files.map(async (file) => {
  //   //   // body.files.push(path);
  //   //   return await savePdf(file);
  //   // });

  //   const savedfile = await savePdf(file);

  //   // const paths = (await Promise.all(promisePaths)) as string[];

  //   const counter = await updateCounter("docs");

  //   body.count = counter;

  //   // body.files = paths;

  //   // console.log(paths);
  //   body.file = savedfile;
  //   const resDoc = await new DBDoc(body).save();
  //   res.send(body);
  // }

  if (query.action == "save") {
    console.log("docs.ts");
    res.send("Ok");
  }

  if (query.action == "delete") {
    const id = query.id;
    await DBDoc.deleteOne({ _id: id });
    res.send("Ok");
  }

  if (query.action == "apiall") {
    const docs = await DBDoc.find({});
    res.send(docs);
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
