import Comment from "../../../components/comment";
import { MComment } from "../../../lib/mongo";
import { champMagnetique } from "../../../public/htmls-magn";
import Article from "../../../components/article";
import React from "react";
import Head from "next/head";

export default function Page({ comments }: { comments: string }) {
  const commentsOb = JSON.parse(comments);
  return (
    <>
      <Head>
        <title>
          Les aiments, Champ magnetique, Sources de champ magnetique
        </title>
      </Head>
      <Article>{champMagnetique}</Article>
      <Comment comments={commentsOb} article="champ-magnetique"></Comment>
    </>
  );
}

export async function getServerSideProps() {
  // const articleStream = await getArticle();
  // const article = await articleStream.json();

  const articleObject = await MComment.find({ article: "champ-magnetique" });

  const comments = JSON.stringify(articleObject);

  console.log(comments);

  return {
    props: {
      comments,
    },
  };
}
