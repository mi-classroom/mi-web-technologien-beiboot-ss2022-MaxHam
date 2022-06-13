import { IPiece } from "./types";

const removeTextInBrackets = (text: string) => {
	const roundBracketsRemoved = text.split("(")[0];

	const squareBracketsRemoved = roundBracketsRemoved.split("[")[0];

	return squareBracketsRemoved;
};

const getImage = (text: string) => {
	const split = text.split("imageserver-2022/");
	return "https://lucascranach.org/data-proxy/image.php?subpath=/" + split[1];
};

const groupByYear = (items: IPiece[]) => {
	const groups: IPiece[][] = [];
	items.forEach((item: any) => {
		const group = groups[item.year] || [];
		group.push(item);
		groups[item.year] = group;
	}, {});

	return groups;
};

export { removeTextInBrackets, getImage, groupByYear };
