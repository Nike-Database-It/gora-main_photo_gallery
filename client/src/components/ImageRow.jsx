import React from 'react';
import PropTypes from 'prop-types';


const ImageRow = ({ pair }) => (
  <div className="image-row">
    <div className="col_1">
      <img alt="Not found" src={pair[0]} width="250" />
    </div>
    {pair[1] !== undefined
      ? (
        <div className="col_2">
          <img alt="Not found" src={pair[1]} width="250" />
        </div>
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
