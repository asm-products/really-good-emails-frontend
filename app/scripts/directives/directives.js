/*global app*/
/*jshint unused:false*/
'use strict';

/**
 * @ngdoc directive
 * @name reallygoodemails.directive:main
 * @element ANY
 * @priority 1000
**/

//## Main Directives ########
//================================================
//
angular.module('app.directives.general', [])
	.directive('ngHeight100', ['$window', function($window) {
	  return function (scope, elem, attrs) {
	  	var _window = angular.element($window);
      //
      var changeHeight = function() {
      	elem.css('height', (_window.height()+75)+'px');
      };
      _window.on('resize', function () {
      	changeHeight();
      });
      _window.on('orientationchange', function () {
      	changeHeight();
      });
      changeHeight();
		};
	}]);

	// .directive('menuToggle', ['$rootScope', function($rootScope) {
	//   return {
	//     restrict: 'A',
	//     link: function (scope, element, attrs) {
	//     	// code stuff
	//     }
	//   };
	// }])