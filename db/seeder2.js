const fs = require('fs');

const faker = require('faker');

const stringify = require('csv-stringify');

// function generateShoe() {
//   const imageUrls = [];

//   for (let i = 0; i < 10; i += 1) {
//     imageUrls.push(faker.random.arrayElement(shoeLinks[faker.random.number(shoeLinks.length)]));
//   }

//   return {
//     shoeID: `${faker.random.number({ min: 100000, max: 999999 })}-${faker.random.number({ min: 100, max: 999 })}`,
//     imageUrls,
//   };
// }

const records = 10000000;

const options = { flags: 'a' };
const imageCSV = fs.createWriteStream('shoes.csv', options);
//const imageCSV = process.stdout;

const imageUrls = [
  'https://s3-us-west-1.amazonaws.com/nike-shoe-image-catalog/Air+Jordan+1+Mid/Black-Black-Dark+Grey/shoe_1.jpg',
  'https://s3-us-west-1.amazonaws.com/nike-shoe-image-catalog/Air+Jordan+1+Mid/Black-Black-Dark+Grey/shoe_2.jpg',
  'https://s3-us-west-1.amazonaws.com/nike-shoe-image-catalog/Air+Jordan+1+Mid/Black-Black-Dark+Grey/shoe_3.jpg',
  'https://s3-us-west-1.amazonaws.com/nike-shoe-image-catalog/Air+Jordan+1+Mid/Black-Black-Dark+Grey/shoe_4.jpg',
  'https://s3-us-west-1.amazonaws.com/nike-shoe-image-catalog/Air+Jordan+1+Mid/Black-Black-Dark+Grey/shoe_5.jpg',
  'https://s3-us-west-1.amazonaws.com/nike-shoe-image-catalog/Air+Jordan+1+Mid/Black-Black-Dark+Grey/shoe_6.jpg'
];


var i = 0;
var ok = true;

function write() {
  while (i < records && ok) {
    let shoeId = i;
    let nOfImage = Math.floor(5 + (Math.random() * 5));
    for (let j = 0; j < nOfImage; j++) {
      let imageObj = {
        shoeId: i,
        url: imageUrls[Math.floor(Math.random() * 6)],
      }
      let row = `${Object.values(imageObj).join(',')}\n`;

      ok = imageCSV.write(row);
    }
    i += 1;
  }

  if ( i < records) {
    ok = true;
    imageCSV.once('drain', () => write());
  } else {
    imageCSV.end();
    console.log('seeded a million records');
  }
}

write();
// imageCSV.on('drain', () => {
//   write();
// })
// write();


// function generateCSV(count, shoes) {
//   stringify(shoes, { header: true, columns }, (err, output) => {
//   if (err) {
//     console.log(err);
//   }

//   fs.writeFile(`records${count}.csv`, output, (error) => {
//     if (error) {
//       console.log(error);
//     }
//     console.log('successfully generated csv');
//   });
//   }
// };
