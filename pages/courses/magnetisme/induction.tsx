import Comment from "../../../components/comment";
import { MComment } from "../../../lib/mongo";
import { induction } from "../../../public/htmls-magn";
import Article from "../../../components/article";
import React from "react";
import Head from "next/head";

export default function Page({ comments }: { comments: string }) {
  const commentsOb = JSON.parse(comments);
  return (
    <>
      <Head>
        <title>L&apos;induction magnetique</title>
      </Head>
      <Article>{induction}</Article>
      <Comment comments={commentsOb} article="induction"></Comment>
    </>
  );
}

export async function getServerSideProps() {
  // const articleStream = await getArticle();
  // const article = await articleStream.json();

  const articleObject = await MComment.find({ article: "induction" });

  const comments = JSON.stringify(articleObject);

  console.log(comments);

  return {
    props: {
      comments,
    },
  };
}
