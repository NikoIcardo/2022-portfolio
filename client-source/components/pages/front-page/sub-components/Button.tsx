import React from 'react';

const Button: React.FunctionComponent<ButtonProps> = ({ text, callBack }) => {
  const buttonClass =
    'text-zinc-200 text-bold text-2xl font-extrabold h-10 border border-zinc-300 hover:border-zinc-500 px-3 rounded hover:text-zinc-500 ';
  return (
    <div className="m-3 flex ">
      <div>
        <button className={buttonClass}>{text}</button>
      </div>
    </div>
  );
};

interface ButtonProps {
  text: string;
  callBack?: () => void;
}

export default Button;
