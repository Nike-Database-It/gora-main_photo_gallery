const mongoose = require('mongoose');

require('./connection.js');

const shoeSchema = new mongoose.Schema({
  shoeID: { type: String, unique: true },
  imageUrls: [String],
});

const Shoe = mongoose.model('Shoe', shoeSchema);

module.exports = Shoe;
