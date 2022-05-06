import Comment from "../../../components/comment";
import { MComment } from "../../../lib/mongo";
import { autoprotolyse } from "../../../public/htmls-ab";
import Article from "../../../components/article";
import Head from "next/head";
import React from "react";

export default function Page({ comments }: { comments: string }) {
  const commentsOb = JSON.parse(comments);
  return (
    <>
      <Head>
        <title>
          L&apos;autoprotolyse de l&apos;eau, l&apos;ion hydronium, l&apos;ion
          hydroxyde, le pke et pH.
        </title>
      </Head>
      <Article>
        <>
          <div>{autoprotolyse}</div>
          <Comment comments={commentsOb} article="autoprotolyse"></Comment>
        </>
      </Article>
    </>
  );
}

export async function getServerSideProps(context: string) {
  // const articleStream = await getArticle();
  // const article = await articleStream.json();s

  const articleObject = await MComment.find({ article: "autoprotolyse" });

  const comments = JSON.stringify(articleObject);

  console.log(comments);

  return {
    props: {
      comments,
    },
  };
}
