import React from 'react';
import ImageGrid from './ImageGrid';

const axios = require('axios');

class Gallery extends React.Component {
  constructor({ shoeID }) {
    super({ shoeID });
    this.state = { images: [], shoeID };
  }

  componentDidMount() {
    const { shoeID } = this.state;
    axios.get(`/shoes/:${shoeID}`)
      .catch((err) => {
        console.log(err);
      })
      .then(data => data.data[0])
      .then(({ imageUrls }) => {
        const imgs = imageUrls;
        const newState = {
          shoeID,
          images: imgs,
        };
        const shoeImages = [];
        let temp = [];
        console.log(imageUrls);
        for (let i = 0; i < imageUrls.length; i += 1) {
          temp.push(imageUrls[i]);
          if (i % 2 !== 0 || i === imageUrls.length - 1) {
            shoeImages.push(temp);
            temp = [];
          }
        }
        newState.images = shoeImages;
        console.log('shoeImages', shoeImages);
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
