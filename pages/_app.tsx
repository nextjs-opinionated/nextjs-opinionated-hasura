import React from "react";
import { AppProps } from "next/app";
import "../styles/index.css"; // <- applied everywhere in the NextJS application scope

const MyApp = ({ Component, pageProps }: AppProps) => (
  <Component {...pageProps} />
);
export default MyApp;
