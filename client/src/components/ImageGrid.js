import React from 'react';

const ImageGrid = (props) => {
  return (
    <div>
      {props.imgs.map((pair, i) => {
        return (
          <div>{pair}</div>
        )
      })}
    </div>
  )
}

export default ImageGrid;