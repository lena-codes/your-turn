import React from 'react';

interface ButtonProps {
  onClick?: Function;
}

export const RoundButton: React.FC<
  ButtonProps & React.HTMLProps<HTMLButtonElement>
> = (props) => {
  return (
    <button
      type="button"
      className="absolute p-2 text-white transform -translate-y-1/2 bg-blue-600 rounded-full shadow-lg hover:bg-blue-500 right-4 top-1/2"
    >
      {props.children}
    </button>
  );
};
