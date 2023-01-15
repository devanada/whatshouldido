import React, { ReactNode, FC } from 'react';
import Head from 'next/head';
import clsx from 'clsx';

import Navbar from './Navbar';
import Footer from './Footer';

interface Props {
  children: ReactNode;
  docTitle: string;
  docDesc: string;
  className?: string;
}

const Container: FC<Props> = ({ children, docTitle, docDesc, className }) => {
  return (
    <div className="flex h-screen w-full flex-col overflow-auto bg-light dark:bg-dark">
      <Head>
        <title>{docTitle}</title>
        <meta name="description" content={docDesc} />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <main className="flex w-full grow flex-col items-center">
        <div className="container flex h-full flex-col items-center">{children}</div>
      </main>
      <Footer />
    </div>
  );
};

export default Container;
