import React from 'react';

const ModeButtons = () => {
  const textClasses =
    'text-white text-bold text-4xl font-extrabold tracking-tight';
  return (
    <div className="m-3 flex items-center ">
      <div>
        <button
          className={`${textClasses} h-40 bg-yellow-600  p-5 rounded hover:text-rose-800  hover:border`}
        >
          {'<'}
        </button>
      </div>
      <div className="w-500">
        <button
          className={`${textClasses} w-80 h-40 bg-yellow-600 rounded mx-2 my-1  hover:text-rose-800 hover:border`}
        >
          Battle
        </button>
      </div>
      <div>
        <button
          className={`${textClasses} h-40 bg-yellow-600 text-white p-5 rounded hover:text-rose-800 hover:border`}
        >
          {'>'}
        </button>
      </div>
    </div>
  );
};

export default ModeButtons;
