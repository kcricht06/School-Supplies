var express = require('express');
var router = express.Router();
var Wishlist = require('../models/wishlist');
var User = require('../models/user');


router.post('/',function(req,res,next){
  var postInfo = {
    price: req.body.price,
    name: req.body.name,
    imgUrl: req.body.imgUrl
  };
  var newPost = new Item(postInfo);
  console.log('Logging! New post: ',newPost);

  newPost.save(function(err,success){
    res.redirect('/');
  })
});


module.exports = router;
