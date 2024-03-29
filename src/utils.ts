import { Vector3 } from 'three';
import { STEP_SIZE } from './constants';
import { IPiece } from './types';

const sortPiecesJson = (pieces: any): IPiece[] => {
  // get only isBestOf pieces
  const filteredItems: any[] = pieces.items.filter(
    (item: any) => item.isBestOf === true
  );
  // sort filtered pieces by sortingNumber
  const filteredItemsSorted: any[] = sortByYear(filteredItems);

  // map only necessary data
  const finalItems: IPiece[] = parseToPieces(filteredItemsSorted);

  return finalItems;
};

const sortByYear = (items: any[]) =>
  items.sort((a: any, b: any) =>
    a.sortingInfo.year > b.sortingInfo.year
      ? 1
      : b.sortingInfo.year > a.sortingInfo.year
      ? -1
      : 0
  );

const parseToPieces = (items: any[]): IPiece[] =>
  items.map((item: any): IPiece => {
    return {
      id: item.metadata.id,
      title: item.metadata.title,
      img: item.images.overall.images[0].sizes.medium.src,
      date: item.metadata.date,
      medium: removeTextInBrackets(item.medium),
      owner: item.owner,
      width: item.images.overall.images[0].sizes.medium
        ? item.images.overall.images[0].sizes.medium.dimensions.width
        : 1,
      height: item.images.overall.images[0].sizes.medium
        ? item.images.overall.images[0].sizes.medium.dimensions.height
        : 1,
      year: item.sortingInfo.year,
      artist: item.involvedPersons[0].name,
      dimensions: item.dimensions,
      references: item.references.map((ref) => ref.inventoryNumber)
    };
  });

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
  items.forEach((item: IPiece) => {
    const group = groups[item.year] || [];
    group.push(item);
    groups[item.year] = group;
  }, {});

  return groups;
};

const calculatePieceScale = (
  item: IPiece
): [x: number, y: number, z: number] => {
  const split = item.dimensions.replace(/[\])}[{(]/g, ' ').split(' ');
  const scalingFactor = 0.000008;
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

      size = (size / scaledDiameter) * item.height;

      break;
    default:
      break;
  }

  return [
    item.width * (size * scalingFactor),
    item.height * (size * scalingFactor),
    1
  ];
};

const getPieceReference = (id: string) => {
  return `https://lucascranach.org/de/${id}/`;
};

const getPieceById = (id: string, pieces: IPiece[]) => {
  return pieces.find((value) => value.id === id);
};

const determinePiecePosition = (indentation: number, year: number): Vector3 => {
  const z = -(year - 1501) * STEP_SIZE;

  return new Vector3(indentation, 0, z);
};

const determinePieceScale = (width: number, height: number, scale: number) => [
  width * scale,
  height * scale,
  1
];

const getRelatedPieces = (references: string[], pieces: IPiece[]) => {
  return pieces.filter((piece) => references.includes(piece.id));
};

const findIndex = (searchValue: any, array: any[]) => {
  const groupedArray = groupByYear(array);

  let foundIndex;
  groupedArray.every((group) => {
    const index = group.findIndex((element) => element.id === searchValue);
    console.log(index);
    if (index !== -1) {
      foundIndex = index;
      // every() stops as soonh as it returns a falsy value
      return false;
    }
    return true;
  });

  console.log(foundIndex);
  return foundIndex;
};

export {
  findIndex,
  getRelatedPieces,
  determinePieceScale,
  determinePiecePosition,
  getPieceById,
  getPieceReference,
  removeTextInBrackets,
  getImage,
  groupByYear,
  calculatePieceScale,
  sortPiecesJson
};
