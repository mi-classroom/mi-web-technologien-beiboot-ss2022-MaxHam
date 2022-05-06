const removeTextInBrackets = (text: string) => {
	const roundBracketsRemoved = text.split("(")[0];

	const squareBracketsRemoved = roundBracketsRemoved.split("[")[0];

	return squareBracketsRemoved;
};

export { removeTextInBrackets };
