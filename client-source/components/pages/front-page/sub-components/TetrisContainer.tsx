import React, { useEffect, useState } from 'react';

const transitionClass = 'transition ease-in-out delay-150 duration-200 ';

const mainDivClasses =
  'rounded-lg bg-zinc-300 text-center justify-center hover:shadow-2xl h-[225px] hover:translate-y-2 hover:bg-sky-800';

const TetrisContainer: React.FunctionComponent = () => {
  const textBaseClass = 'text-4xl';
  const [textEffect, setTextEffect] = useState<boolean>(false);
  const [textPosition, setTextPosition] = useState<number>(0);
  const [text, setText] = useState(
    <h1 className={textBaseClass}>Play Tetris</h1>
  );
  const [currentTimeout, setCurrentTimeout] = useState<
    NodeJS.Timeout | undefined
  >(undefined);

  const createTextEffect = () => {
    const incrementTextPositionAndSetText = () => {
      if (textEffect) {
        const trail1 = (textPosition + 6) % 11;
        const trail2 = (textPosition + 3) % 11;
        const newText = (
          <div className={textBaseClass}>
            {'Play Tetris'.split('').map((char: string, index) => {
              const trailCondition =
                (index < textPosition && index > trail1) ||
                (trail1 > textPosition &&
                  (index > trail1 || index < textPosition));

              const trailCondition2 =
                (index >= textPosition && index < trail2) ||
                (trail2 < textPosition &&
                  (index > textPosition || index < trail2));
              let colorClass: string;
              if (trailCondition2) {
                colorClass = 'text-yellow-200';
              } else if (trailCondition) {
                colorClass = 'text-purple-200';
              } else {
                colorClass = 'text-green-200';
              }
              return <span className={`${colorClass} `}>{char}</span>;
            })}
          </div>
        );
        setText(newText);
        setTextPosition((textPosition + 1) % 11);
      }
    };
    const timeout = setTimeout(incrementTextPositionAndSetText, 150);
    setCurrentTimeout(timeout);
  };

  useEffect(createTextEffect, [textEffect, textPosition]);

  return (
    <div
      className={`${transitionClass} ${mainDivClasses} flex h-[250px]`}
      onMouseEnter={() => setTextEffect(true)}
      onMouseLeave={() => {
        setTextEffect(false);
        clearTimeout(currentTimeout);
        setText(<h1 className={textBaseClass}>Play Tetris</h1>);
      }}
    >
      <div className="h-full text-center flex items-center">{text}</div>
    </div>
  );
};

export default TetrisContainer;
