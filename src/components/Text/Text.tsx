import { Text3D } from '@react-three/drei';
import { extend } from '@react-three/fiber';
import { TextGeometry } from 'three/examples/jsm/geometries/TextGeometry';
import IBMPlexSans from '../../assets/IBM Plex Sans_Regular.json';
import { IText } from '../../types';

const Text: React.FC<IText> = (props: IText) => {
  const { x, y, z, content, size = 0.05, color = '#ffffff' } = props;
  extend({ TextGeometry });
  return (
    <mesh position={[x, y, z]}>
      {/* @ts-ignore */}
      <Text3D size={size} height={0.005} font={IBMPlexSans}>
        {content}
        <meshBasicMaterial color={color} />
      </Text3D>
    </mesh>
  );
};

export default Text;
