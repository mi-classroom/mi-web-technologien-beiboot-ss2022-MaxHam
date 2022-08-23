import { PlaneProps } from '@react-three/cannon';
import { BufferGeometry, Material, Mesh, Vector3 } from 'three';

interface IOverlay {
  selectedPiece: IPiece;
  showRelations: boolean;
  onTriggerRelations: (checked: boolean) => void
}


interface ISpotlight {
  selectedPieceRef: any;
}

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
  references: any;
}

interface IPieceComponent extends Mesh {
  imgScale?: [x: number, y: number, z: number];
  img: string;
  pieceId: string;
  selected: boolean;
  onSelect?: (key: string) => (e) => void;
} 

interface ILine {
  start: [x: number, y: number, z: number];
  end: [x: number, y: number, z: number];
  color?: string;
}

interface IEdges {
  geometry: any; 
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
  href?: string;
}
interface IGallery {
  pieces: IPiece[];
}

export type { IEdges, IPiece, IPieceComponent, IGallery, ILine, IText, ITimeLine , IOverlay, ISpotlight};
