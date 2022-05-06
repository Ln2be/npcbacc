import Comment from "../../../components/comment";
import { MComment } from "../../../lib/mongo";
import { vitesseDeLaReaction } from "../../../public/htmls-cinet";
import Article from "../../../components/article";
import React from "react";
import Head from "next/head";

export default function Page({ comments }: { comments: string }) {
  const commentsOb = JSON.parse(comments);
  return (
    <>
      <div>
        <Head>
          <title>vitesse de la reaction</title>
        </Head>
        <Article>{vitesseDeLaReaction}</Article>
        <Comment
          comments={commentsOb}
          article="vitesse-de-la-reaction"
        ></Comment>
      </div>
    </>
  );
}

export async function getServerSideProps() {
  // const articleStream = await getArticle();
  // const article = await articleStream.json();

  const articleObject = await MComment.find({
    article: "vitesse-de-la-reaction",
  });

  const comments = JSON.stringify(articleObject);

  console.log(comments);

  return {
    props: {
      comments,
    },
  };
}
