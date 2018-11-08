import React from 'react';
import ReactDOM from 'react-dom';
import Gallery from './components/Gallery';
import rand from './randShoeSelector';

require('./main.css');

ReactDOM.render(<Gallery shoeID={rand} />, document.getElementById('gallery-container'));
