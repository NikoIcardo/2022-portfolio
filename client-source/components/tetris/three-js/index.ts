import React from 'react';
import * as THREE from 'three';

enum keys {
  ARROW_UP = 'ArrowUp',
  ARROW_DOWN = 'ArrowDown',
  ARROW_LEFT = 'ArrowLeft',
  ARROW_RIGHT = 'ArrowRight',
}

const zPosition = -2;
const xOutlineSize = 12;
const yOutlineSize = 9;

const outlineBoundary = { x: -6, y: -4.5 };

let movementSpeed = 0.02;

const movement = (key: string, mesh: THREE.Mesh) => {
  switch (key) {
    case keys.ARROW_DOWN: {
      if (mesh.position.y - movementSpeed >= -1.45) {
        console.log(mesh.position.y);
        mesh.position.y -= movementSpeed;
      }
      return;
    }
    case keys.ARROW_UP: {
      if (mesh.position.y + movementSpeed <= 1.45) {
        console.log(mesh.position.y);
        mesh.position.y += movementSpeed;
      }
      return;
    }
    case keys.ARROW_RIGHT: {
      if (mesh.position.x + movementSpeed <= 1.95) {
        console.log(mesh.position.x);
        mesh.position.x += movementSpeed;
      }
      return;
    }
    case keys.ARROW_LEFT: {
      if (mesh.position.x - movementSpeed >= -1.95) {
        console.log(mesh.position.x);
        mesh.position.x -= movementSpeed;
      }
      return;
    }
  }
};

const initMovement = (mesh: THREE.Mesh) => {
  const keydown = (event: React.KeyboardEvent | any) => {
    event.preventDefault();
    movement(event.key, mesh);
  };
  document.body.addEventListener('keydown', keydown, false);
};

const getNewBox = (size: number = 0.02) => {
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
  mesh.position.x = position?.['x'] || 0.1;
  mesh.position.y = position?.['y'] || 0.1;
  mesh.position.z = position?.['z'] || zPosition;
};

const addGameContainer = (scene: THREE.scene) => {
  const position = { x: outlineBoundary.x, y: outlineBoundary.y, z: zPosition };

  const createLine = ({
    axis,
    position,
    increment,
  }: {
    axis: 'x' | 'y';
    position: { ['x']: number; ['y']: number; ['z']: number };
    increment: number;
  }) => {
    const mesh = getNewBox(0.1);
    scene.add(mesh);
    position[axis] += increment;
    setMeshPosition({ mesh, position });
  };

  let count = 0;

  while (count < 2) {
    for (let i = 0; i < xOutlineSize * 10; i++) {
      createLine({
        axis: 'x',
        position,
        increment: !!count ? -0.1 : 0.1,
      });
    }
    for (let i = 0; i < yOutlineSize * 10; i++) {
      createLine({
        axis: 'y',
        position,
        increment: !!count ? -0.1 : 0.1,
      });
    }
    count++;
  }
};

const createNewShape = () => {
  const geometry = new THREE.BoxGeometry(0.1, 0.1, 0);
  const material = new THREE.MeshNormalMaterial();

  return new THREE.Mesh(geometry, material);
};

export const init = (
  ref: React.MutableRefObject<HTMLDivElement>
): THREE.Scene => {
  const scene = new THREE.Scene();
  if (ref.current.children.length === 0) {
    const camera = new THREE.PerspectiveCamera(
      120,
      window.innerWidth / window.innerHeight,
      0.01,
      1000
    );
    camera.position.z = 1;

    const shape = createNewShape();
    shape.z = zPosition;
    scene.add(shape);

    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(ref.current.offsetWidth || 1200, ref.current.offsetHeight);
    renderer.setAnimationLoop(animation);
    ref.current.appendChild(renderer.domElement);

    addGameContainer(scene);
    initMovement(shape);

    // animation
    function animation(time) {
      renderer.render(scene, camera);
    }
  }

  return scene;
};

// add shape generation
