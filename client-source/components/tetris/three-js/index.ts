import React from 'react';
import * as THREE from 'three';

export const init = (
  ref: React.MutableRefObject<HTMLDivElement>
): THREE.Scene => {
  const scene = new THREE.Scene();
  if (ref.current.children.length === 0) {
    const camera = new THREE.PerspectiveCamera(
      70,
      window.innerWidth / window.innerHeight,
      0.01,
      10
    );
    camera.position.z = 1;

    const geometry = new THREE.BoxGeometry(0.2, 0.2, 0.2);
    const material = new THREE.MeshNormalMaterial();

    const mesh = new THREE.Mesh(geometry, material);
    scene.add(mesh);

    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(ref.current.offsetWidth || 1200, ref.current.offsetHeight);
    renderer.setAnimationLoop(animation);
    ref.current.appendChild(renderer.domElement);

    // animation

    function animation(time) {
      mesh.rotation.x = time / 2000;
      mesh.rotation.y = time / 1000;

      renderer.render(scene, camera);
    }
  }

  console.log(scene);
  return scene;
};
