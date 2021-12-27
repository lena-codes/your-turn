import React, { useEffect, useState } from 'react';
import { ReactSortable } from 'react-sortablejs';
import { useSessionStorage } from '../hooks/useSessionStorage';

import { ItemType } from '../pages';

export const NameForm: React.FC = () => {
  const [stateStored, setStateStored] = useSessionStorage('state', []);
  const [inputStored, setInputStored] = useSessionStorage('input', '');

  const addName = () => {
    setStateStored([
      ...stateStored,
      { id: stateStored.length, name: inputStored }
    ]);
    setInputStored('');
  };

  useEffect(() => {
    setStateStored(stateStored);
    setInputStored(inputStored);
  });

  return (
    <div className="text-blue-400">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          addName();
        }}
      >
        <label htmlFor="name" className="mr-2">
          Name
        </label>
        <input
          value={inputStored}
          id="name"
          type="text"
          autoComplete="name"
          className="mr-2"
          required
          onChange={(e) => {
            setInputStored(e.target.value);
          }}
        />
        <button type="submit">Add</button>
      </form>
      <ReactSortable list={stateStored} setList={setStateStored}>
        {stateStored.map((item: ItemType) => (
          <div key={item.id}>{item.name}</div>
        ))}
      </ReactSortable>
    </div>
  );
};
