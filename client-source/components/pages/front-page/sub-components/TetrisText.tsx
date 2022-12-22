import React, { useState, useEffect } from 'react';

const textBaseClass = 'text-4xl';

const TetrisText: React.FC<{ textEffect: boolean }> = ({ textEffect }) => {
  // game container text
  const [textPosition, setTextPosition] = useState<number>(0);
  const [text, setText] = useState(
    <h1 className={textBaseClass}>Play Tetris</h1>
  );
  const [currentTimeout, setCurrentTimeout] = useState<
    NodeJS.Timeout | undefined
  >(undefined);

  // move to custom hook or component
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
      } else {
        clearTimeout(currentTimeout);
        setText(<h1 className={textBaseClass}>Play Tetris</h1>);
      }
    };
    const timeout = setTimeout(incrementTextPositionAndSetText, 150);
    setCurrentTimeout(timeout);
  };

  useEffect(createTextEffect, [textEffect, textPosition]);

  return (
    <div className="h-full text-center flex items-center select-none">
      {text}
    </div>
  );
};

export default TetrisText;
