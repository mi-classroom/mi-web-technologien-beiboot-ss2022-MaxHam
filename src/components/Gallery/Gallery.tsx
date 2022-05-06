import React from "react";
import { IGallery, IPiece } from "../../types";
import Piece from "../Piece";
import "./Gallery.scss";

const Gallery: React.FC<IGallery> = (props: IGallery) => {
	const { pieces } = props;
	return (
		<div className="pieces-gallery">
			{pieces.map((item: IPiece) => (
				<Piece
					key={item.id}
					id={item.id}
					title={item.title}
					date={item.date}
					img={item.img}
					medium={item.medium}
					owner={item.owner}
				/>
			))}
		</div>
	);
};

export default Gallery;
