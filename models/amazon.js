var mongoose = require('mongoose');

var AmazonData = new mongoose.Schema({
  keyword: { type: String, required: true},
  
});

var model = mongoose.model('keyword', AmazonData);
module.exports = model;
