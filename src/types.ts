import { PlaneProps } from '@react-three/cannon';

interface IPiece extends PlaneProps {
  title: string;
  img: string;
  date: string;
  medium: string;
  owner: string;
  id: string;
  width: number;
  height: number;
  year: number;
  artist: string;
  dimensions: string;

  // component props
  indentation?: number;

  scale?: number;
}

interface ILine {
  start: [x: number, y: number, z: number];
  end: [x: number, y: number, z: number];
}

interface ITimeLine {
  startDate: number;
  endDate: number;
}

interface IText {
  x: number;
  y: number;
  z: number;
  content: string;
  size?: number;
  color?: string;
}
interface IGallery {
  pieces: IPiece[];
}

export type { IPiece, IGallery, ILine, IText, ITimeLine };
