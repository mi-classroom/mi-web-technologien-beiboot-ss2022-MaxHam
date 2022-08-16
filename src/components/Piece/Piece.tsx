import { Image } from '@react-three/drei';
import React from 'react';
import { IPieceComponent } from '../../types';
import { getImage } from '../../utils';
import './Piece.scss';

const Piece = React.forwardRef((props: IPieceComponent, mesh: any) => {
  const {
    img,
    imgScale,
    onSelect,
    pieceId,
    position,
    ...otherProps
  } = props;



  return (
      <mesh {...otherProps} ref={mesh} position={position} onClick={onSelect(pieceId)} name={pieceId} >
        <Image
          url={getImage(img)}
          // @ts-ignore
          scale={imgScale}
        />
      </mesh>
  );
});

export default Piece;
