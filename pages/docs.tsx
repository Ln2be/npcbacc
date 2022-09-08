import { Box, Button } from "@mui/material";
import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { ChangeEvent, MouseEventHandler } from "react";
import showFile, { showDocs } from "../lib/cards";
import { MDoc } from "../lib/models";
import { DBDoc } from "../lib/mongo";
import { basepathSaveDoc, convertToBase64, subjects } from "../lib/myFunctions";

export default function Page({ inject }: { inject: string }) {
  const injectO = JSON.parse(inject) as Inject;

  const isubjects = injectO.isubjects;
  const router = useRouter();
  const query = router.query;

  // show Document card

  // show files
  function showCDocs() {
    const docs = injectO.docs as MDoc[];
    return (
      <Box>
        {docs.map((doc, i) => (
          <Box key={i}>
            {showFile(
              basepathServeDoc + "/" + doc.files[0] + ".pdf",
              doc.count
            )}
          </Box>
        ))}
      </Box>
    );
  }

  return (
    <>
      <Head>
        <title>
          Un site mauritanien pour la physique et la chimie du baccalaureat
        </title>
      </Head>
      <>{query.action == "docs" && showDocs(isubjects)}</>
      {/* <>{query.action == "form" && showDocs(subjects)}</> */}
      <>{query.action == "cdocs" && showCDocs()}</>
    </>
  );
}

interface Inject {
  docs: MDoc[];
  isubjects: any;
}
// this function excuted in the server
export async function getServerSideProps({
  query,
}: {
  query: { [key: string]: string };
}) {
  const inject = {} as Inject;
  const { count, action, field, chapter, kind } = query;
  let doc = {} as MDoc;

  const subjectInject = subjects;

  if (count) {
    const resDoc = await DBDoc.findOne({ count: count });
    doc = resDoc && resDoc;
    inject.docs.push(doc);
  }

  if (action == "docs") {
    const docs = await DBDoc.find({});
    for (const doc of docs) {
      const field = doc.field;
      const kind = doc.kind;
      const chapter = doc.chapter;

      if (chapter) {
        subjectInject[field][chapter][kind].total++;
      } else {
        subjectInject[field][kind].total++;
      }
    }
  }

  if (field) {
    const all = await DBDoc.find({});
    const docs = all.filter((doc) => {
      if (field == "general") {
        return doc.field == field && doc.kind == kind;
      } else {
        return doc.field == field && doc.chapter == chapter && doc.kind == kind;
      }
    });

    inject.docs = docs;
  }

  inject.isubjects = subjectInject;

  return {
    props: {
      inject: JSON.stringify(inject),
    },
  };
}
