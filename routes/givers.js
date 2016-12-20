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

router.get('/wishlist-new', function(req, res, next) {
  res.send('GIVER make a VIEW NEW WISHLIST goes here');
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
router.get('/new-wishlist', function(req,res,next){
  res.render('new-wishlist');
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
              // for(var i=0; i<results.length; i++){
              //   returnData.push({
              //     imgUrl: results[i].MediumImage[0].URL[0],
              //     itemPrice: results[i].ItemAttributes[0].ListPrice[0].FormattedPrice[0],
              //     itemName: results[i].ItemAttributes[0].Label[0]
              //   });
              // }


//               res.json(response);
//             }).catch(function(err){
//               console.log('THERE WAS AN ERROR - Catch: ');
//               console.log(err.Error);
//               res.render('error');
//             });
//   // res.render('new-wishlist');
// });

module.exports = router;
