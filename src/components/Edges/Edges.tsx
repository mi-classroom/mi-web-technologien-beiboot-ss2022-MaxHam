import { IEdges } from '../../types';

const Edges =(props: IEdges) => {
  const {
    geometry
  } = props;


  if (geometry.current !== undefined) {

    return (
      <lineSegments>
        <edgesGeometry  args={[geometry.current]} />
        <lineBasicMaterial  />
      </lineSegments>
    );
  }
  return null;
};

export default Edges;
