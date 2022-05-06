import { IPiece } from "../../types";
import "./Piece.scss";

const Piece: React.FC<IPiece> = (props: IPiece) => {
	const { title, img, date, medium, owner, id } = props;

	return (
		<div className="piece" id={id}>
			<h3>
				{title}, {date}
			</h3>
			<h4>{medium}</h4>
			<h4>{owner}</h4>
			<img src={img} alt={title} />
		</div>
	);
};

export default Piece;
