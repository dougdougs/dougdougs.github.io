


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