import React from 'react';
import { ItemType } from '../../pages';
import { Button } from './button';
import { RunIcon } from '../icons/run-icon';

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
    <Button onClick={clickTheButton}>
      <RunIcon />
      <span>Run</span>
    </Button>
  );
};

function getRandomInt(min: number, max: number) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}
