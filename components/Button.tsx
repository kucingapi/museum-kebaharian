import React, { FC } from 'react';

interface button {
  className: String;
  onClick?: () => void;
  type?: "submit"
}

export const Button: FC<button> = (props) => {
  return (
    <button
      className={`text-base gap-2 normal-case btn font-bold text-slate-100 bg-primary rounded-xl ${props.className}`}
      onClick={props.onClick}
      type={props.type}
    >
      {props.children}
    </button>
  );
};
