


//  $(function() {
//     $('a.switch').on('click', function(e) {
//         e.preventDefault();

//         $('.nav').width();
//         var body = $('body');
//         if(body.hasClass('offcanvas')) {
//             var offset = -parseInt(body.css('top'));
//             body.removeClass('offcanvas').css('top', 0).scrollTop(offset);
//         } else {
//             body.css('top', -window.pageYOffset+'px').addClass('offcanvas');
//         }
//     });
// });

$('a.switch').click(function(){
  $('body').toggleClass('offcanvas');
  $('.nav li').toggleClass('animated bounceInRight ')
});


var element = document.getElementById('test_el');
    var hammertime = Hammer(element).on("swiperight", function(event) {
        $('body').addClass('offcanvas');
        $('.nav li').addClass('animated bounceInRight ')
    });

var element = document.getElementById('offcanvas-menu');
    var hammertime = Hammer(element).on("swipeleft", function(event) {
        $('body').removeClass('offcanvas');
        $('.nav li').removeClass('animated bounceInRight ')
    });



// GEOLOCATION

function displayLocation(latitude,longitude){
        var request = new XMLHttpRequest();
        var geoloc = document.getElementById("geoloc");
        var method = 'GET';
        var url = 'http://maps.googleapis.com/maps/api/geocode/json?latlng='+latitude+','+longitude+'&sensor=true';
        var async = true;

        request.open(method, url, async);
        request.onreadystatechange = function(){
          if(request.readyState == 4 && request.status == 200){
            var data = JSON.parse(request.responseText);
            var address = data.results[3];
            geoloc.innerHTML=" "+address.formatted_address+ " ";
          }
        };
        request.send();
      };

      var successCallback = function(position){
        var x = position.coords.latitude;
        var y = position.coords.longitude;
        displayLocation(x,y);
      };

      var errorCallback = function(error){
        var errorMessage = 'Unknown error';
        switch(error.code) {
          case 1:
            errorMessage = 'Permission denied';
            break;
          case 2:
            errorMessage = 'Position unavailable';
            break;
          case 3:
            errorMessage = 'Timeout';
            break;
        }
        document.write(errorMessage);
      };

      var options = {
        enableHighAccuracy: true,
        timeout: 10000,
        maximumAge: 0
      };

      navigator.geolocation.getCurrentPosition(successCallback,errorCallback,options);





