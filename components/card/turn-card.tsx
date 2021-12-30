import React from 'react';
import { ItemType } from '../../pages';
import { Card } from './card';
import { RunButton } from '../button/run-button';

export const TurnCard = ({
  stateStored,
  setResult,
  result
}: {
  stateStored: ItemType[];
  setResult: Function;
  result: string;
}) => {
  return (
    <Card>
      <div className="flex w-full flex-col">
        <div className="flex justify-between w-full flex-wrap">
          <h1 className="hocus:underline text-4xl m-0 text-center mb-10">
            Whose turn is it?
          </h1>
          <RunButton items={stateStored} setResult={setResult} />
        </div>
        <div className="flex">
          <p className="mt-5 mr-5">It&apos;s your turn:</p>
          <p className="mt-5 text-2xl">{result}</p>
        </div>
      </div>
    </Card>
  );
};
