var express = require('express');
var router = express.Router();

var amazon = require('amazon-product-api');

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

router.get('/mywishlists', function(req, res, next) {
  // res.send('My Wishlists goes here')

  res.render('mywishlists');
});

module.exports = router;
