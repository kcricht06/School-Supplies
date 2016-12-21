var mongoose = require('mongoose');

var AmazonData = new mongoose.Schema({
  keywords: { type: String, required: true},
  price: { type: String},
  name: { type: String},
  imgUrl: {type: String}

});

var WishlistModel = mongoose.model('keywords', AmazonData);
module.exports = WishlistModel;
