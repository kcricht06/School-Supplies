var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {
    title: 'Express'
  });
});

router.get('/teacher-portal', function(req,res,next){
  res.render('teacher-portal', {
    title: 'Teacher Portal',
    navoption: 'Log In'
  });
});

router.get('/donor-portal', function(req,res,next){
  res.render('donor-portal', {
    title: 'Donor Portal',
    navoption: 'Account'
  });
});

router.get('/wishlist-search', function(req,res,next){
  res.render('wishlist-search', {
    title: 'Wishlist Search',
    navoption: 'Account'
  });
});
module.exports = router;
