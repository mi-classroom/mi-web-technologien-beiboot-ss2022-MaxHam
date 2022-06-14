import { extend, useFrame, useThree } from '@react-three/fiber';
import { useRef } from 'react';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

// Extend will make OrbitControls available as a JSX element called orbitControls for us to use.
extend({ OrbitControls });

const CameraControls = (props) => {
  const { zCoord } = props;
  // Get a reference to the Three.js Camera, and the canvas html element.
  // We need these to setup the OrbitControls component.
  // https://threejs.org/docs/#examples/en/controls/OrbitControls
  const {
    camera,
    gl: { domElement },
  } = useThree();
  // Ref to the controls, so that we can update them on every frame using useFrame
  const controls = useRef();

  console.log(controls?.current);

  useFrame((state) => {
    // @ts-ignore
    controls?.current?.target?.set(0, 0, zCoord);
    // @ts-ignore
    controls?.current?.object?.position?.set(0, 0, zCoord);
    // @ts-ignore
    // @ts-ignore
    controls?.current?.update();
  });

  return (
    // @ts-ignore
    <orbitControls
      ref={controls}
      domElement={domElement}
      args={[camera, domElement]}
      enableZoom={true}
      rotateSpeed={0.1}
    />
  );
};

export default CameraControls;
