/**
 * Form inspired by https://github.com/markmead/hyperui
 */

import React, { useState } from 'react';
import { AddIcon } from './icons/add-icon';
import { ListItems } from './list-items';
import { RoundButton } from './button/round-button';
import { add } from '../lib/list-reducer';
import { useAppDispatch } from '../hooks/redux-helper';

export const NameForm = () => {
  const [input, setInput] = useState('');
  const dispatch = useAppDispatch();

  const addName = () => {
    console.log(input);
    if (input || input !== '') {
      dispatch(add(input));
      setInput('');
    }
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
            value={input}
            id="name"
            type="text"
            placeholder="Name"
            className="block w-full h-16 pl-4 pr-16 border-2 border-gray-200 rounded-xl sm:text-sm"
            required
            onChange={(e) => {
              setInput(e.target.value);
            }}
          />
          <RoundButton onClick={() => addName}>
            <AddIcon />
          </RoundButton>
        </form>
      </div>
      <ListItems />
    </div>
  );
};
