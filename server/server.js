const express = require('express');
const parser = require('body-parser');
const morgan = require('morgan');
const path = require('path');

var app = express();

app.use(express.static(path.join(__dirname, '../client/dist')));

const PORT = 3131;
app.listen(PORT, () => {
  console.log(`Express server listening on port ${PORT}...`);
})