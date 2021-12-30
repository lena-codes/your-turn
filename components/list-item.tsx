import React from 'react';
import { ItemType } from '../pages';
import { Card } from './card';
import { DeleteIcon } from './icons/delete-icon';

export const ListItems = ({
  items,
  onRemove
}: {
  items: ItemType[];
  onRemove: Function;
}) => {
  return (
    <div className="flex flex-col w-full h-[30rem] overflow-scroll">
      <ul>
        {items.map((item: ItemType) => (
          <Card>
            <div className="flex w-full" key={item.id + '-container'}>
              <li key={item.id} className="flex w-full justify-between">
                <p>{item.name}</p>
                <button className="px-2" onClick={() => onRemove(item.id)}>
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
