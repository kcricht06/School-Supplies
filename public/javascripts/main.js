
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



//AMAZON API DATA QUERIES:

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
                        '<img class="new-wishlist-tab-img" src= "',image,'"/>',
              '</div>',
        '</div>'
        ].join('');
      $('.new-wishlist-area .row').append(nwldata);
    }
  });
}


//ADD CHOSEN ITEMS TO THE WISHLIST STAGING PANEL

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


///SUBMIT LIST CLICK EVENT

$('#submit-list').on('click',function(){
  var wishList = [];
  var $itemArea = $('.new-wishlist-area-chosen').find('.new-wishlist-container');
  var due = $('#due').val();
  $('#due').val('');
  var wlName = $('#wl-name').val();
  $('#wl-name').val('');
  console.log('itemArea: ',$itemArea);
  $itemArea.each(function(index, container){
    wishList.push({
      itemPrice: $(container).find('.item-price').text(),
      itemName: $(container).find('.item-name').text(),
      itemUrl: $(container).find('.new-wishlist-tab-img').attr('src')
    });
    console.log('wishlist so far: ',wishList);
  });

  $('.new-wishlist-area-chosen .row').empty();
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

//DISPLAY WISHLISTS TO teacher's panel
var teacher_wl_panel = $('#teachers_lists');
if(teacher_wl_panel.length > 0){

  var populate_twlpanel = $.ajax({
      url:'/wishlistapi/teacher-retrieve-wishlists',
      method:'GET'
    });

  populate_twlpanel.done(function(results){
    // results = JSON.parse(results);
    console.log('teacher_wls: ',results);

    console.log('RESULTS: ',results[0]);
    var total = 0;
    for(var i=0;i<results.length;i++){
      var url = JSON.parse(results[i].items);
      url = url[0].itemUrl;
      // var price = JSON.parse(results[i].items);
      // console.log('price array: ',price);

        // for(var i=0; i<price.length; i++){
        //   price = price[i].itemPrice;
        //   if(priceInt) {var priceInt = Number(price.replace(/[^0-9\.]+/g,""));
        //   console.log('price for this is: ',priceInt);
          // total += priceInt;}
        // }

      var name = results[i].name;
      var due = results[i].duedate;
      console.log('current total: ',total);
      var nwldata = [
        '<div class="new-wishlist-tab col-sm-4">',
              '<div class="new-wishlist-container panel">',
                        '<div class="item-details">',
                            '<div class="item-name">',name,'</div>',
                            '<div class="item-price">Due date: ',due,'</div>',
                        '</div>',
                        '<img class="new-wishlist-tab-img" src= "',url,'"/>',
              '</div>',
        '</div>'
        ].join('');
      $('#teachers_lists .row').append(nwldata);
    }
    // console.log('total: ',total);
  });


  populate_twlpanel.fail(function(err){
    console.log('error: ',err);
  });

};


  // CODE FOR POPULATING INDIVIDUAL ITEMS FROM MLAB DATABASE:


  // for(var i=0;i<results.length;i++){
  //   var url = results[i].itemUrl;
  //   var name = results[i].itemName;
  //   var price = results[i].itemPrice;
  //   var nwldata = [
  //     '<div class="new-wishlist-tab col-sm-4">',
  //           '<div class="new-wishlist-container panel">',
  //                     '<div class="item-details">',
  //                         '<div class="item-name">',name,'</div>',
  //                         '<div class="item-price">',price,'</div>',
  //                     '</div>',
  //                     '<img class="new-wishlist-tab-img" src= "',url,'"/>',
  //           '</div>',
  //     '</div>'
  //     ].join('');
  //   $('#teachers_lists .row').append(nwldata);
  // }
