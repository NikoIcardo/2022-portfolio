import React from 'react';
import * as THREE from 'three';
import BottomContainer from './BottomContainer';

enum keys {
  ARROW_UP = 'ArrowUp',
  ARROW_DOWN = 'ArrowDown',
  ARROW_LEFT = 'ArrowLeft',
  ARROW_RIGHT = 'ArrowRight',
}

const zPosition = -2;
const xOutlineSize = 80;
const yOutlineSize = 110;

const outlinePosition = { x: -400, y: -550 };

const blockWidth = 10;
const movementSpeed = blockWidth;

const bottomContainer = new BottomContainer({
  containerSize: { x: xOutlineSize, y: yOutlineSize },
  containerPosition: outlinePosition,
  blockWidth,
});

let currentEventFunction;

const checkPosition = (mesh: THREE.Mesh): boolean => {
  console.log('calculating');
  const value = bottomContainer.checkIfBlockExistsOrIsZeroAtPosition(mesh);
  console.log('the value of value is ' + value);
  if (value) {
    console.log('we are here!');
    // remove event listener for old shape then add for a new shape
    document.body.removeEventListener('keydown', currentEventFunction, false);
    createNewShape();
    return false;
  } else {
    return true;
  }
};

// the reason movement speed is because the rounding here and in bottom container...
const movement = (key: string, mesh: THREE.Mesh) => {
  switch (key) {
    case keys.ARROW_DOWN: {
      if (
        checkPosition(mesh) &&
        mesh.position.y - movementSpeed > outlinePosition.y
      ) {
        mesh.position.y = mesh.position.y - movementSpeed;
      }
      return;
    }
    case keys.ARROW_UP: {
      if (
        mesh.position.y + movementSpeed <
        outlinePosition.y + yOutlineSize * blockWidth
      ) {
        mesh.position.y = mesh.position.y + movementSpeed;
      }
      return;
    }
    case keys.ARROW_RIGHT: {
      if (
        mesh.position.x + movementSpeed <
        outlinePosition.x + xOutlineSize * blockWidth
      ) {
        mesh.position.x = mesh.position.x + movementSpeed;
      }
      return;
    }
    case keys.ARROW_LEFT: {
      if (mesh.position.x - movementSpeed > outlinePosition.x) {
        mesh.position.x = mesh.position.x - movementSpeed;
      }
      return;
    }
  }
};

const keydown = (event: React.KeyboardEvent | any, mesh: THREE.Mesh) => {
  event.preventDefault();
  movement(event.key, mesh);
};

const initMovement = (mesh: THREE.Mesh) => {
  currentEventFunction = (event) => keydown(event, mesh);
  document.body.addEventListener('keydown', currentEventFunction, false);
};

const getNewBox = (size: number = blockWidth) => {
  const geometry = new THREE.BoxGeometry(size, size, 0);
  const material = new THREE.MeshNormalMaterial();

  return new THREE.Mesh(geometry, material);
};

const setMeshPosition = ({
  mesh,
  position,
}: {
  mesh: THREE.Mesh;
  position?: { ['x']: number; ['y']: number; ['z']: number };
}) => {
  mesh.position.x = position?.['x'];
  mesh.position.y = position?.['y'];
  mesh.position.z = position?.['z'];
};

const addGameContainer = (scene: THREE.scene) => {
  const position = { x: outlinePosition.x, y: outlinePosition.y, z: zPosition };

  const addOutlineBlock = ({
    axis,
    position,
    increment,
  }: {
    axis: 'x' | 'y';
    position: { ['x']: number; ['y']: number; ['z']: number };
    increment: number;
  }) => {
    const mesh = getNewBox();
    scene.add(mesh);
    position[axis] += increment;
    setMeshPosition({ mesh, position });
  };

  let count = 0;

  while (count < 2) {
    for (let i = 0; i < xOutlineSize; i++) {
      addOutlineBlock({
        axis: 'x',
        position,
        increment: !!count ? -blockWidth : blockWidth,
      });
    }
    for (let i = 0; i < yOutlineSize; i++) {
      addOutlineBlock({
        axis: 'y',
        position,
        increment: !!count ? -blockWidth : blockWidth,
      });
    }
    count++;
  }
};

const createNewShape = (): void => {
  console.log('here adding new shape');
  const geometry = new THREE.BoxGeometry(blockWidth, blockWidth, 0);
  const material = new THREE.MeshNormalMaterial();

  const shape = new THREE.Mesh(geometry, material);
  shape.position.z = zPosition;
  shape.position.y = 500;
  shape.position.x = 0;
  scene.add(shape);
  initMovement(shape);
};

let scene;

export const init = (
  ref: React.MutableRefObject<HTMLDivElement>
): THREE.Scene => {
  if (ref.current.children.length === 0) {
    scene = new THREE.Scene();

    const camera = new THREE.OrthographicCamera(
      window.innerWidth / -2,
      window.innerWidth / 2,
      window.innerHeight / 2,
      window.innerHeight / -2,
      -2,
      2
    );

    // const camera = new THREE.PerspectiveCamera(
    //   120,
    //   window.innerWidth / window.innerHeight,
    //   0.01,
    //   100
    // );
    camera.position.z = 0;
    camera.position.y = 0;
    camera.position.x = 0;

    // shape creation
    createNewShape();

    addGameContainer(scene);

    // rendering
    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(ref.current.offsetWidth || 1200, ref.current.offsetHeight);
    renderer.setAnimationLoop(animation);
    ref.current.appendChild(renderer.domElement);

    // animation
    function animation(time) {
      renderer.render(scene, camera);
    }
  }

  return scene;
};

// add shape generation
