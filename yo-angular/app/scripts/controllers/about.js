'use strict';

/**
 * @ngdoc function
 * @name yoAngularApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the yoAngularApp
 */
angular.module('yoAngularApp')
  .controller('AboutCtrl', function ($scope, SoundCloudApiService) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

	var endpoint = 'activities', 
	params = '?limit=32';

	$scope.title = 'Stream';
	$scope.data = '';


	SoundCloudApiService.get(endpoint, params)
	  .then(
	      	function(data) {
	        	$scope.data = data.collection;
	      	}, 
			function(error) {
				console.log('error', error);
			}
		);
	});
