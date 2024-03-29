import { Box, Button } from "@mui/material";
import Head from "next/head";
import { useRouter } from "next/router";
import React from "react";
import showFile, { showDocs } from "../components/cards";
import { MDoc } from "../lib/models";
import { DBDoc } from "../lib/mongo";
import { basepathServeDoc, subjects } from "../lib/myFunctions";

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
            {showFile(basepathServeDoc + doc.file, doc.count)}
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
      <>{query.field && showCDocs()}</>
      <>{query.count && showCDocs()}</>
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
  const inject = { docs: [], isubjects: {} } as Inject;
  const { count, action, field, chapter, kind } = query;
  let doc = {} as MDoc;

  const subjectInject: {
    [key: string]: { [key: string]: { [key: string]: { total: number } } };
  } = {
    general: {
      general: {
        courses: { total: 0 },
        exercises: { total: 0 },
      },
    },
    physics: {
      general: {
        courses: { total: 0 },
        exercises: { total: 0 },
      },
      kinematics: {
        courses: { total: 0 },
        exercises: { total: 0 },
      },
      dynamics: {
        courses: { total: 0 },
        exercises: { total: 0 },
      },
      magnetism: {
        courses: { total: 0 },
        exercises: { total: 0 },
      },
    },
    chemistry: {
      general: {
        courses: { total: 0 },
        exercises: { total: 0 },
      },
      kinetic: {
        courses: { total: 0 },
        exercises: { total: 0 },
      },
      acidBase: {
        courses: { total: 0 },
        exercises: { total: 0 },
      },
      organic: {
        courses: { total: 0 },
        exercises: { total: 0 },
      },
    },
  };

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
      subjectInject[field][chapter][kind].total++;
    }
  }

  if (field) {
    const all = await DBDoc.find({});
    const docs = all.filter((doc) => {
      return doc.field == field && doc.chapter == chapter && doc.kind == kind;
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
