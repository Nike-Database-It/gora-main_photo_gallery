const mongoose = require('mongoose');
const Shoe = require('./Shoe.js');

const ids = ['310805-408', '310806-408', '310806-002', '305381-113', '852542-306', '554724-062', '554724-113', '554724-071', '554724-610', '554724-050',
  '554724-109', 'AR4491-001', 'AR4491-700', 'AV3922-601', 'AV3922-348', 'AV3922-001', 'AT3146-001', 'AV1200-600', 'AV1200-007', 'AV1200-008',
  'AV1200-401', 'AV1200-100', 'AV1200-200', 'AV1200-001', '315371-006', '315371-300', '310805-160', '136027-148', 'AV7008-700', 'AV7007-001',
  'AR5599-006', 'AT4040-601', '820273-300', '820273-400', '820273-600', '820276-006', '554725-065', '640734-065', '640734-071',
  'AR6351-113', 'AR6352-113', 'AT8012-601', 'AT8011-407', 'BV8017-445', '384665-104', '305368-113', '440888-148', '884129-035', '414575-035',
  '151186-301', '850000-301', 'AA2494-801', 'AA2494-401', 'AA2494-701', '555088-801', '555088-401', 'AQ7924-001', 'AQ7924-305', 'AQ7924-107',
  'AQ7924-601', 'AQ7924-100', 'AQ9119-300', 'AQ9119-001', '555112-001', '640735-065', '640735-071', 'AT4612-500', 'AT4613-500',
  'BV8018-445', 'AR4430-016', 'AR4430-105', 'AR4430-003', 'AR4430-200', 'AR4430-023', 'AR1000-001', 'AR1000-006', 'AR1000-003',
  'AR1000-023', '580603-603', '580603-300', '580603-401', '580603-001', 'AO9744-600', '384666-104', '384667-104', 'AJ7984-002', 'AJ7984-600',
  'AJ7984-001', 'AO2649-001', 'AO2649-301', 'AO2649-023', 'AO2649-007', 'AO2649-002', 'AJ7990-003', 'AJ7990-001', 'AJ7990-301', 'AJ7990-006',
  'AA2517-600', 'AA2517-005', 'AA2517-002', 'AA2517-062', 'AA2517-023', 'AA2517-004', '684915-106', 'AH8109-003', 'AH8109-600', 'AH8109-100',
  'AH8109-002', 'AO1561-003', 'AO1561-117', 'AO1561-010', 'AO1561-011', 'AO1561-107', 'AO1560-010', 'AO1560-117', 'AA1253-105', 'AA1253-400',
  'AQ9084-063', 'AQ9084-006', 'AQ9084-100', 'AQ9084-300', 'AQ9084-010'];

