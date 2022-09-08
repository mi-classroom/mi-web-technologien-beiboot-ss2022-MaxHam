import React from 'react';
import './Legend.scss';

const Legend: React.FC = () => {

  
return (
     <div className='legend'>
       <h3>Navigation Legend</h3>
       <p><strong>Move Forward:</strong> Arrow Up Key</p>
       <p><strong>Move Left:</strong> Arrow Left Key</p>
       <p><strong>Move Right:</strong> Arrow Right Key</p>
       <p><strong>Move Backwards:</strong> Arrow Down Key</p>
       <br/>
       <p><strong>Select Piece:</strong> Mouse Left Click</p>
       <p><strong>Rotate Camera:</strong>f Mouse Right Click</p>
       
      </div>   
  );
};

export default Legend;