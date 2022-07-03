import { extend, useFrame, useThree } from '@react-three/fiber';
import { useEffect, useRef, useState } from 'react';
import { FirstPersonControls } from 'three/examples/jsm/controls/FirstPersonControls';

extend({ FirstPersonControls });

const CameraControls: React.FC = () => {
  const { camera } = useThree();
  const ref = useRef();
  const [activeLook, setActiveLook] = useState(false);

  const handleMouseDown = (e) => {
    console.log(e);

    setActiveLook(true);
  };

  const handleMouseUp = (e) => {
    console.log(e);
    setActiveLook(false);
  };

  useEffect(() => {
    /* @ts-ignore */
    ref.current.lookAt(0, 1, -1000);

    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);
  }, []);

  useFrame((state, delta) => {
    // @ts-ignore
    ref.current.update(delta);
  });
  return (
    <>
      {/* @ts-ignore */}
      <firstPersonControls
        ref={ref}
        args={[camera]}
        movementSpeed={3}
        lookSpeed={0.15}
        activeLook={activeLook}
        autoForward={false}
        lookVertical={false}
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
      />
    </>
  );
};
export default CameraControls;
