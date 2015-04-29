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
  }])
  .service('brands', ['$http', function($http){
		var promise = null;
	  return function() {
	    if (promise) {
	      return promise;
	    } else {
	      promise = $http.get('data/brands.json');
	      return promise;
	    }
	  };
  }])
  .service('collections', ['$http', function($http){
		var promise = null;
	  return function() {
	    if (promise) {
	      return promise;
	    } else {
	      promise = $http.get('data/collections.json');
	      return promise;
	    }
	  };
  }]);

