import Head from "next/head";
import Comment from "../components/comment";
import { MComment } from "../lib/mongo";
import React from "react";
import Article from "../components/article";
import { Box } from "@mui/material";
import { htmlcingen } from "../public/htmls-cin";

interface Props {
  articleComments: string;
}

export default function Page(props: Props) {
  return (
    <>
      <Head>
        <title>
          Un site mauritanien pour la physique et la chimie du baccalaureat
        </title>
      </Head>
      {/* <Article>
        <>
          <Box>{htmlcingen}</Box>
        </>
      </Article> */}
    </>
  );
}
