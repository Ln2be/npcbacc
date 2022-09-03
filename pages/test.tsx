import { Box } from "@mui/material";
import React from "react";

export default function Page() {
  return (
    <Box>
      <iframe
        src={"https://drive.google.com/viewerng/viewer?embedded=true&url="}
        width={"100%"}
        height={"400px"}
      ></iframe>
      <Box>
          <Box>
              <a href={""} download>Download</a>
          </Box>
          <Box></Box>
          <Box></Box>
      </Box>
    </Box>
  );
}
