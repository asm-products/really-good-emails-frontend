/*global app*/
/*jshint unused:false*/
'use strict';

/**
 * @ngdoc service
 * @name reallygoodemails.emails
 * @requires $rootScope
**/

angular.module('app.services.emails', [])
	.service('emails', ['$http', function($http){
		var promise = null;
	  return function() {
	    if (promise) {
	      return promise;
	    } else {
	      promise = $http.get('data/emails.json');
	      return promise;
	    }
	  };
  }]);

  