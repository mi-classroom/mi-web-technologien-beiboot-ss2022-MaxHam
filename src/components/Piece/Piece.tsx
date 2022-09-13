import { Image } from '@react-three/drei';
import React, {useRef} from 'react';
import { IPieceComponent } from '../../types';
import { getImage } from '../../utils';
import Line from '../Line';
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

  const meshRef = useRef()
  const imgRef = useRef()

  return (
    <>      
      <mesh {...otherProps} ref={meshRef} position={position} onClick={onSelect(pieceId)} name={pieceId} >
        <Image
          url={getImage(img)}
          // @ts-ignore
          scale={imgScale}
          ref={imgRef}
        />
      </mesh>
      {selected && <Line color='#fc0' start={[position.x,  position.y, position.z + 0.01]} end={[position.x, -0.5, position.z + 0.01]} />}
    </>
);
};

export default Piece;
