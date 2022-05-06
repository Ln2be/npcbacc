import Comment from "../../../components/comment";
import { MComment } from "../../../lib/mongo";
import { htmlmruv } from "../../../public/htmls-cin";
import Article from "../../../components/article";
import Head from "next/head";
import React from "react";

export default function Mruv({ comments }: { comments: string }) {
  const commentsOb = JSON.parse(comments);
  return (
    <>
      <Head>
        <title>
          le mouvement rectiligne uniformement varié. le repere de Frenel
        </title>
      </Head>
      <Article>
        <>
          {htmlmruv}
          <Comment comments={commentsOb} article="mruv"></Comment>
        </>
      </Article>
    </>
  );
}

export async function getServerSideProps() {
  // const articleStream = await getArticle();
  // const article = await articleStream.json();

  const articleObject = await MComment.find({ article: "mruv" });

  const comments = JSON.stringify(articleObject);

  console.log(comments);

  return {
    props: {
      comments,
    },
  };
}
