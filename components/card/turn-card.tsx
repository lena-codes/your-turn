import React from 'react';
import { Card } from './card';
import { getTurn } from '../../lib/result-reducer';
import { useAppDispatch } from '../../hooks/redux-helper';
import { ItemType } from '../../lib/utils';
import { RunIcon } from '../icons/run-icon';

interface TurnCardProps {
  result: string;
  names: ItemType[];
}

export const TurnCard = (props: TurnCardProps) => {
  const dispatch = useAppDispatch();
  return (
    <Card>
      <div className="flex w-full flex-col">
        <div className="flex justify-between w-full flex-wrap">
          <h1 className="hocus:underline text-4xl m-0 text-center mb-10">
            Whose turn is it?
          </h1>
          <button
            onClick={() => dispatch(getTurn(props.names))}
            className="btn-primary rounded-lg max-w-30 max-h-12"
          >
            <RunIcon />
            <span>Run</span>
          </button>
        </div>
        <div className="flex">
          <p className="mt-5 mr-5">It&apos;s your turn:</p>
          <p className="mt-5 text-2xl">{props.result}</p>
        </div>
      </div>
    </Card>
  );
};
