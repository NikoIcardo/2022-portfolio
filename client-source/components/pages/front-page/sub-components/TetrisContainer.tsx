import React, { useEffect, useState } from 'react';

import Tetris from '../../../tetris/Tetris';
import TetrisText from './TetrisText';

const transitionClass = 'transition ease-in-out delay-150 duration-200 ';

const generateMainDivClasses = (playGame: boolean = false) =>
  `rounded-lg ${
    playGame ? 'bg-sky-800' : 'bg-zinc-300'
  } text-center justify-center hover:shadow-2xl ${
    playGame ? 'h-[950px]' : 'h-[250px]'
  } hover:translate-y-2 hover:bg-sky-800 flex
  `;

const TetrisContainer: React.FunctionComponent = () => {
  const textBaseClass = 'text-4xl';
  // game state and related visual changes
  const [playGame, setPlayGame] = useState<boolean>(false);

  // game container text
  const [textEffect, setTextEffect] = useState<boolean>(false);

  return (
    <div
      className={`${transitionClass} ${generateMainDivClasses(playGame)}`}
      style={{ cursor: textEffect ? 'pointer' : 'default' }}
      onMouseEnter={() => setTextEffect(true)}
      onMouseLeave={() => setTextEffect(false)}
      onClick={() => setPlayGame(!playGame)}
    >
      {playGame ? (
        <Tetris playGame={playGame} />
      ) : (
        <TetrisText textEffect={textEffect} />
      )}
    </div>
  );
};

export default TetrisContainer;
