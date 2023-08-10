import { AppProps } from "next/app";
import Head from "next/head";
import { Toaster } from "react-hot-toast";

import "tailwindcss/tailwind.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Convert_Threads</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Toaster />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
