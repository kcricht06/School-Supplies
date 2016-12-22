var mongoose = require('mongoose');

var ItemSchema = new mongoose.Schema({
  name:{type: String},
  photo:{type: String},
  price:{type: String}
});

var schema = new mongoose.Schema({
  name: {type: String},
  duedate:{type: String},
  userId:{type:String},
  items:{type:String}
});

var model = mongoose.model('WishList', schema);
module.exports = model;
