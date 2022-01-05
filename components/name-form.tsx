/**
 * Form inspired by https://github.com/markmead/hyperui
 */

import React from 'react';
import { ItemType } from '../pages';
import { AddIcon } from './icons/add-icon';
import { ListItems } from './list-items';
import { RoundButton } from './button/round-button';
import { addItem, getRandomId, removeItem } from '../lib/logic';

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
    if (inputStored != '') {
      setStateStored(addItem(inputStored, stateStored));
      setInputStored('');
    }
  };

  const removeName = (id: string) => {
    setStateStored(removeItem(id, stateStored));
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
          <RoundButton onClick={addName}>
            <AddIcon />
          </RoundButton>
        </form>
      </div>
      <ListItems items={stateStored} onRemove={removeName} />
    </div>
  );
};
