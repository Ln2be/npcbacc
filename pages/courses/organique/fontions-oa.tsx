import Comment from "../../../components/comment";
import { MComment } from "../../../lib/mongo";
import { fonctionsOA } from "../../../public/htmls-org";
import Article from "../../../components/article";
import React from "react";
import Head from "next/head";

export default function Page({ comments }: { comments: string }) {
  const commentsOb = JSON.parse(comments);
  return (
    <>
      <Head>
        <title>Les fonctions oxygenees et azotees</title>
      </Head>
      <Article>{fonctionsOA}</Article>
      <Comment comments={commentsOb} article="functionOA"></Comment>
    </>
  );
}

export async function getServerSideProps() {
  // const articleStream = await getArticle();
  // const article = await articleStream.json();

  const articleObject = await MComment.find({ article: "functionOA" });

  const comments = JSON.stringify(articleObject);

  console.log(comments);

  return {
    props: {
      comments,
    },
  };
}
