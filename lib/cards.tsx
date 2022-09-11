import { Box, Button } from "@mui/material";
import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { ChangeEvent, MouseEventHandler } from "react";
import { MDoc } from "../lib/models";
import { DBDoc } from "../lib/mongo";
import {
  basepathServeDoc,
  convertToBase64,
  subjects,
} from "../lib/myFunctions";

// the form for the document
export function showDocs(subjs: any) {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
      }}
    >
      {Object.keys(subjs).map((field, index) => {
        if (field == "general") {
          return (
            <Box key={index}>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  mb: 2,
                  fontSize: 30,
                }}
              >
                {field}
              </Box>
              <Box
                sx={{
                  display: "grid",
                  gridTemplateColumns: {
                    xs: "repeat(2, 1fr)",
                    md: "repeat(3, 1fr)",
                  },
                }}
              >
                <Box>
                  {Object.keys(subjs[field]).map(
                    (kind: string, index2: number) => (
                      <Box sx={{ ml: 1 }} key={index2}>
                        <Link href={"/docs?field=" + field + "&kind=" + kind}>
                          {kind}
                        </Link>
                      </Box>
                    )
                  )}
                </Box>
              </Box>
            </Box>
          );
        } else {
          const fieldlevel = subjs[field];
          // return showDocs(subs2);
          return (
            <Box
              sx={{
                m: 1,
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  mb: 2,
                  fontSize: 30,
                }}
              >
                {field}
              </Box>
              <Box
                key={index}
                sx={{
                  display: "grid",
                  gridTemplateColumns: "repeat(2, 1fr)",
                  gap: 1,
                }}
              >
                {Object.keys(fieldlevel).map((chapter, index) => {
                  const chapterlevel = fieldlevel[chapter];
                  return (
                    <Box key={index}>
                      <Box>
                        <Box sx={{ fontSize: 25 }}>{chapter}</Box>
                        {Object.keys(chapterlevel).map(
                          (kind: string, index2: number) => {
                            const kindlevel = chapterlevel[kind];
                            return (
                              <Box sx={{ ml: 1 }} key={index2}>
                                <Link
                                  href={
                                    "/docs?field=" +
                                    field +
                                    "&chapter=" +
                                    chapter +
                                    "&kind=" +
                                    kind
                                  }
                                >
                                  {kind + "  " + kindlevel.total}
                                </Link>
                              </Box>
                            );
                          }
                        )}
                      </Box>
                    </Box>
                  );
                })}
              </Box>
            </Box>
          );
        }
      })}
    </Box>
  );
}

// show file
export default function showFile(path: string, count: string) {
  return (
    <Box>
      <iframe
        src={
          "https://drive.google.com/viewerng/viewer?embedded=true&url=" + path
        }
        width={"100%"}
        height={"400px"}
      ></iframe>
      <Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <a target={"_blank"} rel="noreferrer" href={path} download>
            <Button>Telecharger</Button>
          </a>
          <a
            target={"_blank"}
            rel="noreferrer"
            href={
              "https://wa.me/?text=" + "https://pcbacc.com/docs?count=" + count
            }
          >
            <Button>Partager</Button>
          </a>
        </Box>
      </Box>
    </Box>
  );
}
