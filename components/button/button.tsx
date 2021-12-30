import React from 'react';

interface ButtonProps {
  onClick: Function;
}

export const Button: React.FC<
  ButtonProps & React.HTMLProps<HTMLButtonElement>
> = (props) => {
  return (
    <button
      type="button"
      className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center mr-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 max-w-30 max-h-12"
      onClick={props.onClick}
    >
      {props.children}
    </button>
  );
};
