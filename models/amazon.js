var mongoose = require('mongoose');

var AmazonData = new mongoose.Schema({
  keyword: { type: String, required: false},
  price: { type: String, required: false },
  imageUrl: {type: String, required: false },
  name: {type: String, required: false }
});

var model = mongoose.model('keyword', AmazonData);
module.exports = model;
