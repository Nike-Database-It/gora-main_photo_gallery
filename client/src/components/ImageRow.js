import React from 'react';

const ImageRow = (props) => {
  return (
    <div className='image-row'>
      <div className='col_1'>
        <img src={props.pair[0]} width="250"></img>
      </div>
    {props.pair[1] !== undefined ?
      <div className='col_2'>
        <img src={props.pair[1]} width="250"></img>
      </div> : null
    }
    </div>
  )
}

export default ImageRow;