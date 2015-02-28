/*global jQuery, gbl, app*/
/*jshint unused:false*/
/*jshint devel:true*/

/*
 * @ngdoc function
 * @name reallygoodemails.controller:mainCtrl
 * @description
 * # mainCtrl
 * Controller of reallygoodemails
 */

(function() { 'use strict';

  var app = angular.module('reallygoodemails');
  //
	app.controller('mainCtrl',['$scope','$window', '$timeout', function($scope, $window, $timeout){
		// nav toggle
		$scope.togglePrimaryMenu = false;
		$scope.toggleSecondaryMenu = false;
		$scope.menuToggle = function() {
	    $scope.togglePrimaryMenu = false;
	    $scope.toggleSecondaryMenu = false;
		};
		// nav kill on resize
		angular.element($window).on('resize', function () {
      $timeout(function() {
      	$scope.menuToggle();
      });
		});

	}]);

})();
