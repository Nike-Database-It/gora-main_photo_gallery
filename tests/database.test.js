const Shoe = require('../db/Shoe');

test('properly empties the database', () => {
  Shoe.deleteMany({})
    .then(() => {
      Shoe.countDocuments({})
        .then((err, c) => {
          expect(c).toBe(0);
        });
    });
});

test('properly adds documents to the database', () => {
  const shoes = [{ shoeID: 11111, imageUrls: ['test1.jpg', 'test2.jpg'] }, { shoeID: 22222, imageUrls: ['test3.jpg', 'test4.jpg', 'test5.jpg'] }];
  Shoe.insertMany(shoes)
    .catch((err) => {
      console.log(err);
    })
    .then(() => {
      Shoe.countDocuments({})
        .catch((err) => {
          console.log(err);
        })
        .then((c) => {
          expect(c).toBe(2);
        });
    });
});
