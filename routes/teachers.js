var express = require('express');
var router = express.Router();
var amazon = require('amazon-product-api');
var ensureLoggedIn = require('connect-ensure-login').ensureLoggedIn();


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

router.get('/new-wishlist', function(req, res, next) {
  res.render('new-wishlist');
});

router.get('/wishlist-active', function(req, res, next){
  res.render('wishlist-active');
});

router.get('/wishlist-past', function(req, res, next){
  res.render('wishlist-past');
});
router.post('/wishlist-api', function(req, res, next){
  client.itemSearch({
  keywords: req.body.keyword,
  responseGroup: 'ItemAttributes,Offers,Images'
}).then(function(results){
  res.json(results);
}).catch(function(err){
  console.log(err);
  });
});
router.post('/new-wishlist', function(req, res, next){
  res.render('new-wishlist');
});

router.get('/wishlist-inprog', function(req, res, next) {
  res.send('TEACHER make IN-PROGRESS WISHLIST goes here');
});

module.exports = router;
