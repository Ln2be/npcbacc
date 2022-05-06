import Comment from "../../../components/comment";
import { MComment } from "../../../lib/mongo";
import { plan } from "../../../public/htmls-dyn";
import Article from "../../../components/article";
import React from "react";
import Head from "next/head";

export default function Page({ comments }: { comments: string }) {
  const commentsOb = JSON.parse(comments);
  return (
    <>
      <Head>
        <title>mouvement d&apos;un mobile sur un plan incliné</title>
      </Head>
      <Article>{plan}</Article>
      <Comment comments={commentsOb} article="plan"></Comment>
    </>
  );
}

export async function getServerSideProps() {
  // const articleStream = await getArticle();
  // const article = await articleStream.json();

  const articleObject = await MComment.find({ article: "plan" });

  const comments = JSON.stringify(articleObject);

  console.log(comments);

  return {
    props: {
      comments,
    },
  };
}
