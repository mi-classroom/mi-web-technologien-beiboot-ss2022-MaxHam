import { Physics } from '@react-three/cannon';
import { Canvas } from '@react-three/fiber';
import React, { useRef, useState } from 'react';
import { IGallery, IPiece } from '../../types';
import { calculatePieceScale, groupByYear } from '../../utils';
import CameraControls from '../CameraControls/CameraControls';
import PhyPlane from '../PhyPlane/PhyPlane';
import Piece from '../Piece';
import Timeline from '../Timeline/Timeline';
import './Gallery.scss';

const Gallery: React.FC<IGallery> = (props: IGallery) => {
  const { pieces } = props;

  return (
    <Canvas>
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
      <CameraControls />
    </Canvas>
  );
};

export default Gallery;
