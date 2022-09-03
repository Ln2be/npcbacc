import { Box, Button } from "@mui/material";
import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { ChangeEvent, MouseEventHandler } from "react";
import { MDoc } from "../lib/models";
import { DBDoc } from "../lib/mongo";
import { convertToBase64, subjects } from "../lib/myFunctions";

// the form for the document
export function formDoc(subjs: any) {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
      }}
    >
      {Object.keys(subjs).map((subject, index) => {
        if (subject == "general") {
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
                {subject}
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
                  {subjs[subject].map((name: string[], index: string) => (
                    <Box sx={{ ml: 1 }} key={index}>
                      <Link href={"/docs/" + subject + "/" + name[0]}>
                        {name[0]}
                      </Link>
                    </Box>
                  ))}
                </Box>
              </Box>
            </Box>
          );
        } else {
          const subs2 = subjs[subject];
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
                {subject}
              </Box>
              <Box
                key={index}
                sx={{
                  display: "grid",
                  gridTemplateColumns: "repeat(2, 1fr)",
                  gap: 1,
                }}
              >
                {Object.keys(subs2).map((subject2, index) => {
                  return (
                    <Box key={index}>
                      <Box>
                        <Box sx={{ fontSize: 25 }}>{subject2}</Box>
                        {subs2[subject2].map(
                          (name: string[], index: string) => (
                            <Box sx={{ ml: 1 }} key={index}>
                              <Link
                                href={
                                  "/docs/" +
                                  subject +
                                  "/" +
                                  subject2 +
                                  "/" +
                                  name[0]
                                }
                              >
                                {name[0] + "  " + name[1]}
                              </Link>
                            </Box>
                          )
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


// 
