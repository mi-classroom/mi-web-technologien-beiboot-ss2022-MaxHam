import { Box } from '@react-three/drei';
import { ILine } from '../../types';

const CustomLine: React.FC<ILine> = (props: ILine) => {
  const { start, end } = props;
  const linewidth = 0.0075;
  const color = '#000000';

  function calcLength(start: number, end: number) {
    return end - start;
  }

  const calcDimensions = (): {
    size: [x: number, y: number, z: number];
    position: [x: number, y: number, z: number];
  } => {
    if (start[0] > end[0]) {
      const length = calcLength(start[0], end[0]);
      return {
        size: [length, linewidth, linewidth],
        position: [start[0] + length / 2, start[1], start[2]],
      };
    }

    if (start[0] < end[0]) {
      const length = calcLength(start[0], end[0]);

      return {
        size: [length, linewidth, linewidth],
        position: [start[0] - length / 2, start[1], start[2]],
      };
    }

    if (start[1] > end[1]) {
      const length = calcLength(start[1], end[1]);
      return {
        size: [linewidth, length, linewidth],
        position: [start[0], start[1] + length / 2, start[2]],
      };
    }

    if (start[1] < end[1]) {
      const length = calcLength(start[1], end[1]);
      return {
        size: [linewidth, length, linewidth],
        position: [start[0], start[1] - length / 2, start[2]],
      };
    }

    if (start[2] > end[2]) {
      const length = calcLength(start[2], end[2]);
      return {
        size: [linewidth, linewidth, length],
        position: [start[0], start[1], start[2] + length / 2],
      };
    }

    if (start[2] < end[2]) {
      const length = calcLength(start[2], end[2]);
      return {
        size: [linewidth, linewidth, length],
        position: [start[0], start[1], start[2] - length / 2],
      };
    }

    return {
      size: [linewidth, linewidth, linewidth],
      position: [start[0], start[1], start[2]],
    };
  };

  const dimensions = calcDimensions();
  const { size, position } = dimensions;

  return (
    <Box position={position} args={size}>
      <meshBasicMaterial color={color} />
    </Box>
  );
};

export default CustomLine;
