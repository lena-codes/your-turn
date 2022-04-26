import { TrashIcon } from '@heroicons/react/solid';
import React from 'react';
import { useAppDispatch, useAppSelector } from '../hooks/redux-helper';
import { remove } from '../lib/list-reducer';
import { ItemType } from '../lib/utils';
import { Card } from './card/card';

export const ListItems = () => {
  const dispatch = useAppDispatch();
  const names = useAppSelector((state) => state.names);
  return (
    <div className="flex flex-col w-full overflow-y-auto">
      <ul>
        {names.map((item: ItemType) => (
          <Card key={item.id + '-card'}>
            <div className="flex w-full" key={item.id + '-container'}>
              <li key={item.id} className="flex w-full justify-between">
                <p>{item.name}</p>
                <button
                  className="px-2"
                  onClick={() => dispatch(remove(item.id))}
                >
                  <div className="tooltip tooltip-left" data-tip="Delete">
                    <TrashIcon height={20} width={20} />
                  </div>
                </button>
              </li>
            </div>
          </Card>
        ))}
      </ul>
    </div>
  );
};
