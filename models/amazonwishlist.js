var mongoose = require('mongoose');

var schema = new mongoose.Schema({
  keywords: { type: String, required: true},
  price: { type: String},
  name: { type: String},
  imgUrl: {type: String}
  // date: {type: Date}
});

var model = mongoose.model('Amazonwishlists', schema);

// Make this available to our other files
module.exports = model;
