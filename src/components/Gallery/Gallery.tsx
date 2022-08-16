import { Physics } from '@react-three/cannon';
import { Canvas } from '@react-three/fiber';
import React, { useState } from 'react';
import { IGallery, IPiece } from '../../types';
import { calculatePieceScale, getPieceById, getPieceReference, groupByYear } from '../../utils';
import CameraControls from '../CameraControls/CameraControls';
import PhyPlane from '../PhyPlane/PhyPlane';
import Piece from '../Piece';
import Timeline from '../Timeline/Timeline';
import './Gallery.scss';

const Gallery: React.FC<IGallery> = (props: IGallery) => {
  const { pieces } = props;
  const [selectedPiece, setSelectedPiece]  = useState<IPiece>(null)

  const handleClick = (id) => (e) => {
    const piece: IPiece = getPieceById(id, pieces)
    setSelectedPiece(piece);
  };

  return (
    <>
    {selectedPiece && ( 
     <div className='overlay'>
       <h3>{selectedPiece.title}</h3>
       <p>{selectedPiece.artist}</p>
       <p>{selectedPiece.medium}</p>
       <p>{selectedPiece.owner}</p>
       <a href={getPieceReference(selectedPiece.id)}>Reference</a>
      </div>  ) 
    }
    
      <Canvas>
        <Physics>
          <>
            <PhyPlane
              color='green'
              position={[0, -1, 0]}
              rotation={[-Math.PI / 2, 0, 0]}
            />
            {pieces && groupByYear(pieces).map((group: IPiece[], year: number) => {
              return group.map((item: IPiece, index: number) => (
                <Piece
                  key={item.id}
                  id={item.id}
                  title={item.title}
                  date={item.date}
                  img={item.img}
                  medium={item.medium}
                  owner={item.owner}
                  year={item.year}
                  indentation={index}
                  width={item.width}
                  height={item.height}
                  artist={item.artist}
                  references={item.references}
                  dimensions={item.dimensions}
                  scale={calculatePieceScale(item)}
                  onSelect={handleClick}
                />
              ));
            })}
            {pieces && (
              <Timeline
                startDate={pieces[0].year}
                endDate={pieces[pieces.length - 1].year}
              />
            )}
          </>
        </Physics>
        <ambientLight intensity={0.3} />
        <pointLight intensity={0.8} position={[5, 0, 5]} />
        <CameraControls />
      </Canvas>
    </>
  );
};

export default Gallery;
