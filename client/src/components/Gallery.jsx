import React from 'react';
import ImageGrid from './ImageGrid.jsx';

const axios = require('axios');

class Gallery extends React.Component {
  constructor({ shoeID }) {
    super({ shoeID });
    this.state = { images: [], shoeID };
  }

  componentDidMount() {
    const { shoeID } = this.state;
    fetch(`/shoe:${shoeID}`, {
      method: 'GET',
    })
      .then(data => data.json())
      .then((res) => {
        const shoe = res[0];
        const imgs = res[1];
        const newState = {
          shoeID: shoe.shoeID,
          images: imgs,
        };
        const shoeImages = [];
        let temp = [];
        for (let i = 0; i < shoe.imageUrls.length; i += 1) {
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
      });
  }

  render() {
    const { images } = this.state;
    return (
      <div className="photo-gallery">
        <div className="photo-grid">
          <ImageGrid imgs={images} />
        </div>
      </div>
    );
  }
}

export default Gallery;
