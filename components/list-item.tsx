import React, { ComponentProps } from 'react';
import { ItemType } from '../pages';

export const ListItems = ({
  items,
  onRemove
}: {
  items: ItemType[];
  onRemove: Function;
}) => {
  return (
    <div className="flex flex-col w-full">
      <ul>
        {items.map((item: ItemType) => (
          <div className="flex item">
            <li key={item.id} className="flex w-full justify-between">
              <p>{item.name}</p>
              <button className="ml-2" onClick={() => onRemove(item.id)}>
                X
              </button>
            </li>
          </div>
        ))}
      </ul>
    </div>
  );
};
