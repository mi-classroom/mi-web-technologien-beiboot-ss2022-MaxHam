import React from 'react';
import { IOverlay } from '../../types';
import { getPieceReference } from '../../utils';
import './Overlay.scss';

const Overlay: React.FC<IOverlay> = (props: IOverlay) => {

const {selectedPiece}  = props;
  
return selectedPiece &&(
     <div className='overlay'>
       <h3>{selectedPiece.title}</h3>
       <p>{selectedPiece.artist}</p>
       <p>{selectedPiece.medium}</p>
       <p>{selectedPiece.owner}</p>
       <a target='_blank' rel="noreferrer" href={getPieceReference(selectedPiece.id)}>Reference</a>
      </div>   
  );
};

export default Overlay;
