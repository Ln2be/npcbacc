import Comment from "../../../components/comment";
import React from "react";
import { MComment } from "../../../lib/mongo";
import { htmlmcu } from "../../../public/htmls-cin";
import Article from "../../../components/article";
import Head from "next/head";

export default function Mcu({ comments }: { comments: string }) {
  const commentsOb = JSON.parse(comments);
  return (
    <>
      <Head>
        <title>le mouvement circulaire uniforme. le repere de Frenel</title>
      </Head>
      <Article>
        <>
          {htmlmcu}
          <Comment comments={commentsOb} article="mcu"></Comment>
        </>
      </Article>
    </>
  );
}

export async function getServerSideProps() {
  // const articleStream = await getArticle();
  // const article = await articleStream.json();

  const articleObject = await MComment.find({ article: "mcu" });

  const comments = JSON.stringify(articleObject);

  console.log(comments);

  return {
    props: {
      comments,
    },
  };
}
