import { Physics } from "@react-three/cannon";
import { Canvas } from "@react-three/fiber";
import React, { useState } from "react";
import { IGallery, IPiece } from "../../types";
import { groupByYear } from "../../utils";
import CameraControls from "../CameraControls/CameraControls";
import PhyPlane from "../PhyPlane/PhyPlane";
import Piece from "../Piece";
import Timeline from "../Timeline/Timeline";
import "./Gallery.scss";

const Gallery: React.FC<IGallery> = (props: IGallery) => {
	const { pieces } = props;

	const [hoveredPiece, setHoveredPiece] = useState<IPiece>();
	const [cameraPos, setCameraPos] = useState<number>(0);

	const handleHover = (piece: IPiece | undefined) => (e: any) => {
		setHoveredPiece(piece);
	};

	const increasePos = () => {
		setCameraPos(cameraPos - 5);
	};

	const decreasePos = () => {
		setCameraPos(cameraPos + 5);
	};

	console.log(pieces[0]);
	return (
		<>
			<div className="overlay">
				{hoveredPiece && (
					<>
						{" "}
						<div className="h1">{hoveredPiece.title} </div>
						<div className="h2">
							{hoveredPiece.artist}
							<br />
							{hoveredPiece.medium}
							<br />
							{hoveredPiece.owner}
							<br />
							{hoveredPiece.year}
						</div>
					</>
				)}
				<button onClick={increasePos}>Increase</button>
				<button onClick={decreasePos}>Decrease</button>
			</div>

			<Canvas camera={{ position: [0, 0, cameraPos], near: 0.1, far: 1000 }}>
				<Physics>
					<>
						<PhyPlane
							color="green"
							position={[0, -2, 0]}
							rotation={[-Math.PI / 2, 0, 0]}
						/>
						<PhyPlane color="green" position={[0, 0, -10]} />
						<PhyPlane
							color="green"
							position={[-6, 0, -10]}
							rotation={[0, 2, 0]}
						/>
						<PhyPlane
							color="green"
							position={[6, 0, -10]}
							rotation={[0, -2, 0]}
						/>

						{groupByYear(pieces).map((group: IPiece[], year: number) => {
							return group.map((item: IPiece, index: number) => (
								<Piece
									key={item.id}
									id={item.id}
									title={item.title}
									date={item.date}
									img={item.img}
									medium={item.medium}
									owner={item.owner}
									year={item.year}
									indentation={index * 2}
									width={item.width}
									height={item.height}
									artist={item.artist}
									handleHover={handleHover}
								/>
							));
						})}
						<Timeline
							startDate={pieces[0].year}
							endDate={pieces[0].year}
							stepSize={1}
						/>
					</>
				</Physics>
				<ambientLight intensity={0.3} />

				<pointLight intensity={0.8} position={[5, 0, 5]} />
				<CameraControls />
			</Canvas>
		</>
	);
};

export default Gallery;

// <div className="pieces-gallery">
// 	{pieces.map((item: IPiece) => (
// 		<Piece
// 			key={item.id}
// 			id={item.id}
// 			title={item.title}
// 			date={item.date}
// 			img={item.img}
// 			medium={item.medium}
// 			owner={item.owner}
// 		/>
// 	))}
// </div>
