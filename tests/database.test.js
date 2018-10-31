const Shoe = require('../db/Shoe');
const seed = require('../db/seeder');

test('properly empties the database', (done) => {
  Shoe.deleteMany({}, (err) => {
    if (err) {
      console.log(err);
    }
    Shoe.countDocuments({}, (error, count) => {
      expect(count).toEqual(0);
      done();
    });
  });
});

test('properly adds documents to the database', (done) => {
  const shoes = [{ shoeID: 11111, imageUrls: ['test1.jpg', 'test2.jpg'] }, { shoeID: 22222, imageUrls: ['test3.jpg', 'test4.jpg', 'test5.jpg'] }];
  Shoe.insertMany(shoes, (err) => {
    if (err) {
      console.log(err);
    }
    Shoe.countDocuments({}, (error, count) => {
      expect(count).toBe(2);
      done();
    });
  });
});

describe('Check for proper seeding of database', () => {
  it('seeded the database with 122 shoes', (done) => {
    seed(() => {
      Shoe.countDocuments({}, (error, count) => {
        if (error) {
          console.log(error);
        }
        expect(count).toBe(122);
        done();
      });
    });
  });
});
