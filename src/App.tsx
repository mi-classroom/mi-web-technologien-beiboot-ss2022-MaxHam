import React, { useState } from 'react';
import { IPiece } from './types';
import './App.scss';
import { removeTextInBrackets } from './utils';
import Gallery from './components/Gallery';

function App() {
  const [pieces, setPieces] = useState<IPiece[]>([]);

  const onFileChange = (event: any) => {
    var files = event.target.files;

    if (files.length <= 0) {
      return false;
    }

    files[0].text().then(function (text: string) {
      var result = JSON.parse(text);

      // get only isBestOf pieces
      const filteredItems: any[] = result.items.filter(
        (item: any) => item.isBestOf === true
      );
      // sort filtered pieces by sortingNumber
      const filteredItemsSorted: any[] = filteredItems.sort((a: any, b: any) =>
        a.sortingInfo.year > b.sortingInfo.year
          ? 1
          : b.sortingInfo.year > a.sortingInfo.year
          ? -1
          : 0
      );

      // map only necessary data
      const finalItems: IPiece[] = filteredItemsSorted.map(
        (item: any): IPiece => {
          return {
            id: item.metadata.id,
            title: item.metadata.title,
            img: item.images.overall.images[0].sizes.medium.src,
            date: item.metadata.date,
            medium: removeTextInBrackets(item.medium),
            owner: item.owner,
            width: item.images.overall.images[0].sizes.medium
              ? item.images.overall.images[0].sizes.medium.dimensions.width
              : 1,
            height: item.images.overall.images[0].sizes.medium
              ? item.images.overall.images[0].sizes.medium.dimensions.height
              : 1,
            year: item.sortingInfo.year,
            artist: item.involvedPersons[0].name,
            dimensions: item.dimensions,
          };
        }
      );
      setPieces(finalItems);
    });
  };

  return (
    <div className='App'>
      {pieces.length < 1 ? (
        <div className='start-screen'>
          <div className='upload-zone'>
            <h3>
              Bitte laden Sie die JSON File hoch, um die Meisterwerke betrachten
              zu können
            </h3>
            <label className='upload-button'>
              <input
                type='file'
                onChange={onFileChange}
                accept='application/JSON'
              />
              Datei auswählen
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
