const express = require('express');

const parser = require('body-parser');
const morgan = require('morgan');
const path = require('path');

const Shoe = require('../db/Shoe.js');

const app = express();

app.use(express.static(path.join(__dirname, '../public')));

app.use(parser.json());
app.use(morgan('dev'));

// SERVER METHODS //
app.get('/shoe:shoeID', ({ params }, res) => {
  const id = params.shoeID;
  const shoeID = id.substring(1, id.length);
  Shoe.find({ shoeID }, (err, shoe) => {
    if (err) {
      console.log(err);
    }
    res.send(shoe);
  });
});


// APP LISTENING PROTOCOL
const PORT = 3131;
app.listen(PORT, () => {
  console.log(`>>>>> Express server listening on port ${PORT}...`);
});
