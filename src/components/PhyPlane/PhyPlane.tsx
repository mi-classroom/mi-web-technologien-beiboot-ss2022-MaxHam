import { usePlane } from "@react-three/cannon";
import { Plane } from "@react-three/drei";
import { IPlane } from '../../types';

const PhyPlane: React.FC<IPlane> = (props: IPlane) => {
	const { color } = props;
	const [ref] = usePlane(() => ({ ...props }));

	return (
		<Plane args={[1000, 1000]} ref={ref}>
			<meshStandardMaterial color={color} />
		</Plane>
	);
};

export default PhyPlane;
