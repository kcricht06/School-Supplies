var mongoose = require('mongoose');
var Schema = mongoose.Schema,
  ObjectId = Schema.ObjectId;

var schema = new mongoose.Schema({

  // wishlist:{
  //   type:ObjectId,
  //   required:true,
  //   ref: 'Wishlist',
  //   index:true
  // },
  user_name:{type:String},
  school_name:{type:String},
  userId:{type:String}

});

var model = mongoose.model('WishlistItem', schema);
module.exports = model;
