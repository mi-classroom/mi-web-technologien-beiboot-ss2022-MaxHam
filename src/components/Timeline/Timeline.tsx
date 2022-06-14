import { STEP_SIZE } from '../../constants';
import Line from '../Line/Line';
import Text from '../Text/Text';

const Timeline = (props: any) => {
  const { startDate, endDate } = props;
  const length = (endDate - startDate) * STEP_SIZE;
  const height = 5;
  const width = 5;

  const array = Array.from(Array(length).keys());
  return (
    <group position={[0, 0, 0]}>
      <Line start={[-0.5, -0.5, -0.2]} end={[-0.5, -0.5, -length]} />
      {array.map((number, index) => (
        <group>
          <Line
            start={[-0.5, height, -(number * STEP_SIZE + 0.2)]}
            end={[-0.5, -0.5, -(number * STEP_SIZE + 0.2)]}
            linewidth={0.5}
          />
          <Line
            start={[width, -0.5, -(number * STEP_SIZE + 0.2)]}
            end={[-0.5, -0.5, -(number * STEP_SIZE + 0.2)]}
            linewidth={0.5}
          />
          <Text
            x={-0.75}
            y={0}
            z={-(number * STEP_SIZE + 0.2)}
            content={startDate + number}
          />
        </group>
      ))}
    </group>
  );
};

export default Timeline;
