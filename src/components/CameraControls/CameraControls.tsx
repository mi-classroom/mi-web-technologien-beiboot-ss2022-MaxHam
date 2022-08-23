import { extend, useFrame, useThree } from '@react-three/fiber';
import { useEffect, useRef, useState } from 'react';
import { FirstPersonControls } from 'three/examples/jsm/controls/FirstPersonControls';

extend({ FirstPersonControls });

const CameraControls: React.FC = () => {
  const { camera } = useThree();
  const ref = useRef();
  const [activeLook, setActiveLook] = useState(false);

  /** enable looking around */
  const handleMouseDown = (e) => {
    if(e.button === 2) {
      setActiveLook(true);
    }
  };

  /** disable looking around */
  const handleMouseUp = (e) => {
    setActiveLook(false);
  };

  useEffect(() => {
    /* @ts-ignore */
    ref.current.lookAt(0, 1, -1000);

    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);

    return () => {
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
    };
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
        lookVertical={true}
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
      />
    </>
  );
};
export default CameraControls;
