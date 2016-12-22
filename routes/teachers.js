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

//----------------------------------------------------

router.get('/wishlist-api', function(req, res, next){

// Send out request for amazon products
var lookForAmazonProducts = client.itemSearch({
  keywords: req.query.keyword,
  responseGroup: 'ItemAttributes, Images'
});

// If successful, and we get products back, send json to frontend
lookForAmazonProducts.then(function(results){
  res.json(results);
})

// If theres an error, console.log the error
lookForAmazonProducts.catch(function(err){
  console.log(err);
  res.send(err);
  });
});

//----------------------------------------------------

router.post('/new-wishlist', function(req, res, next){
  res.render('new-wishlist');
});

// router.get('/wishlist-inprog', function(req, res, next) {
//   res.send('TEACHER make IN-PROGRESS WISHLIST goes here');
// });


router.post('/wishlist-inprog', function(req, res, next) {
    var name = req.body.name;
    var email = req.body.email;
    var favorite = req.body.favorite;

    var newUser = User({
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



module.exports = router;
