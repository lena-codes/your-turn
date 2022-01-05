import React from 'react';
import { Button } from './button';
import { RunIcon } from '../icons/run-icon';

interface ButtonProps {
  onClick: Function;
}

export const RunButton: React.FC<
  ButtonProps & React.HTMLProps<HTMLButtonElement>
> = (props) => {
  return (
    <>
      <Button onClick={props.onClick} className="rounded-lg">
        <RunIcon />
        <span>Run</span>
      </Button>
    </>
  );
};
