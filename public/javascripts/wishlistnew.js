$(document).ready(function(){
  var searchItem;

  $('#btn-search').on('click', function(e){
    e.preventDefault();
    searchItem = $('#item-search').val();
    console.log(searchItem);
    ajaxRequest(searchItem)
  });

  function ajaxRequest(searchItem) {
      var itemRequest = $.ajax({
        url: 'wishlist-api',
        method: 'POST',
        data: {
            keywords: searchItem
        }
  });
  itemRequest.done(function(response){
        console.log(response);
        console.log('Label: ', response[0].ItemAttributes[0].Label[0]);
        console.log('Price: ', response[0].ItemAttributes[0].ListPrice[0].FormattedPrice[0]);
        console.log('ImageURL: ', response[0].MediumImage[0].URL[0]);
   });
  }
});
