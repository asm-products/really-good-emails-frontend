/*global app*/
/*jshint unused:false*/
'use strict';

/**
 * @ngdoc directive
 * @name reallygoodemails.directive:navbar
 * @restrict A
 * @element ANY
 * @priority 1000
 * # @scope
**/

angular.module('app.directives.navigation', [])
	.directive('menuToggle', ['$rootScope', function($rootScope) {
	  return {
	    restrict: 'A',
	    link: function (scope, element, attrs) {
	    	// code stuff
	    }
	  };
	}]);
