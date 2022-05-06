import Comment from "../../../components/comment";
import { MComment } from "../../../lib/mongo";
import { htmlmru } from "../../../public/htmls-cin";
import Article from "../../../components/article";
import Head from "next/head";
import React from "react";

export default function Mru({ comments }: { comments: string }) {
  const commentsOb = JSON.parse(comments);
  return (
    <>
      <Head>
        <title>le mouvement rectiligne uniforme. </title>
      </Head>
      <Article>
        <>
          {htmlmru}

          <Comment comments={commentsOb} article="mru"></Comment>
        </>
      </Article>
    </>
  );
}

export async function getServerSideProps() {
  // const articleStream = await getArticle();
  // const article = await articleStream.json();

  const articleObject = await MComment.find({ article: "mru" });

  const comments = JSON.stringify(articleObject);

  console.log(comments);

  return {
    props: {
      comments,
    },
  };
}
