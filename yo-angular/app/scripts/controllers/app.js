'use strict';

/**
 * @ngdoc function
 * @name yoAngularApp.controller:AppCtrl
 * @description
 * # AppCtrl
 * Controller of the yoAngularApp
 */
angular.module('yoAngularApp')
  .controller('AppCtrl', function ($scope, SoundCloudApiService) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    $scope.ArtworkBig = function (img) {
      var newArtwork;
      if ( img !== null ) {
        newArtwork = img.replace('large', 't500x500');
        return newArtwork;
      } else {
        return img;
      }
    };



    // SOUNDCLOUD API AUTH

     SC.initialize({
        client_id: 'de88362c03434134c6f5fb2796a37603',
        redirect_uri: 'http://localhost:9000/'
      });


     $(document).ready(function() {
       $('a.connect').click(function(e) {
         e.preventDefault();
          SC.connect(function(){
             alert("CONCECETD");
          });
       });
     });




     

  });
