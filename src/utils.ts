import { IPiece } from './types';

const removeTextInBrackets = (text: string) => {
  const roundBracketsRemoved = text.split('(')[0];

  const squareBracketsRemoved = roundBracketsRemoved.split('[')[0];

  return squareBracketsRemoved;
};

const getImage = (text: string) => {
  const split = text.split('imageserver-2022/');
  return 'https://lucascranach.org/data-proxy/image.php?subpath=/' + split[1];
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

const calculatePieceScale = (item: IPiece) => {
  const split = item.dimensions.replace(/[\])}[{(]/g, ' ').split(' ');
  const scalingFactor = 0.8;
  const splitWithoutCM = split.filter(
    (string) => string !== 'cm' && string !== ''
  );
  let size = 0;
  let sideMeasured;

  for (const string of splitWithoutCM) {
    const stringSlicedAtDash = string.split('-')[0];

    if (!size) {
      if (/\d/.test(stringSlicedAtDash)) {
        size = parseFloat(stringSlicedAtDash.replace(/,/g, '.'));
      }
    } else {
      sideMeasured = stringSlicedAtDash;

      break;
    }
  }

  switch (sideMeasured) {
    case 'oben':
      size = (size / item.width) * item.height;

      break;
    case 'Durchmesser':
      const scaledDiameter = Math.sqrt(
        Math.pow(item.width, 2) + Math.pow(item.height, 2)
      );

      const scalingFactor = size / scaledDiameter;

      size = item.height * scalingFactor;

      break;
    default:
      break;
  }

  return (size / 100) * scalingFactor;
};

export { removeTextInBrackets, getImage, groupByYear, calculatePieceScale };
