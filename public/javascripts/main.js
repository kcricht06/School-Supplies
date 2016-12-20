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
      '<li>',
      'item',
      '</li>',
      '<li>',
      'item',
      '</li>',
      '<li>',
      'item',
      '</li>',
      '<li>',
      'item',
      '</li>',
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
    for(var i=0; i<product.length; i++){
      var nwldata = [
        '<div class="new-wishlist-tab col-sm-4">',
          '<div class="panel">',
            '<img class="new-wishlist-tab-img" src="',product[i].imgUrl,'" />',
          '</div>',
        '</div>'
        ].join('');
      $('.new-wishlist-area .row').append(nwldata);
      console.log('nwldata: ',nwldata);
    }
    console.log('product: ',product);
  });
}
