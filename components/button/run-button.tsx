import React from 'react';
import { ItemType } from '../../pages';
import { Button } from './button';
import { RunIcon } from '../icons/run-icon';
import { determineTurn } from '../../lib/logic';

export const RunButton = ({
  items,
  setResult
}: {
  items: ItemType[];
  setResult: Function;
}) => {
  const clickTheButton = () => {
    return setResult(determineTurn(items));
  };

  return (
    <>
      <Button onClick={clickTheButton} className="rounded-lg">
        <RunIcon />
        <span>Run</span>
      </Button>
    </>
  );
};
