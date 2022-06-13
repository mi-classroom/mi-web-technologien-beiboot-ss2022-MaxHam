import { Line, Text3D } from '@react-three/drei';
import { extend } from '@react-three/fiber';
import React from 'react';
import * as THREE from 'three';
import { TextGeometry } from 'three/examples/jsm/geometries/TextGeometry';

const Text = (props: any) => {
  const { x, y, z, content } = props;
  extend({ TextGeometry });
  return (
    <mesh position={[x, y, z]}>
      <Text3D size={0.05} height={0.005} font={''}>
        {content}
        <meshBasicMaterial color='#ffffff' />
      </Text3D>
    </mesh>
  );
};
const Timeline = (props: any) => {
  const { startDate, endDate, stepSize } = props;
  const length = (endDate - startDate) * stepSize;
  const height = 0.95;

  const array = Array.from(Array(length).keys());
  return (
    <group position={[0, 0, 0]}>
      <Line
        points={[
          new THREE.Vector3(-1, 0, 0),
          new THREE.Vector3(-1, 0, -length),
        ]}
        linewidth={0.5}
        color='red'
      />
      {/* {array.map((number, index) => (
        <Text
          x={-1.25}
          y={height - 0.025}
          z={-(index * stepSize)}
          content={parseInt(startDate) + index}
        />
      ))} */}
    </group>
  );
};

export default Timeline;
