var express = require('express');
var router = express.Router();

var amazon = require('amazon-product-api');
var AmazonData = require('../models/amazondata');


var client = amazon.createClient({
  awsId: process.env.ACCESS_KEY_ID,
  awsSecret: process.env.SECRET_ACCESS_KEY,
  awsTag: process.env.AWS_TAG
});


/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('index');
});

//--------------------------------------------------

router.get('/tlanding', function(req, res, next) {
  res.render('tlanding');
});

//--------------------------------------------------

router.get('/wishlist-new', function(req, res, next) {
  res.render('wishlist-new');
});


// Retrieves JSON Object when this route is called
router.post('/wishlist-api', function(req, res, next) {
  client.itemSearch({
    keywords: req.body.keywords,
    responseGroup: 'ItemAttributes,Offers,Images'
  }).then(function(results){
    res.json(results);
  }).catch(function(err){
    console.log('Catch: ');
    console.log(err[0].Error);
    res.send(err[0].Error);
  });
});


//--------------------------------------------------

// router.post('/', function(req, res, next) {
//     // var name = req.body.name;
//     // var email = req.body.email;
//     // var favorite = req.body.favorite;
//
//     var newAmazonData = AmazonData({
//         // name: name,
//         // email: email,
//         // favorite: favorite,
//     });
//
//     // Save the user
//     newAmazonData.save(function(err, newAmazonData) {
//         if (err) console.log(err);
//
//         res.send('AmazonData created!');
//     });
// });

//--------------------------------------------------



// var mongoose = require('mongoose');
//
// var AmazonData = new mongoose.Schema({
//  keywords: { type: String, required: true},
//  price: { type: String},
//  name: { type: String},
//  imgUrl: {type: String}
//
// });
//
// var model = mongoose.model('keywords', AmazonData);
// module.exports = model;



router.post('/', function(req, res, next) {
    var name = req.body.name;
    var email = req.body.email;
    var favorite = req.body.favorite;

    var wishListData = User({
        name: name,
        email: email,
        favorite: favorite,
    });

    // Save the user
    newUser.save(function(err, user) {
        if (err) console.log(err);

        res.send('User created!');
    });
});

router.get('/mywishlists', function(req, res, next) {
  res.render('mywishlists');
});

module.exports = router;
