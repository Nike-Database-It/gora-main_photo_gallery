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

// var newShoe = new Shoe({
//   shoeID: 'AH7389-302',
//   name: 'Air Jordan 1 Retro High Premium',
//   imageUrls: ['https://s3-us-west-1.amazonaws.com/nike-shoe-image-catalog/Air+Jordan+1+Retro+High+Premium/AH7389-302/shoe_1.jpg',
//   'https://s3-us-west-1.amazonaws.com/nike-shoe-image-catalog/Air+Jordan+1+Retro+High+Premium/AH7389-302/shoe_2.jpg',
//   'https://s3-us-west-1.amazonaws.com/nike-shoe-image-catalog/Air+Jordan+1+Retro+High+Premium/AH7389-302/shoe_3.jpg',
//   'https://s3-us-west-1.amazonaws.com/nike-shoe-image-catalog/Air+Jordan+1+Retro+High+Premium/AH7389-302/shoe_4.jpg',
//   'https://s3-us-west-1.amazonaws.com/nike-shoe-image-catalog/Air+Jordan+1+Retro+High+Premium/AH7389-302/shoe_5.jpg',
//   'https://s3-us-west-1.amazonaws.com/nike-shoe-image-catalog/Air+Jordan+1+Retro+High+Premium/AH7389-302/shoe_6.jpg',
//   'https://s3-us-west-1.amazonaws.com/nike-shoe-image-catalog/Air+Jordan+1+Retro+High+Premium/AH7389-302/shoe_7.jpg',
//   'https://s3-us-west-1.amazonaws.com/nike-shoe-image-catalog/Air+Jordan+1+Retro+High+Premium/AH7389-302/shoe_8.jpg'],
//   color: 'Olive Canvas/Phantom/Black'
// });

// newShoe.save();