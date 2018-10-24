const mongoose = require('mongoose');
const db = require('./connection.js');

const shoeSchema = new mongoose.Schema({
  shoeID: {type: String, unique: true},
  name: String,
  imageUrls: [String],
  color: String,
})