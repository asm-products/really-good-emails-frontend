/*global jQuery, gbl, app*/
/*jshint unused:false*/
/*jshint devel:true*/
'use strict';

/*
 * @ngdoc function
 * @name reallygoodemails.controller:mainCtrl
 * @description
 * # mainCtrl
 * Main controller of reallygoodemails
 */

(function() {

  var app = angular.module('reallygoodemails');

// Main Ctrl /////
	app.controller('mainCtrl',['$scope', '$rootScope', '$window', '$timeout', function($scope, $rootScope, $window, $timeout){

    // all of this should prob go in a run & possibly in a directive

		// Loading Spinner
		// $scope.loadSpinLoc = true;
		// $scope.loadSpin = function(value) {
		// 	if (value === 'left') {
		// 		$scope.loadSpinLoc = true;
		// 	}
		// 	if (value === 'right') {
		// 		$scope.loadSpinLoc = false;
		// 	}
		// };
		// //
  //   // nav kill on scroll
  //   angular.element($window).on('scroll', function () {
  //     $timeout(function(){
  //       $scope.menuToggle();
  //     }, 10);
  //   });
		// // nav kill on orientation change
		// angular.element($window).on('orientationchange', function () {
  //     $timeout(function() {
  //     	$scope.menuToggle();
  //     });
		// });
		// // nav kill on resize
		// angular.element($window).on('resize', function () {
  //     $timeout(function() {
  //     	if (!angular.element('html').hasClass('mobile')) {
  //     		$scope.menuToggle();
  //     	}
  //     });
		// });

  //   $rootScope.menuToggle = function(event) {
  //     $rootScope.togglePrimaryMenu = false;
  //     $rootScope.toggleSecondaryMenu = false;
  //     event.preventDefault();
  //   };
  //   $rootScope.$on('$routeChangeStart', function (event, next, current, previous) {
  //     if (next && next.$$route) {
  //       $rootScope.toggleLoadCover = false;
  //       $rootScope.toggleLoadVisHid = false;
  //       $rootScope.toggleLoadSpin = true;
  //     }
  //   });
  //   $rootScope.$on('$routeChangeSuccess', function (event, current, previous) {
  //     $timeout(function(){
  //       window.scrollTo(0,0);
  //     }, 300);
  //     $timeout(function(){
  //       $rootScope.toggleLoadCover = true;
  //       $rootScope.toggleLoadSpin = false;
  //     }, 500);
  //     $timeout(function(){
  //       $rootScope.menuToggle();
  //     }, 700);
  //     $timeout(function(){
  //       $rootScope.toggleLoadVisHid = true;
  //     }, 1000);
  //   });

	}]);

})();
