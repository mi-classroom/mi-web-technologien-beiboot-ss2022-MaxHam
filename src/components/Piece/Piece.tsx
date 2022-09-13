import { Image } from '@react-three/drei';
import React, {useRef} from 'react';
import { IPieceComponent } from '../../types';
import { getImage } from '../../utils';
import Line from '../Line';
import * as THREE from 'three';
import './Piece.scss';

const Piece =(props: IPieceComponent) => {
  const {
    img,
    imgScale,
    onSelect,
    pieceId,
    position,
    selected,
    ...otherProps
  } = props;


  const selectedLineStart = position.clone().add(new THREE.Vector3(0, 0, .05))
  const selectedLineEnd= position.clone().add(new THREE.Vector3(0, -.5, .05))

  return (
    <>      
      <mesh {...otherProps}  position={position} onClick={onSelect(pieceId)} name={pieceId} >
        <Image
          url={getImage(img)}
          // @ts-ignore
          scale={imgScale}
        />sa
      </mesh>
      {selected && <Line color='#fc0' start={selectedLineStart} end={selectedLineEnd} />}
    </>
);
};

export default Piece;
