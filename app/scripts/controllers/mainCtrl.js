/*global jQuery, gbl, app*/
/*jshint unused:false*/
/*jshint devel:true*/

'use strict';
/*
 * @ngdoc function
 * @name reallygoodemails.controller:mainCtrl
 * @description
 * # mainCtrl
 * Controller of reallygoodemails
 */

(function() {

  var app = angular.module('reallygoodemails');

// Root Level Page Load / Nav logic /////
	app.run(['$rootScope', '$timeout', function($rootScope, $timeout) {
    $rootScope.menuToggle = function() {
      $rootScope.togglePrimaryMenu = false;
      $rootScope.toggleSecondaryMenu = false;
    };
    $rootScope.$on('$routeChangeStart', function (event, next, current, previous) {
      if (next && next.$$route) {
        $rootScope.toggleLoadCover = false;
        $rootScope.toggleLoadVisHid = false;
        $rootScope.toggleLoadSpin = true;
      }
    });
    $rootScope.$on('$routeChangeSuccess', function (event, current, previous) {
      $timeout(function(){
        window.scrollTo(0,0);
      }, 300);
      $timeout(function(){
        $rootScope.toggleLoadCover = true;
        $rootScope.toggleLoadSpin = false;
      }, 500);
      $timeout(function(){
        $rootScope.menuToggle();
      }, 700);
      $timeout(function(){
        $rootScope.toggleLoadVisHid = true;
      }, 1000);
    });
  }]);

// Main Ctrl /////
	app.controller('mainCtrl',['$scope', '$rootScope', '$window', '$timeout', function($scope, $rootScope, $window, $timeout){

		// Loading Spinner
		$scope.loadSpinLoc = true;
		$scope.loadSpin = function(value) {
			if (value === 'left') {
				$scope.loadSpinLoc = true;
			}
			if (value === 'right') {
				$scope.loadSpinLoc = false;
			}
		};

		// make below a separate directive
		//
    // nav kill on scroll
    angular.element($window).on('scroll', function () {
      $timeout(function(){
        $scope.menuToggle();
      }, 10);
    });
		// nav kill on orientation change
		angular.element($window).on('orientationchange', function () {
      $timeout(function() {
      	$scope.menuToggle();
      });
		});
		// nav kill on resize
		angular.element($window).on('resize', function () {
      $timeout(function() {
      	if (!angular.element('html').hasClass('mobile')) {
      		$scope.menuToggle();
      	}
      });
		});

	}]);



})();
