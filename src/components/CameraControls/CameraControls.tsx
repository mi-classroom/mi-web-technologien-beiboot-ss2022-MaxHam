import { extend, useFrame, useThree } from '@react-three/fiber';
import { useEffect, useRef } from 'react';
import { FlyControls } from 'three/examples/jsm/controls/FlyControls';

extend({ FlyControls });

const CameraControls: React.FC = () => {
  const { camera } = useThree();

  useEffect(() => {
    // focus camera on backside
    camera.lookAt(0, -1, -1000);
  }, []);

  const ref = useRef();
  useFrame((state, delta) => {
    // @ts-ignore
    ref.current.update(delta);
  });
  return (
    <>
      {/* @ts-ignore */}
      <flyControls ref={ref} args={[camera]} movementSpeed={3} />
    </>
  );
};
export default CameraControls;
