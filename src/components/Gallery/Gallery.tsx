import { Physics } from '@react-three/cannon';
import { Canvas } from '@react-three/fiber';
import React, { createRef, useEffect, useRef, useState } from 'react';
import { BufferGeometry, Material, Mesh } from 'three';
import { IGallery, IPiece } from '../../types';
import { calculatePieceScale, determinePiecePosition, getPieceById, groupByYear } from '../../utils';
import CameraControls from '../CameraControls';
import Overlay from '../Overlay';
import PhyPlane from '../PhyPlane/PhyPlane';
import Piece from '../Piece';
import Timeline from '../Timeline/Timeline';
import './Gallery.scss';

const Gallery: React.FC<IGallery> = (props: IGallery) => {
  const { pieces } = props;
  const [selectedPiece, setSelectedPiece]  = useState<IPiece>(null)
  const [pieceRefs, setPieceRefs]  = useState<any>(null)
  const selectedPieceRef = useRef<Mesh<BufferGeometry, Material | Material[]>>()
  const [showRelations, setShowRelations] =  useState<boolean>(false)

  // useEffect(()=> {
  //   setPieceRefs((elRefs) =>
  //   pieces
  //     .map((item, i) => elRefs[item.id] || createRef()),
  // );
  // }, [pieces])

  const handleClick = (id) => (e) => {
    const piece: IPiece = getPieceById(id, pieces)
    // selectedPieceRef.current = refs.current.find((el)=> {
    //   console.log(el.name)
    //   console.log(id)
    //   return (el.name === id)})
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
                  // ref={pieceRefs[item.id]}
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
        {/* <spotLight intensity={1} position={selectedPieceRef?.current?.position} target={selectedPieceRef?.current} angle={0.2} /> */}
        <CameraControls />
      </Canvas>
    </>
  );
};

export default Gallery;
