var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('index');
});

//--------------------------------------------------

router.get('/glanding', function(req, res, next) {
  res.render('glanding');
});

router.get('/wishlist-new', function(req, res, next) {
  res.send('GIVER make a VIEW NEW WISHLIST goes here');
});

router.get('/wishlist-fulfilled', function(req, res, next) {
  res.send('GIVER make VIEW IN-PROGRESS WISHLIST goes here');
});

module.exports = router;
