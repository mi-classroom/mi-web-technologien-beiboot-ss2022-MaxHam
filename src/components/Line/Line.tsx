import { useRef } from 'react';
import * as THREE from 'three';
import { ILine } from '../../types';

const CustomLine: React.FC<ILine> = (props: ILine) => {
  const { start, end, color: propColor } = props;
  const color: string = propColor || '#000000';
  const ref = useRef();

  const points: THREE.Vector3[] = [];
  points.push(start);
  points.push(end);

  const lineGeometry = new THREE.BufferGeometry().setFromPoints(points);

  return (
    <>
      {/* @ts-ignore */}
      <line ref={ref} geometry={lineGeometry}>
        <lineBasicMaterial
          attach="material"
          color={color}
          linecap={'round'}
          linejoin={'round'}
        />
      </line>
    </>
  );
};

export default CustomLine;
