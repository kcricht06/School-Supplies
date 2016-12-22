$(document).ready(function() {
  var lock = new Auth0Lock(AUTH0_CLIENT_ID, AUTH0_DOMAIN, {
    auth: {
      params: { scope: 'openid email' } //Details: https://auth0.com/docs/scopes
    }
  });

  $('#btn-login').click(function(e) {
    e.preventDefault();
    lock.show();
  });
  //
  // $('.btn-logout').click(function(e) {
  //   e.preventDefault();
  //   logout();
  // })

  lock.on("authenticated", function(authResult) {
    lock.getProfile(authResult.idToken, function(error, profile) {
      if (error) {
        // Handle error
        return;
      }
      console.log('authResult.idToken', authResult.idToken);
      localStorage.setItem('id_token', authResult.idToken);
      // Display user information
      // show_profile_info(profile);
      // showPlaylists();
    });
  });

  function getObject(theObject) {
      var result = null;
      if(theObject instanceof Array) {
          for(var i = 0; i < theObject.length; i++) {
              result = getObject(theObject[i]);
              if (result) {
                  break;
              }
          }
      }
      else
      {
          for(var prop in theObject) {
              console.log(prop + ': ' + theObject[prop]);
              if(prop == 'id') {
                  if(theObject[prop] == 1) {
                      return theObject;
                  }
              }
              if(theObject[prop] instanceof Object || theObject[prop] instanceof Array) {
                  result = getObject(theObject[prop]);
                  if (result) {
                      break;
                  }
              }
          }
      }
      return result;
  }
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
    var apiQuery = $.ajax({
      url:"wishlist-api",
      method:"POST",
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

  $('#submit-list').on('click',function(){
    var wishList = [];
    var $itemArea = $('.new-wishlist-area-chosen .row div .item-details .item-name').text();
    console.log('itemArea: ',$itemArea);
  });
});
