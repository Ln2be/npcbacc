import Comment from "../../../components/comment";
import { MComment } from "../../../lib/mongo";
import { titrage } from "../../../public/htmls-ab";
import Article from "../../../components/article";
import Head from "next/head";
import React from "react";

export default function Page({ comments }: { comments: string }) {
  const commentsOb = JSON.parse(comments);
  return (
    <>
      <Head>
        <title>
          titrage avec suivi de pH, titrage. determination du pH à
          l&apos;equivalence. le point de demi equivalence. titrage
          calorimetrique
        </title>
      </Head>
      <Article>
        <>
          <div>{titrage}</div>
          <Comment comments={commentsOb} article="titrage"></Comment>
        </>
      </Article>
    </>
  );
}

export async function getServerSideProps() {
  // const articleStream = await getArticle();
  // const article = await articleStream.json();

  const articleObject = await MComment.find({ article: "titrage" });

  const comments = JSON.stringify(articleObject);

  console.log(comments);

  return {
    props: {
      comments,
    },
  };
}
