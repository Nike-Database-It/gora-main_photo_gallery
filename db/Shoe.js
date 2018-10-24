const mongoose = require('mongoose');
const db = require('./connection.js');

const shoeSchema = new mongoose.Schema({
  shoeID: {type: String, unique: true},
  name: String,
  imageUrls: [String],
  color: String,
})

const Shoe = mongoose.model('Shoe', shoeSchema);

module.exports = Shoe;

var newShoe = new Shoe({
  shoeID: '554724-109',
  name: 'Air Jordan 1 Mid',
  imageUrls: ['https://s3-us-west-1.amazonaws.com/nike-shoe-image-catalog/Air+Jordan+1+Mid/White-White-Pure+Platinum/shoe_1.jpg',
  'https://s3-us-west-1.amazonaws.com/nike-shoe-image-catalog/Air+Jordan+1+Mid/White-White-Pure+Platinum/shoe_2.jpg',
  'https://s3-us-west-1.amazonaws.com/nike-shoe-image-catalog/Air+Jordan+1+Mid/White-White-Pure+Platinum/shoe_3.jpg',
  'https://s3-us-west-1.amazonaws.com/nike-shoe-image-catalog/Air+Jordan+1+Mid/White-White-Pure+Platinum/shoe_4.jpg',
  'https://s3-us-west-1.amazonaws.com/nike-shoe-image-catalog/Air+Jordan+1+Mid/White-White-Pure+Platinum/shoe_5.jpg',
  'https://s3-us-west-1.amazonaws.com/nike-shoe-image-catalog/Air+Jordan+1+Mid/White-White-Pure+Platinum/shoe_6.jpg'],
  color: 'White-White-Platinum'
});

newShoe.save();