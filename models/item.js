var mongoose = require('mongoose');

var schema = new mongoose.Schema({

  price: { type: String},
  name: { type: String},
  imgUrl: {type: String}

});

var model = mongoose.model('Item', schema);
module.exports = model;
