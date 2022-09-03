import { Box, Button } from "@mui/material";
import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { ChangeEvent, MouseEventHandler } from "react";
import { formDoc } from "../lib/cards";
import { MDoc } from "../lib/models";
import { DBDoc } from "../lib/mongo";
import { convertToBase64, subjects } from "../lib/myFunctions";

export default function Page() {
  const router = useRouter();
  const query = router.query;

  // show Document card

  return (
    <>
      <Head>
        <title>
          Un site mauritanien pour la physique et la chimie du baccalaureat
        </title>
      </Head>
      <>{query.action == "form" && formDoc(subjects)}</>
      {/* <>{query.action == "form" && showDocs(subjects)}</> */}
      {/* <>{query.action == "docs" && showDocs(subjects)}</> */}
    </>
  );
}

// this function excuted in the server
export async function getServerSideProps({
  query,
}: {
  query: { [key: string]: string };
}) {
  const count = query.count;
  let doc = {} as MDoc;

  if (count) {
    const resDoc = await DBDoc.findOne({ count: count });
    doc = resDoc && resDoc;
  }

  return {
    props: {
      doc: JSON.stringify(doc),
    },
  };
}
