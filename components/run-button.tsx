import React from 'react';
import { ItemType } from '../pages';
import Image from 'next/image';

export const RunButton = ({
  items,
  setResult
}: {
  items: ItemType[];
  setResult: Function;
}) => {
  const clickTheButton = () => {
    const random = getRandomInt(0, items.length);
    return setResult(items[random].name);
  };

  return (
    <button
      className="bg-blue-500 dark:bg-slate-200 hover:bg-blue-700 dark:hover:bg-slate-500 text-white dark:text-gray-900 font-bold py-1 px-4 rounded shadow"
      onClick={clickTheButton}
    >
      <Image
        src="/play-icon.svg"
        height={80}
        width={80}
        className="text-gray-900"
      />
    </button>
  );
};

function getRandomInt(min: number, max: number) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}
