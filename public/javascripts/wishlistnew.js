var items = $.ajax({
  url : "/teachers/wishlist-api",
  method: "GET",
  data: {
    keywords: $('#item-search').val()
  }
});
items.done(function(res){
  console.log(res);
});
