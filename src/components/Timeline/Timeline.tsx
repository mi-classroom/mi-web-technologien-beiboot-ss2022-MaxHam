import { Text3D } from "@react-three/drei";
import { extend } from "@react-three/fiber";
import React from "react";
import { TextGeometry } from "three/examples/jsm/geometries/TextGeometry";
import Line from "../Line/Line";

const Text = (props: any) => {
	const { x, y, z, content } = props;
	extend({ TextGeometry });
	return (
		<mesh position={[x, y, z]}>
			<Text3D size={0.05} height={0.005} font={""}>
				{content}
				<meshBasicMaterial color="#ffffff" />
			</Text3D>
		</mesh>
	);
};
const Timeline = (props: any) => {
	const { startDate, endDate, stepSize } = props;
	const length = (endDate - startDate) * stepSize;
	const height = 0.95;

	const array = Array(length / stepSize + 1);

	return (
		<group>
			<Line start={[0, 0, 0]} end={[0, 0, -length]} linewidth={0.5} />
			{array.map((number, index) => (
				<group>
					<Line
						start={[0, height, -number * stepSize]}
						end={[0, 0, -number * stepSize]}
						linewidth={0.5}
					/>
					<Line
						start={[0, height, -number * stepSize]}
						end={[-0.05, height, -number * stepSize]}
						linewidth={0.5}
					/>

					<Text
						x={-1.25}
						y={height - 0.025}
						z={-number * stepSize}
						content={parseInt(startDate) + number}
					/>
				</group>
			))}
		</group>
	);
};

export default Timeline;
