import { Physics } from '@react-three/cannon';
import { Canvas } from '@react-three/fiber';
import React, { useState } from 'react';
import { IGallery, IPiece } from '../../types';
import { calculatePieceScale, groupByYear } from '../../utils';
import CameraControls from '../CameraControls/CameraControls';
import PhyPlane from '../PhyPlane/PhyPlane';
import Piece from '../Piece';
import Timeline from '../Timeline/Timeline';
import './Gallery.scss';

const Gallery: React.FC<IGallery> = (props: IGallery) => {
  const { pieces } = props;

  const [hoveredPiece, setHoveredPiece] = useState<IPiece>();

  const [zCoord, setZCoord] = useState(1);

  const handleHover = (piece: IPiece | undefined) => (e: any) => {
    setHoveredPiece(piece);
  };

  const increaseYear = () => {
    setZCoord(zCoord - 1);
  };

  const decreaseYear = () => {
    setZCoord(zCoord + 1);
  };

  const reset = () => {
    setZCoord(1);
  };
  return (
    <>
      <div className='overlay'>
        <button onClick={increaseYear}>Go to next Year</button>
        <button onClick={decreaseYear}>Go to last Year</button>
        <button onClick={reset}>Go to beginning</button>
        {hoveredPiece && (
          <>
            <div className='h1'>{hoveredPiece.title} </div>
            <div className='h2'>
              {hoveredPiece.artist}
              <br />
              {hoveredPiece.medium}
              <br />
              {hoveredPiece.owner}
              <br />
              {hoveredPiece.year}
            </div>
          </>
        )}
      </div>

      <Canvas camera={{ position: [0, 0, 1], far: -1000 }}>
        <Physics>
          <>
            <PhyPlane
              color='green'
              position={[0, -1, 0]}
              rotation={[-Math.PI / 2, 0, 0]}
            />

            {groupByYear(pieces).map((group: IPiece[], year: number) => {
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
                  handleHover={handleHover}
                  dimensions={item.dimensions}
                  scale={calculatePieceScale(item)}
                />
              ));
            })}

            {/* <Timeline
              startDate={pieces[0].year || 0}
              endDate={pieces[pieces.length - 1].year || 100}
              stepSize={1}
            /> */}
          </>
        </Physics>
        <ambientLight intensity={0.3} />

        <pointLight intensity={0.8} position={[5, 0, 5]} />
        <CameraControls zCoord={zCoord} />
      </Canvas>
    </>
  );
};

export default Gallery;
