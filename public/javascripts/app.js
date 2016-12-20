
$(document).ready(function(){
  var searchItem;

  // ajaxRequest(topic);
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
            // keywords: $('#item-search').val()
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


//   function populateContent(response) {
//     var results = response.data.children;
//
//       // Forms the html statement that gets added into the DOM
//       var elements = ['<li class=\"contentItem\">',
//                         '<div class="row">',
//                           '<div class="col-md-1">',
//                             '<h4>' + results[i].data.score + '</h4>',
//                           '</div>',
//                           '<div class="col-md-3">',
//                             '<img class=\"thumbnails\" src=\"' + (brokenImage ? 'images/RedditSnoo.png' : thumbNail) + '\"/>',
//                           '</div>',
//                           '<div class="col-md-8">',
//                             '<h4 class=\"contentTitle\">' + title + '<h4/>',
//                           '</div>',
//                         '</div>',
//                       '</li>'
//                     ].join('');
//       $('#main-content').append(elements);
//     }
//   }//end of populateContent function
// });
