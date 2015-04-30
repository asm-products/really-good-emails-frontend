/*global app*/
/*jshint unused:false*/
'use strict';

/**
 * @ngdoc filter
**/

angular.module('app.filters.general', [])
	.filter('slugify', function(){
	  return function(text) {
	    return text ? text.replace(/[\.,-\/#!$%\^&\*;:{}=\-_`~()]/g,'').replace(/\s+/g, '-').toLowerCase() : '';
	  };
	});

