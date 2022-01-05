import React from 'react';
import { useAppDispatch, useAppSelector } from '../hooks/redux-helper';
import { remove } from '../lib/list-reducer';
import { ItemType } from '../lib/utils';
import { Card } from './card/card';
import { DeleteIcon } from './icons/delete-icon';

export const ListItems = () => {
  const dispatch = useAppDispatch();
  const names = useAppSelector((state) => state.names);
  return (
    <div className="flex flex-col w-full h-[30rem] overflow-scroll">
      <ul>
        {names.map((item: ItemType) => (
          <Card>
            <div className="flex w-full" key={item.id + '-container'}>
              <li key={item.id} className="flex w-full justify-between">
                <p>{item.name}</p>
                <button
                  className="px-2"
                  onClick={() => dispatch(remove(item.id))}
                >
                  <DeleteIcon />
                </button>
              </li>
            </div>
          </Card>
        ))}
      </ul>
    </div>
  );
};
