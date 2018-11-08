import React from 'react';
import PropTypes from 'prop-types';

const ImageRow = ({ pair }) => (
  <div className="image-row">
    <div className="image-holder">
      <img className="photo_grid_item col_1" alt="" src={pair[0]} />
    </div>
    <div className="image-holder">
      {pair[1] !== undefined
        ? (
          <img className="photo_grid_item col_2" alt="" src={pair[1]} />
        ) : null
      }
    </div>
  </div>
);

ImageRow.propTypes = {
  pair: PropTypes.arrayOf(PropTypes.string),
};

ImageRow.defaultProps = {
  pair: [],
};

export default ImageRow;
