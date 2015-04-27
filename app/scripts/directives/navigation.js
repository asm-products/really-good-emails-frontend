/*global app*/
/*jshint unused:false*/
'use strict';

/**
 * @ngdoc directive
 * @name reallygoodemails.directive:navigation
 * @element ANY
 * @priority 1000
**/

//## Navigation Directives ########
//================================================
//
angular.module('app.directives.navigation', [])
	.directive('ngMobileClick', [function () {
	  return function (scope, elem, attrs) {
	    elem.bind('touchstart click', function (e) {
	      e.preventDefault();
	      e.stopPropagation();
	      scope.$apply(attrs.ngMobileClick);
	    });
	  };
	}]);
