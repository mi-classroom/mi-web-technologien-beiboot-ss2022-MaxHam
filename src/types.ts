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
  depth?: number;
  handleHover?: any;
  scale?: number;
}

interface IGallery {
  pieces: IPiece[];
}

export type { IPiece, IGallery };
