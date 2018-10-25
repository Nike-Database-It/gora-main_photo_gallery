const mongoose = require('mongoose');
const mongoUri = 'mongodb://localhost/nikeFEC';

const db = mongoose.connect(mongoUri)
db.catch((err) => {
  console.log(err);
}).then((res) => {
  console.log('>>>>>>>>>>>>>>>>>>>>> Connected to MongoDB...')
})

module.exports = db;