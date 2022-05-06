import Comment from "../../../components/comment";
import { MComment } from "../../../lib/mongo";
import { particuleChargee } from "../../../public/htmls-dyn";
import Article from "../../../components/article";
import React from "react";
import Head from "next/head";

export default function Page({ comments }: { comments: string }) {
  const commentsOb = JSON.parse(comments);
  return (
    <>
      <Head>
        <title>
          le mouvement d&apos;une particule chargée dans un champ electrique
        </title>
      </Head>
      <Article>{particuleChargee}</Article>
      <Comment comments={commentsOb} article="particule-chargee"></Comment>
    </>
  );
}

export async function getServerSideProps() {
  // const articleStream = await getArticle();
  // const article = await articleStream.json();

  const articleObject = await MComment.find({ article: "particule-chargee" });

  const comments = JSON.stringify(articleObject);

  console.log(comments);

  return {
    props: {
      comments,
    },
  };
}
