/**
 * Form inspired by https://github.com/markmead/hyperui
 */

import React from 'react';
import { ItemType } from '../pages';
import { AddIcon } from './icons/add-icon';
import { ListItems } from './list-items';
import { RoundButton } from './button/round-button';

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
      <div className="relative">
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
          <RoundButton>
            <AddIcon />
          </RoundButton>
        </form>
      </div>
      <ListItems items={stateStored} onRemove={removeName} />
    </div>
  );
};
