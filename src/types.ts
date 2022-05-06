interface IPiece {
	title: string;
	img: string;
	date: string;
	medium: string;
	owner: string;
	id: string;
}

interface IGallery {
	pieces: IPiece[];
}

export type { IPiece, IGallery };
