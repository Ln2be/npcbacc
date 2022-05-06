// import { PropTypes } from "@mui/material";
import React, { FunctionComponent, ReactNode, ReactPropTypes } from "react";
import Layout from "../components/layout";
import "../styles/globals.css";
import { useRouter } from "next/router";
import { useEffect } from "react";
import * as gtag from "../lib/gtag";
const isProduction = process.env.NODE_ENV === "production";
// import * as React from "react";

const App: FunctionComponent<{ Component: any; pageProps: ReactPropTypes }> = ({
  Component,
  pageProps,
}) => {
  const router = useRouter();

  useEffect(() => {
    const handleRouteChange = (url: URL) => {
      /* invoke analytics function only for production */
      if (isProduction) gtag.pageview(url);
    };
    router.events.on("routeChangeComplete", handleRouteChange);
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router.events]);
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
};

export default App;
