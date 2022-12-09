const mongoose = require('mongoose');

mongoose.set('strictQuery', true);
const conectDB = () => mongoose.connect('mongodb://localhost/convertor');
  
module.exports = conectDB;