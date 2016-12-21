var mongoose = require('mongoose');

var schema = new mongoose.Schema({

  keywords: { type: String, required: true},
  price: { type: String},
  name: { type: String},
  imgUrl: {type: String}

});

var model = mongoose.model('Item', schema);
module.exports = model;
