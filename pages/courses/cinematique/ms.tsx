import Comment from "../../../components/comment";
import { MComment } from "../../../lib/mongo";
import { htmlms } from "../../../public/htmls-cin";
import Article from "../../../components/article";
import React from "react";
import Head from "next/head";

export default function Ms({ comments }: { comments: string }) {
  const commentsOb = JSON.parse(comments);
  return (
    <>
      <Head>
        <title>le mouvement sinisoidal</title>
      </Head>
      <Article>{htmlms}</Article>
      <Comment comments={commentsOb} article="ms"></Comment>
    </>
  );
}

export async function getServerSideProps() {
  // const articleStream = await getArticle();
  // const article = await articleStream.json();

  const articleObject = await MComment.find({ article: "ms" });

  const comments = JSON.stringify(articleObject);

  console.log(comments);

  return {
    props: {
      comments,
    },
  };
}
