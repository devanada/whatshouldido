import Image from 'next/image';
import moment from 'moment';
import React from 'react';

const Footer = () => {
  return (
    <footer className="mt-6 flex min-h-footer w-full justify-center border-t bg-light/95 dark:border-t-dark-2 dark:bg-dark/95">
      <div className="container grid h-full grid-cols-1 items-center justify-items-center p-3 md:grid-cols-2">
        <Image
          src="/logo.png"
          alt="Logo"
          width="200"
          height="200"
          className="object-contain"
        />
        <p className="break-words text-dark dark:text-light">
          Copyright © {moment().format('YYYY')} - All right reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;
