import React from 'react';
import { Button } from './button';

interface ButtonProps {
  onClick: Function;
}

export const RoundButton: React.FC<
  ButtonProps & React.HTMLProps<HTMLButtonElement>
> = (props) => {
  return (
    <Button
      type="button"
      className="absolute p-2 transform -translate-y-1/2 rounded-full shadow-lg right-4 top-1/2"
      onClick={props.onClick}
    >
      {props.children}
    </Button>
  );
};
