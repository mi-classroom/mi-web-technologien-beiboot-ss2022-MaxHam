import { extend, useFrame, useThree } from '@react-three/fiber';
import { useRef } from 'react';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

extend({ OrbitControls });

interface ICameraControls {
  xCoord: number;
  zCoord: number;
}

const CameraControls: React.FC<ICameraControls> = (props: ICameraControls) => {
  const { zCoord, xCoord } = props;

  const {
    camera,
    gl: { domElement },
  } = useThree();
  const controls = useRef();

  console.log(controls?.current);

  useFrame((state) => {
    // @ts-ignore
    controls?.current?.target?.set(xCoord, 0, zCoord);
    // @ts-ignore
    controls?.current?.object?.position?.set(xCoord, 0.1, zCoord + 0.5);
    // @ts-ignore
    controls?.current?.update();
  });

  return (
    // @ts-ignore
    <orbitControls
      ref={controls}
      domElement={domElement}
      args={[camera, domElement]}
      enableRotate={true}
      rotateSpeed={0.1}
    />
  );
};

export default CameraControls;
