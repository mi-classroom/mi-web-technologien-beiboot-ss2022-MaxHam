import { Image } from '@react-three/drei';
import { createRef } from 'react';
import { BufferGeometry, Material, Mesh } from 'three';
import { STEP_SIZE } from '../../constants';
import { IPiece } from '../../types';
import { getImage } from '../../utils';
import './Piece.scss';

const Piece: React.FC<IPiece> = (props: IPiece) => {
  const {
    img,
    width,
    height,
    indentation = 1,
    year,
    scale,
    onSelect,
    id
  } = props;

  const mesh = createRef<Mesh<BufferGeometry, Material | Material[]>>();

  const z = -(year - 1501) * STEP_SIZE;

  return (
      <mesh ref={mesh} position={[indentation, 0, z]} onClick={onSelect(id)} >
        <Image
          url={getImage(img)}
          // @ts-ignore
          scale={[(width) * scale, (height) * scale, 1]}
        />
      </mesh>
  );
};

export default Piece;
