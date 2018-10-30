import React from 'react';
import PropTypes from 'prop-types';
import ImageRow from './ImageRow';

const ImageGrid = ({ imgs }) => (
  <div className="image-grid pdp-6-up">
    {imgs.map((pair, i) => (
      <ImageRow key={`image_${i + 1}`} pair={pair} />
    ))}
  </div>
);

ImageGrid.propTypes = {
  imgs: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.string)),
};

ImageGrid.defaultProps = {
  imgs: [[]],
};

export default ImageGrid;
