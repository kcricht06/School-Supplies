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

router.get('/glanding', function(req, res, next) {
  res.render('glanding');
});


router.get('/wishlist-fulfilled', function(req, res, next) {
  res.send('GIVER make VIEW IN-PROGRESS WISHLIST goes here');
});

router.get('/wishlist-search', function(req,res,next){
  res.render('wishlist-search');
});

router.get('/donor-specific-wishlist', function(req,res,next){
  res.render('donor-specific-wishlist');
});
router.get('/donor-checkout', function(req,res,next){
  res.render('donor-checkout');
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


module.exports = router;
