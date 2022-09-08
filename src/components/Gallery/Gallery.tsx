import { Physics } from '@react-three/cannon';
import { Canvas } from '@react-three/fiber';
import React, { useState } from 'react';
import { IGallery, IPiece } from '../../types';
import { calculatePieceScale, determinePiecePosition, findIndex, getPieceById, getRelatedPieces, groupByYear } from '../../utils';
import CameraControls from '../CameraControls';
import Line from '../Line';
import Overlay from '../Overlay';
import Legend from '../Legend';
import PhyPlane from '../PhyPlane/PhyPlane';
import Piece from '../Piece';
import Timeline from '../Timeline/Timeline';
import './Gallery.scss';

const Gallery: React.FC<IGallery> = (props: IGallery) => {
  const { pieces } = props;
  const [selectedPiece, setSelectedPiece]  = useState<IPiece>(null)
  const [showRelations, setShowRelations] =  useState<boolean>(false)



  const handleClick = (id) => (e) => {
    const piece: IPiece = getPieceById(id, pieces)
 
    setSelectedPiece(piece);

    // when changing selected piece we want the relations to be hidden
    setShowRelations(false)
  };

  const triggerRelations = (checked: boolean) => {
    setShowRelations(checked)
  }

  return (
    <>
    <Overlay selectedPiece={selectedPiece} showRelations={showRelations} onTriggerRelations={triggerRelations} />
    <Legend />
      <Canvas>
        <Physics>
          <>
            <PhyPlane
              color='green'
              position={[0, -1, 0]}
              rotation={[-Math.PI / 2, 0, 0]}
            />
            {pieces && groupByYear(pieces).map((group: IPiece[]) => {
              return group.map((item: IPiece, index: number) => (
                // @ts-ignore
                <Piece
                  key={item.id}
                  pieceId={item.id}
                  img={item.img}
                  position={determinePiecePosition(index, item.year)}
                  imgScale={calculatePieceScale(item)}
                  onSelect={handleClick}
                  selected={selectedPiece?.id === item.id }
                />
              ));
            })}
            {pieces && (
              <Timeline
                startDate={pieces[0].year}
                endDate={pieces[pieces.length - 1].year}
              />
            )}
            {selectedPiece && showRelations ?(
              getRelatedPieces(selectedPiece.references, pieces).map((targetPiece)=> {
                const selectedPiecePos = determinePiecePosition(findIndex(selectedPiece.id, pieces), selectedPiece.year)
                const targetPiecePos = determinePiecePosition(findIndex(targetPiece.id, pieces), targetPiece.year)
                const lineStart: [x: number, y: number, z: number] = [selectedPiecePos.x ,  -.5, selectedPiecePos.z + 0.01]
                const lineEnd: [x: number, y: number, z: number] = [targetPiecePos.x,  -.5, targetPiecePos.z + 0.01]
                
              

              return(
                <Line color='#fc0' start={lineStart[0] > lineEnd[0] ? lineStart : lineEnd } end={lineStart[0] < lineEnd[0] ? lineStart : lineEnd}/>
              )
            })
            ): (<></>)}
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
