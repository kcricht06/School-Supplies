var mongoose = require('mongoose');

var schema = new mongoose.Schema({

  name: {type: String},
  duedate:{type: String},
  userId:{type:String}
});

var model = mongoose.model('WishList', schema);
module.exports = model;
