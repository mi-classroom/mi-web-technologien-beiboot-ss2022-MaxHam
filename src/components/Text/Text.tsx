import { Text3D } from '@react-three/drei';
import { extend } from '@react-three/fiber';
import { TextGeometry } from 'three/examples/jsm/geometries/TextGeometry';
import IBMPlexSans from '../../assets/IBM Plex Sans_Regular.json';
import { IText } from '../../types';

const Text: React.FC<IText> = (props: IText) => {
  const { x, y, z, content, size = 0.05, color = '#ffffff', href } = props;
  extend({ TextGeometry });

  const handleClick = () => {
    window.open(href, '_blank').focus();
  };
  return (
    <mesh position={[x, y, z]} onClick={href && handleClick}>
      <Text3D
        size={size}
        height={0.005}
        // @ts-ignore
        font={IBMPlexSans}
      >
        {content}
        <meshBasicMaterial color={color} />
      </Text3D>
    </mesh>
  );
};

export default Text;