const shoeLinks = [
  ['https://s3-us-west-1.amazonaws.com/nike-shoe-image-catalog/Air+Jordan+1+Mid/Black-Black-Dark+Grey/shoe_1.jpg',
    'https://s3-us-west-1.amazonaws.com/nike-shoe-image-catalog/Air+Jordan+1+Mid/Black-Black-Dark+Grey/shoe_2.jpg',
    'https://s3-us-west-1.amazonaws.com/nike-shoe-image-catalog/Air+Jordan+1+Mid/Black-Black-Dark+Grey/shoe_3.jpg',
    'https://s3-us-west-1.amazonaws.com/nike-shoe-image-catalog/Air+Jordan+1+Mid/Black-Black-Dark+Grey/shoe_4.jpg',
    'https://s3-us-west-1.amazonaws.com/nike-shoe-image-catalog/Air+Jordan+1+Mid/Black-Black-Dark+Grey/shoe_5.jpg',
    'https://s3-us-west-1.amazonaws.com/nike-shoe-image-catalog/Air+Jordan+1+Mid/Black-Black-Dark+Grey/shoe_6.jpg'],

  ['https://s3-us-west-1.amazonaws.com/nike-shoe-image-catalog/Air+Jordan+1+Mid/Black-Light+Bone-Cone/shoe_1.jpg',
    'https://s3-us-west-1.amazonaws.com/nike-shoe-image-catalog/Air+Jordan+1+Mid/Black-Light+Bone-Cone/shoe_2.jpg',
    'https://s3-us-west-1.amazonaws.com/nike-shoe-image-catalog/Air+Jordan+1+Mid/Black-Light+Bone-Cone/shoe_3.jpg',
    'https://s3-us-west-1.amazonaws.com/nike-shoe-image-catalog/Air+Jordan+1+Mid/Black-Light+Bone-Cone/shoe_4.jpg',
    'https://s3-us-west-1.amazonaws.com/nike-shoe-image-catalog/Air+Jordan+1+Mid/Black-Light+Bone-Cone/shoe_5.jpg',
    'https://s3-us-west-1.amazonaws.com/nike-shoe-image-catalog/Air+Jordan+1+Mid/Black-Light+Bone-Cone/shoe_6.jpg'],

  ['https://s3-us-west-1.amazonaws.com/nike-shoe-image-catalog/Air+Jordan+1+Mid/Black-Sail-University+Gold/shoe_1.jpg',
    'https://s3-us-west-1.amazonaws.com/nike-shoe-image-catalog/Air+Jordan+1+Mid/Black-Sail-University+Gold/shoe_2.jpg',
    'https://s3-us-west-1.amazonaws.com/nike-shoe-image-catalog/Air+Jordan+1+Mid/Black-Sail-University+Gold/shoe_3.jpg',
    'https://s3-us-west-1.amazonaws.com/nike-shoe-image-catalog/Air+Jordan+1+Mid/Black-Sail-University+Gold/shoe_4.jpg',
    'https://s3-us-west-1.amazonaws.com/nike-shoe-image-catalog/Air+Jordan+1+Mid/Black-Sail-University+Gold/shoe_5.jpg',
    'https://s3-us-west-1.amazonaws.com/nike-shoe-image-catalog/Air+Jordan+1+Mid/Black-Sail-University+Gold/shoe_6.jpg'],

  ['https://s3-us-west-1.amazonaws.com/nike-shoe-image-catalog/Air+Jordan+1+Mid/Gym+Red-White-Black/shoe_1.jpg',
    'https://s3-us-west-1.amazonaws.com/nike-shoe-image-catalog/Air+Jordan+1+Mid/Gym+Red-White-Black/shoe_2.jpg',
    'https://s3-us-west-1.amazonaws.com/nike-shoe-image-catalog/Air+Jordan+1+Mid/Gym+Red-White-Black/shoe_3.jpg',
    'https://s3-us-west-1.amazonaws.com/nike-shoe-image-catalog/Air+Jordan+1+Mid/Gym+Red-White-Black/shoe_4.jpg',
    'https://s3-us-west-1.amazonaws.com/nike-shoe-image-catalog/Air+Jordan+1+Mid/Gym+Red-White-Black/shoe_5.jpg',
    'https://s3-us-west-1.amazonaws.com/nike-shoe-image-catalog/Air+Jordan+1+Mid/Gym+Red-White-Black/shoe_6.jpg'],

  ['https://s3-us-west-1.amazonaws.com/nike-shoe-image-catalog/Air+Jordan+1+Mid/White-White-Black/shoe_1.jpg',
    'https://s3-us-west-1.amazonaws.com/nike-shoe-image-catalog/Air+Jordan+1+Mid/White-White-Black/shoe_2.jpg',
    'https://s3-us-west-1.amazonaws.com/nike-shoe-image-catalog/Air+Jordan+1+Mid/White-White-Black/shoe_3.jpg',
    'https://s3-us-west-1.amazonaws.com/nike-shoe-image-catalog/Air+Jordan+1+Mid/White-White-Black/shoe_4.jpg',
    'https://s3-us-west-1.amazonaws.com/nike-shoe-image-catalog/Air+Jordan+1+Mid/White-White-Black/shoe_5.jpg',
    'https://s3-us-west-1.amazonaws.com/nike-shoe-image-catalog/Air+Jordan+1+Mid/White-White-Black/shoe_6.jpg'],
  // 5
  ['https://s3-us-west-1.amazonaws.com/nike-shoe-image-catalog/Air+Jordan+1+Mid/White-White-Pure+Platinum/shoe_1.jpg',
    'https://s3-us-west-1.amazonaws.com/nike-shoe-image-catalog/Air+Jordan+1+Mid/White-White-Pure+Platinum/shoe_2.jpg',
    'https://s3-us-west-1.amazonaws.com/nike-shoe-image-catalog/Air+Jordan+1+Mid/White-White-Pure+Platinum/shoe_3.jpg',
    'https://s3-us-west-1.amazonaws.com/nike-shoe-image-catalog/Air+Jordan+1+Mid/White-White-Pure+Platinum/shoe_4.jpg',
    'https://s3-us-west-1.amazonaws.com/nike-shoe-image-catalog/Air+Jordan+1+Mid/White-White-Pure+Platinum/shoe_5.jpg',
    'https://s3-us-west-1.amazonaws.com/nike-shoe-image-catalog/Air+Jordan+1+Mid/White-White-Pure+Platinum/shoe_6.jpg'],

  ['https://s3-us-west-1.amazonaws.com/nike-shoe-image-catalog/Air+Jordan+1+Moto/shoe_1.jpg',
    'https://s3-us-west-1.amazonaws.com/nike-shoe-image-catalog/Air+Jordan+1+Moto/shoe_2.jpg',
    'https://s3-us-west-1.amazonaws.com/nike-shoe-image-catalog/Air+Jordan+1+Moto/shoe_3.jpg',
    'https://s3-us-west-1.amazonaws.com/nike-shoe-image-catalog/Air+Jordan+1+Moto/shoe_4.jpg',
    'https://s3-us-west-1.amazonaws.com/nike-shoe-image-catalog/Air+Jordan+1+Moto/shoe_5.jpg',
    'https://s3-us-west-1.amazonaws.com/nike-shoe-image-catalog/Air+Jordan+1+Moto/shoe_6.jpg'],

  ['https://s3-us-west-1.amazonaws.com/nike-shoe-image-catalog/Air+Jordan+1+Retro+High+Premium/AH7389-302/shoe_1.jpg',
    'https://s3-us-west-1.amazonaws.com/nike-shoe-image-catalog/Air+Jordan+1+Retro+High+Premium/AH7389-302/shoe_2.jpg',
    'https://s3-us-west-1.amazonaws.com/nike-shoe-image-catalog/Air+Jordan+1+Retro+High+Premium/AH7389-302/shoe_3.jpg',
    'https://s3-us-west-1.amazonaws.com/nike-shoe-image-catalog/Air+Jordan+1+Retro+High+Premium/AH7389-302/shoe_4.jpg',
    'https://s3-us-west-1.amazonaws.com/nike-shoe-image-catalog/Air+Jordan+1+Retro+High+Premium/AH7389-302/shoe_5.jpg',
    'https://s3-us-west-1.amazonaws.com/nike-shoe-image-catalog/Air+Jordan+1+Retro+High+Premium/AH7389-302/shoe_6.jpg',
    'https://s3-us-west-1.amazonaws.com/nike-shoe-image-catalog/Air+Jordan+1+Retro+High+Premium/AH7389-302/shoe_7.jpg',
    'https://s3-us-west-1.amazonaws.com/nike-shoe-image-catalog/Air+Jordan+1+Retro+High+Premium/AH7389-302/shoe_8.jpg'],

  ['https://s3-us-west-1.amazonaws.com/nike-shoe-image-catalog/Air+Jordan+Retro+10/Dark+Shadow-Black-True+Red/shoe_1.jpg',
    'https://s3-us-west-1.amazonaws.com/nike-shoe-image-catalog/Air+Jordan+Retro+10/Dark+Shadow-Black-True+Red/shoe_2.jpg',
    'https://s3-us-west-1.amazonaws.com/nike-shoe-image-catalog/Air+Jordan+Retro+10/Dark+Shadow-Black-True+Red/shoe_3.jpg',
    'https://s3-us-west-1.amazonaws.com/nike-shoe-image-catalog/Air+Jordan+Retro+10/Dark+Shadow-Black-True+Red/shoe_4.jpg',
    'https://s3-us-west-1.amazonaws.com/nike-shoe-image-catalog/Air+Jordan+Retro+10/Dark+Shadow-Black-True+Red/shoe_5.jpg',
    'https://s3-us-west-1.amazonaws.com/nike-shoe-image-catalog/Air+Jordan+Retro+10/Dark+Shadow-Black-True+Red/shoe_6.jpg'],

  ['https://s3-us-west-1.amazonaws.com/nike-shoe-image-catalog/Air+Jordan+Retro+10/Racer+Blue-Black-Team+Orange/AirJordanRetro10_1.jpg',
    'https://s3-us-west-1.amazonaws.com/nike-shoe-image-catalog/Air+Jordan+Retro+10/Racer+Blue-Black-Team+Orange/AirJordanRetro10_2.jpg',
    'https://s3-us-west-1.amazonaws.com/nike-shoe-image-catalog/Air+Jordan+Retro+10/Racer+Blue-Black-Team+Orange/AirJordanRetro10_3.jpg',
    'https://s3-us-west-1.amazonaws.com/nike-shoe-image-catalog/Air+Jordan+Retro+10/Racer+Blue-Black-Team+Orange/AirJordanRetro10_4.jpg',
    'https://s3-us-west-1.amazonaws.com/nike-shoe-image-catalog/Air+Jordan+Retro+10/Racer+Blue-Black-Team+Orange/AirJordanRetro10_5.jpg',
    'https://s3-us-west-1.amazonaws.com/nike-shoe-image-catalog/Air+Jordan+Retro+10/Racer+Blue-Black-Team+Orange/AirJordanRetro10_6.jpg'],
  // 10
  ['https://s3-us-west-1.amazonaws.com/nike-shoe-image-catalog/Jordan+88+Racer/AV1200-600/shoe_1.jpg',
    'https://s3-us-west-1.amazonaws.com/nike-shoe-image-catalog/Jordan+88+Racer/AV1200-600/shoe_2.jpg',
    'https://s3-us-west-1.amazonaws.com/nike-shoe-image-catalog/Jordan+88+Racer/AV1200-600/shoe_3.jpg',
    'https://s3-us-west-1.amazonaws.com/nike-shoe-image-catalog/Jordan+88+Racer/AV1200-600/shoe_4.jpg',
    'https://s3-us-west-1.amazonaws.com/nike-shoe-image-catalog/Jordan+88+Racer/AV1200-600/shoe_5.jpg',
    'https://s3-us-west-1.amazonaws.com/nike-shoe-image-catalog/Jordan+88+Racer/AV1200-600/shoe_6.jpg'],

  ['https://s3-us-west-1.amazonaws.com/nike-shoe-image-catalog/Jordan+88+Racer/AV1200-100/shoe_1.jpg',
    'https://s3-us-west-1.amazonaws.com/nike-shoe-image-catalog/Jordan+88+Racer/AV1200-100/shoe_2.jpg',
    'https://s3-us-west-1.amazonaws.com/nike-shoe-image-catalog/Jordan+88+Racer/AV1200-100/shoe_3.jpg',
    'https://s3-us-west-1.amazonaws.com/nike-shoe-image-catalog/Jordan+88+Racer/AV1200-100/shoe_4.jpg',
    'https://s3-us-west-1.amazonaws.com/nike-shoe-image-catalog/Jordan+88+Racer/AV1200-100/shoe_5.jpg',
    'https://s3-us-west-1.amazonaws.com/nike-shoe-image-catalog/Jordan+88+Racer/AV1200-100/shoe_6.jpg'],

  ['https://s3-us-west-1.amazonaws.com/nike-shoe-image-catalog/Jordan+88+Racer/AV1200-001/shoe_1.jpg',
    'https://s3-us-west-1.amazonaws.com/nike-shoe-image-catalog/Jordan+88+Racer/AV1200-001/shoe_2.jpg',
    'https://s3-us-west-1.amazonaws.com/nike-shoe-image-catalog/Jordan+88+Racer/AV1200-001/shoe_3.jpg',
    'https://s3-us-west-1.amazonaws.com/nike-shoe-image-catalog/Jordan+88+Racer/AV1200-001/shoe_4.jpg',
    'https://s3-us-west-1.amazonaws.com/nike-shoe-image-catalog/Jordan+88+Racer/AV1200-001/shoe_5.jpg',
    'https://s3-us-west-1.amazonaws.com/nike-shoe-image-catalog/Jordan+88+Racer/AV1200-001/shoe_6.jpg'],

  ['https://s3-us-west-1.amazonaws.com/nike-shoe-image-catalog/Jordan+AJ1+Explorer+XX/AO1529-300/shoe_1.jpg',
    'https://s3-us-west-1.amazonaws.com/nike-shoe-image-catalog/Jordan+AJ1+Explorer+XX/AO1529-300/shoe_2.jpg',
    'https://s3-us-west-1.amazonaws.com/nike-shoe-image-catalog/Jordan+AJ1+Explorer+XX/AO1529-300/shoe_3.jpg',
    'https://s3-us-west-1.amazonaws.com/nike-shoe-image-catalog/Jordan+AJ1+Explorer+XX/AO1529-300/shoe_4.jpg',
    'https://s3-us-west-1.amazonaws.com/nike-shoe-image-catalog/Jordan+AJ1+Explorer+XX/AO1529-300/shoe_5.jpg',
    'https://s3-us-west-1.amazonaws.com/nike-shoe-image-catalog/Jordan+AJ1+Explorer+XX/AO1529-300/shoe_6.jpg'],

  ['https://s3-us-west-1.amazonaws.com/nike-shoe-image-catalog/Jordan+CP3.XI/AA1272-014/shoe_1.jpg',
    'https://s3-us-west-1.amazonaws.com/nike-shoe-image-catalog/Jordan+CP3.XI/AA1272-014/shoe_2.jpg',
    'https://s3-us-west-1.amazonaws.com/nike-shoe-image-catalog/Jordan+CP3.XI/AA1272-014/shoe_3.jpg',
    'https://s3-us-west-1.amazonaws.com/nike-shoe-image-catalog/Jordan+CP3.XI/AA1272-014/shoe_4.jpg',
    'https://s3-us-west-1.amazonaws.com/nike-shoe-image-catalog/Jordan+CP3.XI/AA1272-014/shoe_5.jpg',
    'https://s3-us-west-1.amazonaws.com/nike-shoe-image-catalog/Jordan+CP3.XI/AA1272-014/shoe_6.jpg',
    'https://s3-us-west-1.amazonaws.com/nike-shoe-image-catalog/Jordan+CP3.XI/AA1272-014/shoe_7.jpg'],
  // 15
  ['https://s3-us-west-1.amazonaws.com/nike-shoe-image-catalog/Jordan+CP3.XI/AA1272-007/shoe_1.jpg',
    'https://s3-us-west-1.amazonaws.com/nike-shoe-image-catalog/Jordan+CP3.XI/AA1272-007/shoe_2.jpg',
    'https://s3-us-west-1.amazonaws.com/nike-shoe-image-catalog/Jordan+CP3.XI/AA1272-007/shoe_3.jpg',
    'https://s3-us-west-1.amazonaws.com/nike-shoe-image-catalog/Jordan+CP3.XI/AA1272-007/shoe_4.jpg',
    'https://s3-us-west-1.amazonaws.com/nike-shoe-image-catalog/Jordan+CP3.XI/AA1272-007/shoe_5.jpg',
    'https://s3-us-west-1.amazonaws.com/nike-shoe-image-catalog/Jordan+CP3.XI/AA1272-007/shoe_6.jpg',
    'https://s3-us-west-1.amazonaws.com/nike-shoe-image-catalog/Jordan+CP3.XI/AA1272-007/shoe_7.jpg',
    'https://s3-us-west-1.amazonaws.com/nike-shoe-image-catalog/Jordan+CP3.XI/AA1272-007/shoe_8.jpg'],

  ['https://s3-us-west-1.amazonaws.com/nike-shoe-image-catalog/Jordan+CP3.XI/AA1272-101/shoe_1.jpg',
    'https://s3-us-west-1.amazonaws.com/nike-shoe-image-catalog/Jordan+CP3.XI/AA1272-101/shoe_2.jpg',
    'https://s3-us-west-1.amazonaws.com/nike-shoe-image-catalog/Jordan+CP3.XI/AA1272-101/shoe_3.jpg',
    'https://s3-us-west-1.amazonaws.com/nike-shoe-image-catalog/Jordan+CP3.XI/AA1272-101/shoe_4.jpg',
    'https://s3-us-west-1.amazonaws.com/nike-shoe-image-catalog/Jordan+CP3.XI/AA1272-101/shoe_5.jpg',
    'https://s3-us-west-1.amazonaws.com/nike-shoe-image-catalog/Jordan+CP3.XI/AA1272-101/shoe_6.jpg'],

  ['https://s3-us-west-1.amazonaws.com/nike-shoe-image-catalog/Jordan+Hydro+7/AA2516-021/shoe_1.jpg',
    'https://s3-us-west-1.amazonaws.com/nike-shoe-image-catalog/Jordan+Hydro+7/AA2516-021/shoe_2.jpg',
    'https://s3-us-west-1.amazonaws.com/nike-shoe-image-catalog/Jordan+Hydro+7/AA2516-021/shoe_3.jpg',
    'https://s3-us-west-1.amazonaws.com/nike-shoe-image-catalog/Jordan+Hydro+7/AA2516-021/shoe_4.jpg'],

  ['https://s3-us-west-1.amazonaws.com/nike-shoe-image-catalog/Air+Jordan+XXXII/AA1253-105/shoe_1.jpg',
    'https://s3-us-west-1.amazonaws.com/nike-shoe-image-catalog/Air+Jordan+XXXII/AA1253-105/shoe_2.jpg',
    'https://s3-us-west-1.amazonaws.com/nike-shoe-image-catalog/Air+Jordan+XXXII/AA1253-105/shoe_3.jpg',
    'https://s3-us-west-1.amazonaws.com/nike-shoe-image-catalog/Air+Jordan+XXXII/AA1253-105/shoe_4.jpg',
    'https://s3-us-west-1.amazonaws.com/nike-shoe-image-catalog/Air+Jordan+XXXII/AA1253-105/shoe_5.jpg',
    'https://s3-us-west-1.amazonaws.com/nike-shoe-image-catalog/Air+Jordan+XXXII/AA1253-105/shoe_6.jpg',
    'https://s3-us-west-1.amazonaws.com/nike-shoe-image-catalog/Air+Jordan+XXXII/AA1253-105/shoe_7.jpg',
    'https://s3-us-west-1.amazonaws.com/nike-shoe-image-catalog/Air+Jordan+XXXII/AA1253-105/shoe_8.jpg'],

  ['https://s3-us-west-1.amazonaws.com/nike-shoe-image-catalog/Air+Jordan+XXXII/AA1253-400/shoe_1.jpg',
    'https://s3-us-west-1.amazonaws.com/nike-shoe-image-catalog/Air+Jordan+XXXII/AA1253-400/shoe_2.jpg',
    'https://s3-us-west-1.amazonaws.com/nike-shoe-image-catalog/Air+Jordan+XXXII/AA1253-400/shoe_3.jpg',
    'https://s3-us-west-1.amazonaws.com/nike-shoe-image-catalog/Air+Jordan+XXXII/AA1253-400/shoe_4.jpg',
    'https://s3-us-west-1.amazonaws.com/nike-shoe-image-catalog/Air+Jordan+XXXII/AA1253-400/shoe_5.jpg',
    'https://s3-us-west-1.amazonaws.com/nike-shoe-image-catalog/Air+Jordan+XXXII/AA1253-400/shoe_6.jpg',
    'https://s3-us-west-1.amazonaws.com/nike-shoe-image-catalog/Air+Jordan+XXXII/AA1253-400/shoe_7.jpg',
    'https://s3-us-west-1.amazonaws.com/nike-shoe-image-catalog/Air+Jordan+XXXII/AA1253-400/shoe_8.jpg'],
];

const shoeArr = [];
for (let i = 0; i < ids.length; i += 1) {
  const idx = Math.floor(Math.random() * shoeLinks.length);
  shoeArr.push({ shoeID: ids[i], imageUrls: shoeLinks[idx] });
}

const seed = (callback = () => { mongoose.connection.close(); }) => {
  Shoe.deleteMany({}, (err) => {
    if (err) {
      console.log(err);
    }
    Shoe.insertMany(shoeArr, (error, docs) => {
      if (error) {
        console.log(error);
      }
      console.log(`>>>>> finished seeding database with ${docs.length} shoes...`);
      callback();
    });
  });
};

module.exports = seed;
