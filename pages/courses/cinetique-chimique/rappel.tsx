import Comment from "../../../components/comment";
import { MComment } from "../../../lib/mongo";
import { rappel } from "../../../public/htmls-cinet";
import Article from "../../../components/article";
import React from "react";
import Head from "next/head";

export default function Page({ comments }: { comments: string }) {
  const commentsOb = JSON.parse(comments);
  return (
    <>
      <Head>
        <title>
          concentration molaire et massique. densité et masse volumique.
          preparation des solution aqueuses
        </title>
      </Head>
      <Article>
        <>
          <div>{rappel}</div>
          <Comment comments={commentsOb} article="rappel"></Comment>
        </>
      </Article>
    </>
  );
}

export async function getServerSideProps() {
  // const articleStream = await getArticle();
  // const article = await articleStream.json();

  const articleObject = await MComment.find({ article: "rappel" });

  const comments = JSON.stringify(articleObject);

  console.log(comments);

  return {
    props: {
      comments,
    },
  };
}
