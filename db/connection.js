const mongoose = require('mongoose');
const mongoUri = 'mongodb://localhost/nikeFEC';

const db = mongoose.connect(mongoUri);

module.exports = db;