


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

function getPosition(){
  // Verifica se o browser do usuario tem suporte a geolocation
  if ( navigator.geolocation ){
    navigator.geolocation.getCurrentPosition( 
 
    // sucesso! 
    function( posicao ){
      console.log( posicao.coords.latitude, posicao.coords.longitude );
    },
 
    // erro :( 
    function ( erro ){
      var erroDescricao = 'Ops, ';
      switch( erro.code ) {
        case erro.PERMISSION_DENIED:
          erroDescricao += 'usuário não autorizou a Geolocation.';
        break;
        case erro.POSITION_UNAVAILABLE:
          erroDescricao += 'localização indisponível.';
        break;
        case erro.TIMEOUT:
          erroDescricao += 'tempo expirado.';
        break;
        case erro.UNKNOWN_ERROR:
         erroDescricao += 'não sei o que foi, mas deu erro!';
        break;
      }
      console.log( erroDescricao )
    }
   );
  }
}
 
$( document ).ready( function(){
  getPosition();
} );