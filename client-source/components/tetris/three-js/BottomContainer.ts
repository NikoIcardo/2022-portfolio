import React from 'react';
import * as THREE from 'three';

export default class BottomContainer {
  containerSize: { x: number; y: number };
  containerPosition: { x: number; y: number };
  blockWidth: number;

  numberOfColumns: number;
  columnHeight: number;
  columns: THREE.Mesh[][] = [];
  constructor({
    containerSize,
    blockWidth,
    containerPosition,
  }: {
    containerSize: { x: number; y: number };
    containerPosition: { x: number; y: number };
    blockWidth: number;
  }) {
    this.containerSize = containerSize;
    this.containerPosition = containerPosition;
    this.blockWidth = blockWidth;
    this.setColumns();
    console.log('bottom container values');
    console.log(this);
  }

  setColumns = () => {
    this.numberOfColumns = this.containerSize.x;

    this.columnHeight = this.containerSize.y;

    while (this.columns.length < this.numberOfColumns) {
      const newColumn: (null | THREE.mesh)[] = [];
      while (newColumn.length < this.columnHeight) {
        newColumn.push(null);
      }

      this.columns.push(newColumn);
    }
  };

  translateBlockPositionToContainerPosition = (
    mesh: THREE.Mesh
  ): { x: number; y: number } => {
    console.log(mesh.position.x);
    console.log(Math.abs(this.containerPosition.x));
    return {
      x:
        Math.floor(mesh.position.x + Math.abs(this.containerPosition.x)) /
        this.blockWidth,
      y:
        Math.floor(mesh.position.y + Math.abs(this.containerPosition.y)) /
        this.blockWidth,
    };
  };

  addBlocksToContainer = ({
    mesh,
    coords,
  }: {
    mesh: THREE.Mesh;
    coords: { x: number; y: number };
  }) => {
    const { x, y } = coords;
    console.log(this.columns);
    console.log(x, y);
    if (!this.columns[x]) this.columns[x][y] = mesh;
  };

  checkIfBlockExistsOrIsZeroAtPosition = (mesh: THREE.mesh): boolean => {
    const { x, y } = this.translateBlockPositionToContainerPosition(mesh);
    console.log('calculated position x: ' + x + '  y: ' + y);
    const blockExistsBelowOrIsZero: boolean =
      !!this.columns[x]?.[y - 1] || y - 1 <= 0;

    console.log('block exists ' + blockExistsBelowOrIsZero);
    if (blockExistsBelowOrIsZero) {
      console.log('in the mainframe');
      this.addBlocksToContainer({ mesh, coords: { x, y } });
    }
    console.log('returning');

    return blockExistsBelowOrIsZero;
  };
}
