import React from 'react';
import PropTypes from 'prop-types';
import ImageGrid from './ImageGrid';

const axios = require('axios');

class Gallery extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      images: [], 
      shoeID: '310805-408' 
    };
  }

  componentDidMount() {
    const { shoeID } = this.state;
    this.getShoeInformationFromDB(shoeID);
  }

  getShoeInformationFromDB(shoeID) {
    axios.get(`/:${shoeID}/images`)
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
        // const shoeImages = [];
        // for (let i = 0; i < imageUrls.length; i += 1) {
        //   shoeImages.push
        //   // temp.push(imageUrls[i]);
        //   // if (i % 2 !== 0 || i === imageUrls.length - 1) {
        //   //   shoeImages.push(temp);
        //   //   temp = [];
        //   // }
        // }
        // newState.images = shoeImages;
        this.setState(newState);
      });
  }

  render() {
    const { images } = this.state;
    return (
      <div id="photo-gallery">
        <div className="photo-grid">
          {
            images.map(link => 
              <div key={link} className="image-holder">
                <img className="photo_grid_item col_1" alt="" src={link} />
              </div>
            )
          }
        </div>
      </div>
    );
  }
}

Gallery.propTypes = {
  shoeID: PropTypes.string,
};

Gallery.defaultProps = {
  shoeID: '310805-408',
};

export default Gallery;
