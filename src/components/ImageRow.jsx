import React from 'react';
import PropTypes from 'prop-types';

const ImageRow = ({ pair }) => (
  <div className="image-row">
    <img className="photo_grid_item col_1" alt="Not found" src={pair[0]} width="250" />
    {pair[1] !== undefined
      ? (
        <img className="photo_grid_item col_2" alt="Not found" src={pair[1]} width="250" />
      ) : null
    }
  </div>
);

ImageRow.propTypes = {
  pair: PropTypes.arrayOf(PropTypes.string),
};

ImageRow.defaultProps = {
  pair: [],
};

export default ImageRow;
