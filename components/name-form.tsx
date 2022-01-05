/**
 * Form inspired by https://github.com/markmead/hyperui
 */

import React, { useState } from 'react';
import { PlusIcon } from '@heroicons/react/solid';
import { ListItems } from './list-items';
import { add } from '../lib/list-reducer';
import { useAppDispatch } from '../hooks/redux-helper';

export const NameForm = () => {
  const [input, setInput] = useState('');
  const dispatch = useAppDispatch();

  const addName = () => {
    if (input !== '') {
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
            className="block w-full h-16 pl-4 pr-16 border-2 border-gray-200 dark:border-gray-600 rounded-xl sm:text-sm bg-white dark:bg-slate-800"
            onChange={(e) => {
              setInput(e.target.value);
            }}
          />
          <button
            onClick={() => addName()}
            className="btn-primary absolute p-2 transform -translate-y-1/2 rounded-full shadow-lg right-4 top-1/2"
          >
            <PlusIcon height={20} width={20} />
          </button>
        </form>
      </div>
      <ListItems />
    </div>
  );
};
