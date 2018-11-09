const mongoose = require('mongoose');

const mongoUri = 'mongodb://172.17.0.2/nikeFEC_mpg';

const db = mongoose.connect(mongoUri, { useNewUrlParser: true, useCreateIndex: true });
db.catch((err) => {
  console.log(err);
}).then(() => {
  console.log('>>>>> Connected to MongoDB...');
});

module.exports = db;
