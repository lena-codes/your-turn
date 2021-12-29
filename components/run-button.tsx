import React from 'react';
import { ItemType } from '../pages';

export const RunButton = ({
  items,
  setResult
}: {
  items: ItemType[];
  setResult: Function;
}) => {
  const clickTheButton = () => {
    const random = getRandomInt(0, items.length);
    if (items.length > 0) {
      return setResult(items[random].name);
    } else {
      return setResult('Please add names first!');
    }
  };

  return (
    <button
      type="button"
      className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center mr-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      onClick={clickTheButton}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-6 h-6 dark:text-white mr-2"
        viewBox="0 0 20 20"
        fill="none"
        stroke="currentColor"
      >
        <path
          fillRule="evenodd"
          d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
          clipRule="evenodd"
        />
      </svg>
      <span>Run</span>
    </button>
  );
};

function getRandomInt(min: number, max: number) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}
