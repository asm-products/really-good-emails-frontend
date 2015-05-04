/*global app*/
/*jshint unused:false*/
'use strict';

/**
 * @ngdoc directive
 * @name reallygoodemails.directive:avatar
 * @element ANY
 * @priority 1000
**/

//## Avatar ########
//================================================
//
angular.module('app.directives.avatar', [])
	.directive('avatar', [function () {
	  return {
			restrict: 'E',
			link: function(scope, element, attrs) {
				// code
			},
			transclude: true,
			replace: true,
			templateUrl: function(elem,attrs) {
				return attrs.templateUrl || 'partials/avatar.html';
			}
	  };
	}]);