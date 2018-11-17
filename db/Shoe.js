const mongoose = require('mongoose');

require('./connection.js');

const shoeSchema = new mongoose.Schema({
  shoeID: { type: String, unique: true },
  imageUrls: [],
});

const imageSchema = new mongoose.Schema({
  imageUrls: String,
  createAt: { type: Date, default: Date.now },
});

const Shoe = mongoose.model('Shoe', shoeSchema, 'shoe');

const Image = mongoose.model('Image', imageSchema, 'image');

module.exports = Shoe;
