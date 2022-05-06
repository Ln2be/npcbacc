import Comment from "../../../components/comment";
import { MComment } from "../../../lib/mongo";
import { chute } from "../../../public/htmls-dyn";
import Article from "../../../components/article";
import React from "react";
import Head from "next/head";

export default function Page({ comments }: { comments: string }) {
  const commentsOb = JSON.parse(comments);
  return (
    <>
      <div>
        <Head>
          <title>
            la relation fondementale de la dynamique apppliquée à la chute libre
          </title>
        </Head>
        <Article>{chute}</Article>
        <Comment comments={commentsOb} article="cin-gen"></Comment>
      </div>
    </>
  );
}

export async function getServerSideProps() {
  // const articleStream = await getArticle();
  // const article = await articleStream.json();

  const articleObject = await MComment.find({ article: "cin-gen" });

  const comments = JSON.stringify(articleObject);

  console.log(comments);

  return {
    props: {
      comments,
    },
  };
}
