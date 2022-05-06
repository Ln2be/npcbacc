import Comment from "../../../components/comment";
import { MComment } from "../../../lib/mongo";
import { fLorentz } from "../../../public/htmls-magn";
import Article from "../../../components/article";
import React from "react";
import Head from "next/head";

export default function Page({ comments }: { comments: string }) {
  const commentsOb = JSON.parse(comments);
  return (
    <>
      <Head>
        <title>La force de Lorentz</title>
      </Head>
      <Article>{fLorentz}</Article>
      <Comment comments={commentsOb} article="fLaplace"></Comment>
    </>
  );
}

export async function getServerSideProps() {
  // const articleStream = await getArticle();
  // const article = await articleStream.json();

  const articleObject = await MComment.find({ article: "fLaplace" });

  const comments = JSON.stringify(articleObject);

  console.log(comments);

  return {
    props: {
      comments,
    },
  };
}
