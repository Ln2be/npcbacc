import Comment from "../../../components/comment";
import { MComment } from "../../../lib/mongo";
import { oscillateur } from "../../../public/htmls-dyn";
import Article from "../../../components/article";
import React from "react";
import Head from "next/head";

export default function Page({ comments }: { comments: string }) {
  const commentsOb = JSON.parse(comments);
  return (
    <>
      <div>
        <Head>
          <title>l&apos;oscillateur harmonique mecanique</title>
        </Head>
        <Article>{oscillateur}</Article>
        <Comment comments={commentsOb} article="oscillateur"></Comment>
      </div>
    </>
  );
}

export async function getServerSideProps() {
  // const articleStream = await getArticle();
  // const article = await articleStream.json();

  const articleObject = await MComment.find({ article: "oscillateur" });

  const comments = JSON.stringify(articleObject);

  console.log(comments);

  return {
    props: {
      comments,
    },
  };
}
