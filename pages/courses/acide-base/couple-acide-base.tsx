import Comment from "../../../components/comment";
import { MComment } from "../../../lib/mongo";
import { coupleAcideBase } from "../../../public/htmls-ab";
import Article from "../../../components/article";
import Head from "next/head";
import React from "react";

export default function Page({ comments }: { comments: string }) {
  const commentsOb = JSON.parse(comments);
  return (
    <>
      <Head>
        <title>
          Couple acide base, la constante d&apos;acidité, le domaine de
          predominance
        </title>
      </Head>
      <Article>
        <>
          <div>{coupleAcideBase}</div>
          <Comment comments={commentsOb} article="couple-acide-base"></Comment>
        </>
      </Article>
    </>
  );
}

export async function getServerSideProps() {
  // const articleStream = await getArticle();
  // const article = await articleStream.json();

  const articleObject = await MComment.find({ article: "couple-acide-base" });

  const comments = JSON.stringify(articleObject);

  console.log(comments);

  return {
    props: {
      comments,
    },
  };
}
