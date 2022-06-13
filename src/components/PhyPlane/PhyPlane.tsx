// It allows you to input a color as an argument
// The material used will have been built by a mesh material
// Remember, you can still add other attributes in the object created
// We won't add it's mass since itwill begin to fall

import { PlaneProps, usePlane } from "@react-three/cannon";
import { Plane } from "@react-three/drei";

interface IProps extends PlaneProps {
	color: string;
}
const PhyPlane: React.FC<IProps> = (props) => {
	const { color } = props;
	const [ref] = usePlane(() => ({ ...props }));

	return (
		<Plane args={[1000, 1000]} ref={ref}>
			<meshStandardMaterial color={color} />
		</Plane>
	);
};

export default PhyPlane;
