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
    // newPost.thing.push(item);

    // for(var i=0; i<items.length; i++){
    //   console.log('latest: ',latest);
    //   var latest = items[i];
    //   newPost.items.push(latest);
    // }
    //
    // console.log('Logging! New post: ',latest);
    newPost.save(function(err,success){
    console.log('id: ',newPost._id);
    res.redirect('/');
  });

});

// router.post('/add-wishlist-item',function(req,res,next){
//   var itemInfo = {
//     name: req.body.name,
//     photo:req.body.photo,
//     price:req.body.price
//   }
//   var newItem = new Item(itemInfo);
//   console.log('Logging! New post: ',newPost);
//   newPost.save(function(err,success){
//     res.redirect('/');
//   })
// });

//get wishlist
// router.get('/:id', function(req,res,next){
//   id=req.params.id;
//   thing = Wishlist.findById(id,'name',function(err, user) {
//     if (err) console.log('error!!! ',err);
//   });
//   console.log('id: ',id);
//   console.log('your wishlist items: ',thing);
// });


module.exports = router;
