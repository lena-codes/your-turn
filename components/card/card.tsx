import React from 'react';

export const Card: React.FC = (props) => {
  return (
    <div className="block p-4 bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
      {props.children}
    </div>
  );
};
