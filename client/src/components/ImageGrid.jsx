import React from 'react';
import ImageRow from './ImageRow.jsx';

const ImageGrid = ({ imgs }) => (
  <div className="image-grid">
    {imgs.map((pair, i) => (
      <ImageRow key={`image_${i + 1}`} pair={pair} />
    ))}
  </div>
);

export default ImageGrid;
