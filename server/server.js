const express = require('express');

const parser = require('body-parser');
const morgan = require('morgan');
const path = require('path');

const Shoe = require('../db/Shoe.js');

var app = express();

app.use(express.static(path.join(__dirname, '../client/dist')));

// SERVER METHODS //
app.get('/shoe:shoeID', (req, res) => {
  var shoeID = req.params['shoeID'];
  shoeID = shoeID.substring(1, shoeID.length);
  Shoe.find({"shoeID": shoeID}, (err, shoe) => {
    res.send(shoe);
  })
})


// APP LISTENING PROTOCOL
const PORT = 3131;
app.listen(PORT, () => {
  console.log(`Express server listening on port ${PORT}...`);
})