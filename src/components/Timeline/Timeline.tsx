import { Text3D } from '@react-three/drei';
import { extend } from '@react-three/fiber';
import * as THREE from 'three';
import { TextGeometry } from 'three/examples/jsm/geometries/TextGeometry';
import Line from '../Line/Line';
import IBMPlexSans from '../../assets/IBM Plex Sans_Regular.json';

const Text = (props: any) => {
  const { x, y, z, content } = props;
  extend({ TextGeometry });
  return (
    <mesh position={[x, y, z]}>
      {/* @ts-ignore */}
      <Text3D size={0.05} height={0.005} font={IBMPlexSans}>
        {content}
        <meshBasicMaterial color='#ffffff' />
      </Text3D>
    </mesh>
  );
};
const Timeline = (props: any) => {
  const { startDate, endDate, stepSize } = props;
  const length = (endDate - startDate) * stepSize;
  const height = 5;
  const width = 5;

  const array = Array.from(Array(length).keys());
  return (
    <group position={[0, 0, 0]}>
      <Line start={[-0.5, -0.5, -0.2]} end={[-0.5, -0.5, -length]} />
      {array.map((number, index) => (
        <group>
          <Line
            start={[-0.5, height, -(number * stepSize + 0.2)]}
            end={[-0.5, -0.5, -(number * stepSize + 0.2)]}
            linewidth={0.5}
          />
          <Line
            start={[width, -0.5, -(number * stepSize + 0.2)]}
            end={[-0.5, -0.5, -(number * stepSize + 0.2)]}
            linewidth={0.5}
          />
          <Text
            x={-0.75}
            y={0}
            z={-(number * stepSize + 0.2)}
            content={startDate + number}
          />
        </group>
      ))}
    </group>
  );
};

export default Timeline;
