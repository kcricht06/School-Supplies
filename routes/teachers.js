var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  // res.render('teachers', {title: 'TEACHERS'});
  res.render('teachers');
});

//--------------------------------------------------

router.get('/landing', function(req, res, next) {
  // res.render('teachers', {title: 'TEACHERS'});
  res.send("work?")
});


module.exports = router;
