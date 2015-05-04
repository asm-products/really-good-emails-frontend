/*global app*/
/*jshint unused:false*/
'use strict';

/**
 * @ngdoc directive
 * @name reallygoodemails.directive:notification
 * @element ANY
 * @priority 1000
**/

//## Notification ########
//================================================
//
angular.module('app.directives.notification', [])
	.directive('notification', [function () {
	  return {
			restrict: 'E',
			link: function(scope, element, attrs) {
				// code
			},
			transclude: true,
			replace: true,
			templateUrl: function(elem,attrs) {
				return attrs.templateUrl || 'partials/notification.html';
			}
	  };
	}]);