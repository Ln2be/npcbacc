import { Box, Button } from "@mui/material";
import React from "react";

export default function Page(path: string, count: string) {
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
