import React from 'react';
import { ItemType } from '../pages';
import Image from 'next/image';

export const ListItems = ({
  items,
  onRemove
}: {
  items: ItemType[];
  onRemove: Function;
}) => {
  return (
    <div className="flex flex-col w-full h-[40rem] overflow-scroll">
      <ul>
        {items.map((item: ItemType) => (
          <div className="flex item">
            <li key={item.id} className="flex w-full justify-between">
              <p>{item.name}</p>
              <button className="ml-2 px-2" onClick={() => onRemove(item.id)}>
                <Image src="/trash-icon.svg" width={18} height={18} />
              </button>
            </li>
          </div>
        ))}
      </ul>
    </div>
  );
};
