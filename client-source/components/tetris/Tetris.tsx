import React from 'react';
import * as THREE from 'three';

import { init } from './three-js';

const Tetris: React.FunctionComponent<{ playGame: boolean }> = ({
  playGame,
}) => {
  const [openedGame, setOpenedGame] = React.useState<boolean>(false);
  const [scene, setScene] = React.useState<THREE.scene>(null);
  const ref = React.useRef<HTMLDivElement | null>(null);

  React.useEffect(() => {
    if (!!ref && !openedGame && !scene) {
      setScene(init(ref));
      setOpenedGame(true);
    }
    console.log(scene);
  }, [playGame]);

  return <div ref={ref}></div>;
};

export default Tetris;
