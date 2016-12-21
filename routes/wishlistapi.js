var express = require('express');
var router = express.Router();
var Wishlist = require('../models/wishlist');
var Item = require('../models/item');
var WishlistItem = require('../models/wishlistitem');

router.post('/',function(req,res,next){
  var postInfo = {
    price: req.body.price,
    name: req.body.name,
    imgUrl: req.body.imgUrl
  };
  var newPost = new Wishlist(postInfo);
  console.log('Logging! New post: ',newPost);

  newPost.save(function(err,success){
    res.redirect('/');
  })
});


module.exports = router;
