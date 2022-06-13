import { Image } from "@react-three/drei";
import { createRef, useRef } from "react";
import { BufferGeometry, Material, Mesh } from "three";
import { IPiece } from "../../types";
import { getImage } from "../../utils";
import "./Piece.scss";

const Piece: React.FC<IPiece> = (props: IPiece) => {
	const {
		title,
		img,
		date,
		medium,
		owner,
		id,
		width,
		height,
		indentation = 1,
		depth = 0.03,
		handleHover,
		year = 1,
	} = props;

	const mesh = createRef<Mesh<BufferGeometry, Material | Material[]>>();
	const aspectRatio = width / height;
	const offsetY = 0.8;
	const stepSize = 1;
	const scale = 0.3;

	return (
		<mesh
			ref={mesh}
			position={[indentation * 1.1, 0, -(year - 1501) * stepSize]}
		>
			<Image
				url={getImage(img)}
				transparent
				onPointerEnter={handleHover(props)}
				onPointerLeave={handleHover(props)}
			/>
		</mesh>
	);
};

export default Piece;
