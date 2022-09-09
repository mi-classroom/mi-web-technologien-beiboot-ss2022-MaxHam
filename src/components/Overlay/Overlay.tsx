import React, { useState } from 'react';
import { IOverlay } from '../../types';
import { getPieceReference } from '../../utils';
import Speech from '../Speech';
import './Overlay.scss';

const Overlay: React.FC<IOverlay> = (props: IOverlay) => {

const {selectedPiece, onTriggerRelations, showRelations}  = props;
const [volume, setVolume] = useState<number>(0.5)


const handleCheckboxChange = (e) => {
  onTriggerRelations(e.target.checked)
}

const handleSliderChange = (e) => {
  setVolume(e.target.value)
}
  
  
return selectedPiece &&(
     <div className='overlay' tabIndex={0}>
       <h3>{selectedPiece.title} <Speech text={selectedPiece.title} volume={volume} /></h3>
       <p>{selectedPiece.artist} <Speech text={selectedPiece.artist} volume={volume}/></p>
       <p>{selectedPiece.medium} <Speech text={selectedPiece.medium} volume={volume}/></p>
       <p>{selectedPiece.owner}  <Speech text={selectedPiece.owner} volume={volume}/></p>
       <a target='_blank' rel="noreferrer" href={getPieceReference(selectedPiece.id)}>Reference</a>
       <br />
       
       <input type='checkbox' checked={showRelations} onChange={handleCheckboxChange} disabled={selectedPiece.references.length < 1} />
       <label>Show related artworks </label>
       <div className="slidecontainer">
       <label>Volume </label>
        <input  onChange={handleSliderChange} type="range" min="0.1" max="1" step='0.1' value={volume} className="slider" id="myRange" />
       </div>
            
      </div>   
  );
};

export default Overlay;
