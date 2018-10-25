import React from 'react';
import ReactDOM from 'react-dom';
import Gallery from './components/Gallery.jsx';
import rand from './randShoeSelector.js';

ReactDOM.render(
  <Gallery shoeID={rand} />,
  document.getElementById('root'),
);
