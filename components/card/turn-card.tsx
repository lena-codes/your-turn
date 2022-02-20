import React, { useState } from 'react';
import { Card } from './card';
import { getTurn } from '../../lib/result-reducer';
import { useAppDispatch } from '../../hooks/redux-helper';
import { ItemType } from '../../lib/utils';
import { PlayIcon } from '@heroicons/react/outline';

interface TurnCardProps {
  result: string;
  names: ItemType[];
}

export const TurnCard = (props: TurnCardProps) => {
  const dispatch = useAppDispatch();
  const [loading, setLoading] = useState(false);
  const run = () => {
    setLoading(true);
    setTimeout(() => {
      dispatch(getTurn(props.names));
      setLoading(false);
    }, 100);
  };

  return (
    <Card>
      <div className="flex w-full flex-col">
        <div className="flex justify-between w-full flex-wrap">
          <h1 className="hocus:underline text-4xl m-0 text-center mb-10">
            Whose turn is it?
          </h1>
          <div className="tooltip" data-tip="Run the app">
            <button
              onClick={() => run()}
              className="btn btn-primary rounded-lg max-w-30 max-h-12"
            >
              <PlayIcon height={20} width={20} />
              <span className="ml-1">Run</span>
            </button>
          </div>
        </div>
        <div className="flex h-20 text-center items-center">
          <p className="mt-5 mr-5">
            {props.result === '' ? null : "It's your turn:"}
          </p>
          <p className="mt-5 text-2xl">{loading ? null : props.result}</p>
        </div>
      </div>
    </Card>
  );
};
