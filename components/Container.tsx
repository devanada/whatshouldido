import React, { ReactNode, FC } from "react";
import Head from "next/head";

import Navbar from "./Navbar";

interface Props {
  children: ReactNode;
  docTitle: string;
  docDesc: string;
}

const Container: FC<Props> = ({ children, docTitle, docDesc }) => {
  return (
    <div className="h-screen w-full bg-dark">
      <Head>
        <title>{docTitle}</title>
        <meta name="description" content={docDesc} />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex h-full w-full flex-col items-center overflow-auto">
        <Navbar />
        <div className="container flex h-full flex-col items-center p-3">
          {children}
        </div>
      </main>
    </div>
  );
};

export default Container;
