import { useState } from 'react';
import './App.scss';
import Gallery from './components/Gallery';
import { IPiece } from './types';
import { sortPiecesJson } from './utils';
function App() {
  // only import instantly for dev purposes
  const [pieces, setPieces] = useState<IPiece[]>([]);

  const onFileChange = (event: any) => {
    var files = event.target.files;

    if (files.length <= 0) {
      return false;
    }

    files[0].text().then(function (text: string) {
      var result = JSON.parse(text);
      const finalItems: IPiece[] = sortPiecesJson(result);
      setPieces(finalItems);
    });
  };

  return (
    <div className='App'>
      {pieces.length < 1 ? (
        <div className='start-screen'>
          <div className='upload-zone'>
            <h3>
              Please upload the JSON file to see the artworks of Lucas Cranach
            </h3>
            <label className='upload-button'>
              <input
                type='file'
                onChange={onFileChange}
                accept='application/JSON'
              />
              Select file
            </label>
          </div>
        </div>
      ) : (
        <Gallery pieces={pieces} />
      )}
    </div>
  );
}

export default App;
