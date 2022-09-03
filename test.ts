import * as fs from "node:fs/promises";
import { Buffer } from "node:buffer";
const path = "/home/elhassen/Downloads/nodefs.pdf";

async function main() {
  const data = await readPdf(path);
  const buf = Buffer.from(data);

  const base64 = buf.toString("base64");

  await savePdf(base64);
  console.log(base64);
}
async function savePdf(base64doc: string) {
  const buf = Buffer.from(base64doc, "base64");

  const datennow = Date.now();

  return fs.writeFile(
    "/home/elhassen/Documents/aaaa/" + datennow + ".pdf",
    buf,
    "base64"
  );
}

async function readPdf(path: string) {
  return fs.readFile(path);
}

main();
