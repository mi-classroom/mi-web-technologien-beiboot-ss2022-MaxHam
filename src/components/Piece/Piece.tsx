import { Image } from '@react-three/drei';
import { createRef, useRef } from 'react';
import { BufferGeometry, Material, Mesh } from 'three';
import { IPiece } from '../../types';
import { getImage } from '../../utils';
import './Piece.scss';

const Piece: React.FC<IPiece> = (props: IPiece) => {
  const {
    img,
    width,
    height,
    indentation = 1,
    handleHover,
    year = 1,
    scale,
  } = props;

  const mesh = createRef<Mesh<BufferGeometry, Material | Material[]>>();
  const stepSize = 1;

  return (
    <mesh
      ref={mesh}
      position={[indentation * 1.1, 0, -(year - 1501) * stepSize]}
      onPointerOver={handleHover(props)}
      onPointerLeave={handleHover(null)}
    >
      <Image
        url={getImage(img)}
        // @ts-ignore
        scale={[(width / 1000) * scale, (height / 1000) * scale, 0]}
      />
    </mesh>
  );
};

export default Piece;
