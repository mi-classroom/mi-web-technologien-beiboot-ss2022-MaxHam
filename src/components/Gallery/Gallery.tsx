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

  const [zCoord, setZCoord] = useState(0);
  const [xCoord, setXCoord] = useState(0);

  const increaseYear = () => {
    setZCoord(zCoord - 1);
  };

  const decreaseYear = () => {
    setZCoord(zCoord + 1);
  };

  const goLeft = () => {
    setXCoord(xCoord - 1);
  };

  const goRight = () => {
    setXCoord(xCoord + 1);
  };

  const reset = () => {
    setZCoord(1);
    setXCoord(0);
  };
  return (
    <>
      <div className='overlay'>
        <button onClick={increaseYear}>Go to next Year</button>
        <button onClick={decreaseYear}>Go to last Year</button>
        <button onClick={goLeft}>Go to left</button>
        <button onClick={goRight}>Go to right</button>

        <button onClick={reset}>Go to beginning</button>
      </div>

      <Canvas camera={{ position: [0, 0.5, 0] }}>
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
                  dimensions={item.dimensions}
                  scale={calculatePieceScale(item)}
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
        <CameraControls zCoord={zCoord} xCoord={xCoord} />
      </Canvas>
    </>
  );
};

export default Gallery;
