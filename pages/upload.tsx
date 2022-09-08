import { Box, Button, MenuItem, TextField } from "@mui/material";
import Head from "next/head";
import { useRouter } from "next/router";
import React, { ChangeEvent, MouseEventHandler, useState } from "react";
import { MDoc } from "../lib/models";
import { convertToBase64, subjects } from "../lib/myFunctions";

// the model to send
const doc = {} as MDoc;
doc.field = "general";
doc.kind = "courses";
export default function Page() {
  const [field, setField] = useState("");
  const router = useRouter();

  async function handleFile(e: ChangeEvent<HTMLInputElement>) {
    const files = e.target.files;

    if (files) {
      doc.files = [];
      for (let i = 0; i < files.length; i++) {
        const file = files.item(i);
        const fileData = file && (await convertToBase64(file));
        doc.files.push(fileData);
      }
    }
  }

  // submit the doc
  async function handleSubmit() {
    await fetch("/api/docs?action=save", {
      method: "Post",
      body: JSON.stringify(doc),
      headers: {
        "Content-Type": "application/json",
      },
    });
    router.push("/upload");
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
                    {key}
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
                      {key}
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
                {Object.keys(subjects["general"]).map((key, index) => (
                  <MenuItem key={index} value={key}>
                    {key}
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
              <Button variant="outlined" component="label">
                Documents
                <input
                  type="file"
                  hidden
                  onChange={handleFile}
                  accept="application/pdf"
                />
              </Button>
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
