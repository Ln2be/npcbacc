import { Box, Button, MenuItem, TextField } from "@mui/material";
import Head from "next/head";
import { useRouter } from "next/router";
import React, { ChangeEvent, MouseEventHandler, useState } from "react";
import { MDoc } from "../lib/models";
import { convertToBase64, subjects, translate } from "../lib/myFunctions";

// the model to send
const doc = {} as MDoc;
let filename: string | undefined;

doc.field = "general";
doc.chapter = "general";
doc.kind = "courses";
export default function Page() {
  const [field, setField] = useState("");
  const [errorfile, setError] = useState(false);
  const router = useRouter();

  async function handleFile(e: ChangeEvent<HTMLInputElement>) {
    const files = e.target.files;

    if (files) {
      const resFile = files.item(0);
      // const fileData = file && (await convertToBase64(file));
      // doc.file =  file
      if (resFile) {
        filename = files.item(0)?.name;
        doc.file = resFile;
        console.log("file size = " + resFile.size);
      }
    }
  }

  async function handleSubmit() {
    const ar = filename?.split(".");
    const pdf = ar && ar[ar.length - 1] == "pdf";
    if (doc.file.size < 1100000 && pdf) {
      // submit the doc
      // add the object to form data

      const formData = new FormData();
      for (const property in doc) {
        if (property == "file") {
          doc.file;
          formData.append(property, doc[property], filename);
        } else {
          formData.append(property, doc[property]);
        }
      }

      await fetch("/pcex/save", {
        method: "post",
        body: formData,
      });
      router.push("/");
    } else {
      setError(true);
    }
  }

  return (
    <>
      <Head>
        <title>
          Un site mauritanien pour la physique et la chimie du baccalaureat
        </title>
      </Head>
      <>
        <Box></Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              mb: 6,
            }}
          >
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
              }}
            >
              يجب احترام حقوق النشر
            </Box>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
              }}
            >
              Les droits d&apo;auteur doivent être respectés
            </Box>
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              mb: 2,
            }}
          >
            Infromations personelles
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              mb: 6,
            }}
          >
            <TextField
              // id="outlined-basic"
              label="Nom"
              variant="outlined"
              onChange={(event) => {
                doc.name = event.target.value;
              }}
              helperText="facultatif "
            />
            <TextField
              // id="outlined-basic"
              label="Telephone"
              variant="outlined"
              onChange={(event) => {
                doc.tel = event.target.value;
              }}
              helperText=" Il est facultatif et ne sera pas visible par les visiteurs"
            />
          </Box>

          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              mb: 2,
            }}
          >
            Classement des documents
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-around",
              mt: 3,
            }}
          >
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                m: 1,
              }}
            >
              <TextField
                // id="outlined-select-currency"
                select
                label="matière"
                defaultValue={"general"}
                onChange={(event) => {
                  const value = event.target.value;
                  doc.field = value;
                  setField(value);
                }}
                // helperText="اختر المقاطعة"
                required
              >
                {Object.keys(subjects).map((key, index) => (
                  <MenuItem key={index} value={key}>
                    {translate[key]}
                  </MenuItem>
                ))}
              </TextField>
            </Box>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                m: 1,
              }}
            >
              {(field == "physics" || field == "chemistry") && (
                <TextField
                  // id="outlined-select-currency"
                  select
                  label="chapiter"
                  defaultValue={"general"}
                  onChange={(event) => {
                    const value = event.target.value;
                    doc.chapter = value;
                  }}
                  // helperText="اختر المقاطعة"
                  required
                >
                  {Object.keys(subjects[field]).map((key, index) => (
                    <MenuItem key={index} value={key}>
                      {translate[key]}
                    </MenuItem>
                  ))}
                </TextField>
              )}
            </Box>

            <Box></Box>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                m: 1,
              }}
            >
              {/* if they are exercises or courses */}
              <TextField
                // id="outlined-select-currency"
                select
                label="type"
                defaultValue={"courses"}
                onChange={(event) => {
                  const value = event.target.value;
                  doc.kind = value;
                }}
                helperText=""
                required
              >
                {Object.keys(subjects["general"]["general"]).map(
                  (key, index) => (
                    <MenuItem key={index} value={key}>
                      {translate[key]}
                    </MenuItem>
                  )
                )}
              </TextField>
            </Box>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                m: 1,
              }}
            >
              <Button variant="outlined" component="label">
                Document
                <input
                  type="file"
                  hidden
                  onChange={handleFile}
                  accept="application/pdf"
                />
              </Button>
              <small
                style={{
                  color: errorfile ? "red" : "black",
                }}
              >
                Le fichier ne doit pas depasser 1MB
              </small>
            </Box>
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row-reverse",
              justifyContent: "space-between",
              mt: 3,
              alignItems: "end",
            }}
          >
            <Button
              onClick={handleSubmit}
              variant="contained"
              component="label"
            >
              Envoyer
            </Button>
          </Box>
        </Box>
      </>
    </>
  );
}
