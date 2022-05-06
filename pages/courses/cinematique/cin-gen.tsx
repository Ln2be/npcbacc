import Comment from "../../../components/comment";
import { MComment } from "../../../lib/mongo";
import { htmlcingen } from "../../../public/htmls-cin";
import Article from "../../../components/article";
import Box from "@mui/material/Box";
import Head from "next/head";
import React from "react";

export default function CinGen({ comments }: { comments: string }) {
  const commentsOb = JSON.parse(comments);
  return (
    <>
      <Head>
        <title>
          le referentiel, vecteur position, vecteur vitesse et vecteur
          acceleration. Les differents movements
        </title>
      </Head>
      <Article>
        <>
          <Box>{htmlcingen}</Box>
          <Comment comments={commentsOb} article="cin-gen"></Comment>
        </>
      </Article>
    </>
  );
}

export async function getServerSideProps() {
  // const articleStream = await getArticle();
  // const article = await articleStream.json();

  const articleObject = await MComment.find({ article: "cin-gen" });

  const comments = JSON.stringify(articleObject);

  console.log(comments);

  return {
    props: {
      comments,
    },
  };
}
