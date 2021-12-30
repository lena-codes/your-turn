/**
 * Form inspired by https://github.com/markmead/hyperui
 */

import React from 'react';
import { ItemType } from '../pages';
import { AddIcon } from './icons/add-icon';
import { ListItems } from './list-items';

export const NameForm = ({
  stateStored,
  setStateStored,
  inputStored,
  setInputStored
}: {
  stateStored: ItemType[];
  setStateStored: Function;
  inputStored: string;
  setInputStored: Function;
}) => {
  const addName = () => {
    setStateStored([
      ...stateStored,
      { id: Math.round(Math.random() * 10000), name: inputStored }
    ]);
    setInputStored('');
  };

  const removeName = (id: number) => {
    const newStateStored: ItemType[] = (stateStored as ItemType[]).filter(
      (item) => id !== item.id
    );
    setStateStored(newStateStored);
  };

  return (
    <div className="w-full flex flex-col">
      <div className="relative mb-5">
        <form
          className="text-gray-400 w-full"
          onSubmit={(e) => {
            e.preventDefault();
            addName();
          }}
        >
          <label htmlFor="name" className="sr-only">
            Name
          </label>
          <input
            value={inputStored}
            id="name"
            type="text"
            placeholder="Enter name..."
            className="block w-full h-16 pl-4 pr-16 border-2 border-gray-200 rounded-xl sm:text-sm"
            required
            onChange={(e) => {
              setInputStored(e.target.value);
            }}
          />
          <button
            type="button"
            className="absolute p-2 text-white transform -translate-y-1/2 bg-blue-600 rounded-full shadow-lg hover:bg-blue-500 right-4 top-1/2"
          >
            <AddIcon />
          </button>
        </form>
      </div>
      <ListItems items={stateStored} onRemove={removeName} />
    </div>
  );
};
