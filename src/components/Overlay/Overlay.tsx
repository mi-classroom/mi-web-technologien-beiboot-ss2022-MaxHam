import React from 'react';
import { IOverlay } from '../../types';
import { getPieceReference } from '../../utils';
import './Overlay.scss';

const Overlay: React.FC<IOverlay> = (props: IOverlay) => {

const {selectedPiece, onTriggerRelations, showRelations}  = props;


const handleChange = (e) => {
  onTriggerRelations(e.target.checked)
}
  
return selectedPiece &&(
     <div className='overlay'>
       <h3>{selectedPiece.title}</h3>
       <p>{selectedPiece.artist}</p>
       <p>{selectedPiece.medium}</p>
       <p>{selectedPiece.owner}</p>
       <a target='_blank' rel="noreferrer" href={getPieceReference(selectedPiece.id)}>Referenz</a>
       <br />
       
       <input type='checkbox' checked={showRelations} onChange={handleChange} disabled={selectedPiece.references.length < 1} />
       <label>Zeige verwandte Gemälde an </label>
      </div>   
  );
};

export default Overlay;
