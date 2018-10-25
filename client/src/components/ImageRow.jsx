import React from 'react';

const ImageRow = ({ pair }) => {
  return (
    <div className="image-row">
      <div className="col_1">
        <img src={pair[0]} width="250" />
      </div>
      {pair[1] !== undefined
        ? (
          <div className="col_2">
            <img src={pair[1]} width="250" />
          </div>
        ) : null
      }
    </div>
  )
};

export default ImageRow;
