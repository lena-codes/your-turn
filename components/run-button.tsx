import React from 'react';
import { ItemType } from '../pages';
import { RunIcon } from './icons/run-icon';

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
      <RunIcon />
      <span>Run</span>
    </button>
  );
};

function getRandomInt(min: number, max: number) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}
