import React from 'react';

export default function FlexContainer({ children, className, id }) {
  return (
    <div
      className={`py-10 sm:py-20 px-4 sm:px-6 md:px-10 lg:px-16 xl:px-16  ${
        className === undefined ? '' : className
      }`}
      id={id ? id : ''}
    >
      {children}
    </div>
  );
}
