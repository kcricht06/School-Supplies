
var express = require('express');
var router = express.Router();
var Wishlist = require('../models/wishlist');
var User = require('../models/user');
var Item = require('../models/item');


router.post('/',function(req,res,next){
  var postInfo = {
    duedate: req.body.duedate,
    name: req.body.name,
    photo: req.body.photo
  };
  var newPost = new Wishlist(postInfo);
  console.log('Logging! New post: ',newPost);

  newPost.save(function(err,success){
    res.redirect('/');
  })
});


router.post('/add-wishlist',function(req,res,next){
  console.log('req.body is:  ',req.body);
  // console.log('first item: ', items[0]);
  var postInfo = {
    name: req.body.name,
    duedate:req.body.due,
    items:req.body.wishList
  };

    var newPost = new Wishlist(postInfo);
    newPost.save(function(err,success){
    console.log('id: ',newPost._id);
    res.redirect('/');
  });

});


module.exports = router;
