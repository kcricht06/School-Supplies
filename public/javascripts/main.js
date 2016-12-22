

$('.center-header a').on('click',function(e){
  e.preventDefault();
  $('.help-panel').removeClass('hidden');
});

$('.help-panel a').on('click',function(e){
  e.preventDefault();
  $('.help-panel').addClass('hidden');
});

var data = [
  '<div class="wishlist-tab col-sm-4">',
    '<div class="panel">',
    '<ol>',
    '</ol>',
    '</div>',

  '</div>'

].join('');

for(var i=0; i<20; i++){
  $('.wishlist-area .row').append(data);
}

$('#srch-trm-btn').on('click',function(e){
  e.preventDefault();
  var searchItem = $('#srch-term').val();
  console.log('keyword: ',searchItem);
  wishlistApiQuery(searchItem);
});

function wishlistApiQuery(keyword){
  // ajax is for making a request to back end in real time
  // this makes a call to the back end with the url as endpoint
  var apiQuery = $.ajax({
    // the url is where we're sending the request to
    url:"wishlist-api",
    method:"GET",
    data:{
      keyword:keyword
    }
  });
  apiQuery.done(function(product){
    $('.new-wishlist-area .row').empty();
    console.log('product: ',product);
    for(var i=0; i<product.length; i++){
            var priceExists = product[i].ItemAttributes[0].ListPrice
            var label =  product[i].ItemAttributes[0].Label[0];

            var price = priceExists ? product[i].ItemAttributes[0].ListPrice[0].FormattedPrice[0] : 'No Price';

            var image =  product[i].MediumImage[0].URL[0];


      var nwldata = [
        '<div class="new-wishlist-tab col-sm-4">',
              '<div class="new-wishlist-container panel">',
                        '<div class="item-details">',
                            '<div class="item-name">',label,'</div>',
                            '<div class="item-price">',price,'</div>',
                        '</div>',
                        '<div class="new-wishlist-tab-img" style= "background-image:url(\'',image,'\')"/>',
                        '</div>',
              '</div>',
        '</div>'
        ].join('');
      $('.new-wishlist-area .row').append(nwldata);
    }
  });
}

$('body').on('click','.new-wishlist-container',function(){
  console.log('added');
  $(this).toggleClass('chosen');
});
$('#add-items').on('click',function(){
  $('.chosen').each(function(){
    $(this).toggleClass('chosen');
    var temp=$(this);
    var result=$(this).clone();
    $('.new-wishlist-area-chosen .row').append(result);
  });
});


  // Write your ajax

  // on pressing submit, we make a ajax post request to the backend
  // where there's a route to set up the data structure(mongoose stuff)
  // where it then communicates with the servers. think about that
  // drawing Mike made with the client-request to server-response.


  // i need to extract the data from the front end to pass the info
  // to the backend so that the backend can upload to mlabs


    $('#submit-list').on('click',function(){
      var wishList = [];

      // so now we need to extract the values from the DOM:
      // the '$itemArea' is a jQuery object that points to the 'new wishlist container'
      var $itemArea = $('.new-wishlist-area-chosen').find('.new-wishlist-container');
      var due = $('#due').val(); //due field
      var wlName = $('#wl-name').val(); //wish list name

      // populate array using jQuery's each
      $itemArea.each(function(index, container){
        // DOM traversal starting from container and find to extract value in
        // which is used to push values into array
        wishList.push({
          itemPrice: $(container).find('.item-price').text(),
          itemName: $(container).find('.item-name').text(),
          itemUrl: $(container).find('.new-wishlist-tab-img').css('background-image')
        });
      });

      //once we have our wishlist array, we make an ajax request to
      // the url '/wishlistapi/add-wishlist' which is defined in the
      // respective route file (routes/wishlistapi.js).

      // From the that file (wishlistapi.js), the route '/add-wishlist'
      // is defined and we extract the values from the req.body and pass them
      // into an object where we use that object to pass that data
      // into a constructor

      // the req.body that is viewable from the back end
      // will contain the data being sent
      var update = $.ajax({
        url:'/wishlistapi/add-wishlist',
        method:'POST',
        data:{
          wishList: JSON.stringify(wishList),
          due: due,
          name: wlName
        }
      });

      update.done(function(response){
        console.log("Success, baby!!");
      });

      update.fail(function(error){
        console.log('Error: ',error);
      });

    });
