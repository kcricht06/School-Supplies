var mongoose = require('mongoose');

var schema = new mongoose.Schema({
      name:{type: String},
      photo:{type: String},
      price:{type: String}
});

var model = mongoose.model('Item', schema);
module.exports = model;
