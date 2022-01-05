/**
 * inspired by https://github.com/markmead/hyperui
 */

import React from 'react';

export const Footer = () => {
  return (
    <footer className="bg-gray-50 dark:bg-gray-800 w-full flex">
      <div className="px-10 py-16 space-y-12">
        <p className="text-xs text-gray-500 dark:text-gray-200 text-left">
          &copy; {` 2021 powered by `}
          <a
            href="https://lena.codes"
            className="hover:underline"
            target="_blank"
            rel="noreferrer"
          >
            lena.codes
          </a>
        </p>
      </div>
    </footer>
  );
};
