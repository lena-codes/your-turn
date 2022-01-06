/**
 * inspired by https://github.com/markmead/hyperui
 */

import React from 'react';

export const Footer = () => {
  return (
    <footer className="bg-gray-50 dark:bg-gray-800 w-full flex flex-initial">
      <div className="px-10 py-8 md:py-16 space-y-12">
        <p className="text-xs text-gray-500 dark:text-gray-200 text-left">
          &copy; {` 2021 powered by `}
          <a href="https://lena.codes" target="_blank" rel="noreferrer">
            lena.codes
          </a>
        </p>
      </div>
    </footer>
  );
};
