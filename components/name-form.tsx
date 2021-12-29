/**
 * Form inspired by https://github.com/markmead/hyperui
 */

import React from 'react';
import { ItemType } from '../pages';
import { ListItems } from './list-item';

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
            <svg
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5"
            >
              <path
                fillRule="evenodd"
                d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z"
                clipRule="evenodd"
              ></path>
            </svg>
          </button>
        </form>
      </div>
      <ListItems items={stateStored} onRemove={removeName} />
    </div>
  );
};
