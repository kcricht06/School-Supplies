var mongoose = require('mongoose');
var Schema = mongoose.Schema,
  ObjectId = Schema.ObjectId;

var schema = new mongoose.Schema({

  wishlist:{
    type:ObjectId,
    required:true,
    ref: 'Wishlist',
    index:true
  },
  item:{
    type:ObjectId,
    required:true,
    ref: 'Wishlist',
    index:true
  },


});

var model = mongoose.model('WishlistItem', schema);
module.exports = model;
