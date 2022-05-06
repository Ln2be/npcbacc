import Comment from "../../../components/comment";
import { MComment } from "../../../lib/mongo";
import { definitions } from "../../../public/htmls-ab";
import Article from "../../../components/article";
import Head from "next/head";
import React from "react";

export default function Page({ comments }: { comments: string }) {
  const commentsOb = JSON.parse(comments);
  return (
    <>
      <Head>
        <title>
          solution acide, basique et neutre. Acide fort et base forte. acide
          faible et base faible
        </title>
      </Head>
      <Article>
        <>
          <div>{definitions}</div>
          <Comment comments={commentsOb} article="definitions"></Comment>
        </>
      </Article>
    </>
  );
}

export async function getServerSideProps() {
  // const articleStream = await getArticle();
  // const article = await articleStream.json();

  const articleObject = await MComment.find({ article: "definitions" });

  const comments = JSON.stringify(articleObject);

  console.log(comments);

  return {
    props: {
      comments,
    },
  };
}
