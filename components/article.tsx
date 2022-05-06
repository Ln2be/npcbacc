import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

export default function Article({ children }: { children: JSX.Element }) {
  return (
    <Box
      sx={{
        maxWidth: "800px",
        padding: { xs: 1, md: 4 },
        mb: 20,
        fontFamily: "Times New Roman",
        fontSize: 20,
      }}
    >
      {children}
    </Box>
  );
}
