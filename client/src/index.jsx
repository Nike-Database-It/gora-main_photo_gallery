import React from 'react';
import ReactDOM from 'react-dom';
import Gallery from './components/Gallery';
import rand from './randShoeSelector';

ReactDOM.render(
  <Gallery shoeID={rand} />,
  document.getElementById('root'),
);
