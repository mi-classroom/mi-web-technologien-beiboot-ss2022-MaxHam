import { Image } from '@react-three/drei';
import { createRef } from 'react';
import { BufferGeometry, Material, Mesh } from 'three';
import { STEP_SIZE } from '../../constants';
import { IPiece } from '../../types';
import { getImage } from '../../utils';
import './Piece.scss';
import Text from '../Text/Text';

const Piece: React.FC<IPiece> = (props: IPiece) => {
  const {
    img,
    width,
    height,
    indentation = 1,
    year,
    scale,
    title,
    owner,
    medium,
    artist,
    id,
  } = props;

  const mesh = createRef<Mesh<BufferGeometry, Material | Material[]>>();

  const z = -(year - 1501) * STEP_SIZE;

  const link = `https://lucascranach.org/de/${id}/`;

  return (
    <>
      <mesh ref={mesh} position={[indentation, 0, z]}>
        <Image
          url={getImage(img)}
          // @ts-ignore
          scale={[(width / 1000) * scale, (height / 1000) * scale, 0]}
        />
      </mesh>
      <Text
        x={indentation - 0.2}
        y={-0.3}
        z={z}
        content={title}
        color='red'
        size={0.02}
      />
      <Text
        x={indentation - 0.2}
        y={-0.35}
        z={z}
        content={artist}
        color='red'
        size={0.02}
      />
      <Text
        x={indentation - 0.2}
        y={-0.4}
        z={z}
        content={medium}
        color='red'
        size={0.02}
      />
      <Text
        x={indentation - 0.2}
        y={-0.45}
        z={z}
        content={owner}
        color='red'
        size={0.02}
      />
      <Text
        x={indentation - 0.2}
        y={-0.5}
        z={z}
        content={'Reference'}
        href={link}
        color='blue'
        size={0.02}
      />
    </>
  );
};

export default Piece;
