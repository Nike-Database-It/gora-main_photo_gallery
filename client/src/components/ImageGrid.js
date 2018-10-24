import React from 'react';
import ImageRow from './ImageRow.js'

const ImageGrid = (props) => {
  return (
    <div className='image-grid'>
      {props.imgs.map((pair, i) => {
        return (
          <ImageRow key={i} pair={pair}/>
        )
      })}
    </div>
  )
}

export default ImageGrid;