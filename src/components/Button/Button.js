import React from 'react';

const Button = ({ title, Icon, onClick, className, type }) => {
  return (
    <button
      className={`${className} px-3 py-1 flex items-center space-x-3 rounded border-2 border-blue-500 text-blue-500  hover:bg-blue-500 hover:text-white`}
      onClick={onClick}
      type={!!type === true ? type : 'button'}
    >
      <div className="font-medium ">{title}</div>
      {!!Icon && (
        <div>
          <Icon />
        </div>
      )}
    </button>
  );
};

export default Button;
