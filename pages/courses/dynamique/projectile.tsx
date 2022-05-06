import Comment from "../../../components/comment";
import { MComment } from "../../../lib/mongo";
import { projectile } from "../../../public/htmls-dyn";
import Article from "../../../components/article";
import React from "react";
import Head from "next/head";

export default function Page({ comments }: { comments: string }) {
  const commentsOb = JSON.parse(comments);
  return (
    <>
      <Head>
        <title>le mouvement d&apos;un projectile</title>
      </Head>
      <Article>{projectile}</Article>
      <Comment comments={commentsOb} article="projetile"></Comment>
    </>
  );
}

export async function getServerSideProps() {
  // const articleStream = await getArticle();
  // const article = await articleStream.json();

  const articleObject = await MComment.find({ article: "projetile" });

  const comments = JSON.stringify(articleObject);

  console.log(comments);

  return {
    props: {
      comments,
    },
  };
}
