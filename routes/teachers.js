var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('index');
});

//--------------------------------------------------

router.get('/tlanding', function(req, res, next) {
  res.render('tlanding');
});

router.get('/wishlist-new', function(req, res, next) {
  res.send('TEACHER make a NEW WISHLIST goes here');
});

router.get('/wishlist-inprog', function(req, res, next) {
  res.send('TEACHER make IN-PROGRESS WISHLIST goes here');
});

module.exports = router;
