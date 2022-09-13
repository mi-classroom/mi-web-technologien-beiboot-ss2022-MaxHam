import { STEP_SIZE } from '../../constants';
import { ITimeLine } from '../../types';
import Line from '../Line/Line';
import Text from '../Text/Text';

const Timeline: React.FC<ITimeLine> = (props: ITimeLine) => {
  const { startDate, endDate } = props;
  const length = (endDate - startDate) * STEP_SIZE;
  const height = 5;
  const width = 50;

  const array = Array.from(Array(length).keys());
  
  return (
    <group position={[0, 0, 0]}>
      <Line start={[-0.5, -0.5, 0]} end={[-0.5, -0.5, -length]} />
      {array.map((number, index) => (
        <group key={index}>
          <Line
            start={[-0.5, height, -(index * STEP_SIZE)]}
            end={[-0.5, -0.5, -(index * STEP_SIZE)]}
          />
          <Line
            start={[width, -0.5, -(index * STEP_SIZE)]}
            end={[-0.5, -0.5, -(index * STEP_SIZE)]}
          />
          <Text
            x={-0.75}
            y={0}
            z={-(index * STEP_SIZE)}
            content={(startDate + index).toString()}
            color='black'
          />
        </group>
      ))}
    </group>
  );
};

export default Timeline;
