/*global app*/
/*jshint unused:false*/
'use strict';

/**
 * @ngdoc service
 * @name reallygoodemails.emails
 * @requires $rootScope
**/

angular.module('app.services.emailData', [])
	.service('emailData', ['$http', function($http){
		var promise = null;
	  return function() {
	    if (promise) {
	      return promise;
	    } else {
	      promise = $http.get('data/emailData.json');
	      return promise;
	    }
	  };
  }]);

