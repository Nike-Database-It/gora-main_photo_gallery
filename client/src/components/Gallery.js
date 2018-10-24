import React from 'react';
import ImageGrid from './ImageGrid.js';

import sampleData from '../../../sampleData.js'

class Gallery extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      color: '',
      images: [],
      name: '',
      shoeID: '',
    }
  }

  componentDidMount() {
    fetch('/shoe:310806-408', {
      method: 'GET',
    }).then(rawData => {
      return rawData.json();
    }).then(res => {
      var shoe = res[0];
      var newState = {
        color: shoe.color,
        name: shoe.name,
        shoeID: shoe.shoeID
      }
      var shoeImages = [];
      var temp = [];
      for (var i = 0; i < shoe.imageUrls.length; i++) {
        if (temp.length === 0) {
          temp.push(shoe.imageUrls[i]);
        } else {
          temp.push(shoe.imageUrls[i]);
          shoeImages.push(temp);
          temp = [];
        }
      }
      newState.images = shoeImages;
      this.setState(newState);
    })
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