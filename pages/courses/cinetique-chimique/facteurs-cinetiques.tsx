import Comment from "../../../components/comment";
import { MComment } from "../../../lib/mongo";
import { facteursCinetiques } from "../../../public/htmls-cinet";
import Article from "../../../components/article";
import React from "react";
import Head from "next/head";

export default function Page({ comments }: { comments: string }) {
  const commentsOb = JSON.parse(comments);
  return (
    <>
      <Head>
        <title>
          facteurs cinetiques: temperature, concentrations initiales et
          catalyseur
        </title>
      </Head>
      <Article>
        <>
          <div>{facteursCinetiques}</div>
          <Comment
            comments={commentsOb}
            article="facteurs-cinetiques"
          ></Comment>
        </>
      </Article>
    </>
  );
}

export async function getServerSideProps() {
  // const articleStream = await getArticle();
  // const article = await articleStream.json();

  const articleObject = await MComment.find({ article: "facteurs-cinetiques" });

  const comments = JSON.stringify(articleObject);

  console.log(comments);

  return {
    props: {
      comments,
    },
  };
}
