/**
 * inspired by https://github.com/markmead/hyperui
 */

import React from 'react';

export const Footer = () => {
  return (
    <footer className="bg-gray-50">
      <div className="max-w-screen-xl px-4 py-16 space-y-12 sm:px-6 lg:px-8">
        <p className="text-xs text-gray-500 text-left">
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
