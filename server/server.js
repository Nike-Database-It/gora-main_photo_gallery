const express = require('express');

const parser = require('body-parser');
const morgan = require('morgan');
const path = require('path');

const Shoe = require('../db/Shoe.js');

const app = express();

app.use(express.static(path.join(__dirname, '../client/dist')));

app.use(parser.json());
app.use(morgan('dev'));

// SERVER METHODS //
app.get('/shoe:shoeID', (req, res) => {
  let shoeID = req.params.shoeID;
  console.log(shoeID);
  shoeID = shoeID.substring(1, shoeID.length);
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
