import Comment from "../../../components/comment";
import { MComment } from "../../../lib/mongo";
import { acideCarboxylique } from "../../../public/htmls-org";
import Article from "../../../components/article";
import React from "react";
import Head from "next/head";

export default function Page({ comments }: { comments: string }) {
  const commentsOb = JSON.parse(comments);
  return (
    <>
      <Head>
        <title>Les acides carboxyliques et ses derivées</title>
      </Head>
      <Article>{acideCarboxylique}</Article>
      <Comment comments={commentsOb} article="acideCarboxylique"></Comment>
    </>
  );
}

export async function getServerSideProps() {
  // const articleStream = await getArticle();
  // const article = await articleStream.json();

  const articleObject = await MComment.find({ article: "acideCarboxylique" });

  const comments = JSON.stringify(articleObject);

  console.log(comments);

  return {
    props: {
      comments,
    },
  };
}
