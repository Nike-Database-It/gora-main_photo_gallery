import React from 'react';
import ImageGrid from './ImageGrid.js';

import sampleData from '../../../sampleData.js'

class Gallery extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      shoe: '',
      images: sampleData
    }
  }


  render() {
    return(
      <div className='photo-gallery'>
        <div className='photo-grid'>
          <ImageGrid imgs={this.state.images}/>
        </div>
      </div>
    )
  }
}

export default Gallery;