import Comment from "../../../components/comment";
import { MComment } from "../../../lib/mongo";
import { rfd } from "../../../public/htmls-dyn";
import Article from "../../../components/article";
import React from "react";
import Head from "next/head";

export default function Page({ comments }: { comments: string }) {
  const commentsOb = JSON.parse(comments);
  return (
    <>
      <Head>
        <title>La relation fondementale de la dynamique</title>
      </Head>

      <Article>{rfd}</Article>
      <Comment comments={commentsOb} article="rfd"></Comment>
    </>
  );
}

export async function getServerSideProps() {
  // const articleStream = await getArticle();
  // const article = await articleStream.json();

  const articleObject = await MComment.find({ article: "rfd" });

  const comments = JSON.stringify(articleObject);

  console.log(comments);

  return {
    props: {
      comments,
    },
  };
}
