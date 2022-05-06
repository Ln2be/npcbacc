import Box from "@mui/material/Box";
import PCNav from "./pcnav";
import Link from "next/link";
import Image from "next/image";
import ImgHeader from "./header.svg";
import { width } from "@mui/system";
import Article from "./article";
import React from "react";

export default function Layout({ children }: { children: JSX.Element }) {
  return (
    <Box
      sx={{
        // fontFamily: "Times New Roman",
        display: "grid",
        gridTemplateColumns: "repeat(4, 1fr)",
        gap: 1,
        gridTemplateRows: "auto",
        gridTemplateAreas: {
          xs: `"header header header header"
          "nav nav nav nav"
          "sidebar sidebar sidebar sidebar"
  "main main main main"
  "footer footer footer footer"`,
          md: `"header header header header"
          "nav nav nav nav"
  "sidebar main main main"
  "footer footer footer footer"`,
        },
      }}
    >
      <Box sx={{ gridArea: "header" }}>
        {/* <Box sx={{}}> */}
        <Image
          // style={{ position: "relative !important" }}
          src={"/images/header.svg"}
          layout="responsive"
          width={"947px"}
          height={"216px"}
        ></Image>
        {/* <img src={ImgHeader}></img> */}
        {/* </Box> */}
      </Box>
      <Box sx={{ gridArea: "nav", display: "flex", flexDirection: "row" }}>
        <Box sx={{ m: 2 }}>
          <Link href={"/courses/cinematique/cin-gen"}>Cours</Link>
        </Box>
        <Box sx={{ m: 2 }}>
          <Link href={"/courses/cinematique/cin-gen"}>Exercices</Link>
        </Box>{" "}
        <Box sx={{ m: 2 }}>
          <Link href={"/courses/cinematique/cin-gen"}>Cours</Link>
        </Box>
      </Box>
      <Box
        sx={{
          gridArea: "sidebar",
        }}
      >
        <PCNav></PCNav>
      </Box>
      <Box sx={{ gridArea: "main" }}>
        <Article>{children}</Article>
      </Box>

      <Box sx={{ gridArea: "footer" }}>Footer</Box>
    </Box>
  );
}
