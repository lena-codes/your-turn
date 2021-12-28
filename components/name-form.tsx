import React from 'react';
import { ItemType } from '../pages';
import { ListItems } from './list-item';
import Image from 'next/image';

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
      <div className="flex mb-6 w-full flex-row justify-center items-center">
        <form
          className="text-gray-400 w-full"
          onSubmit={(e) => {
            e.preventDefault();
            addName();
          }}
        >
          <label htmlFor="name" className="mr-3 text-gray-500 font-bold w-1/6">
            Name
          </label>
          <input
            value={inputStored}
            id="name"
            type="text"
            autoComplete="name"
            className="mr-3 w-4/6"
            required
            onChange={(e) => {
              setInputStored(e.target.value);
            }}
          />
          <button
            type="submit"
            className="bg-blue-500 dark:bg-slate-200 hover:bg-blue-700 dark:hover:bg-slate-500 text-white dark:text-gray-900 font-bold py-1 px-4 rounded shadow"
          >
            <Image width={18} height={18} src="/add-icon.svg" />
          </button>
        </form>
      </div>
      <ListItems items={stateStored} onRemove={removeName} />
    </div>
  );
};
