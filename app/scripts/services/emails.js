/*global app*/
/*jshint unused:false*/
'use strict';

/**
 * @ngdoc service
 * @name reallygoodemails.emails
 * @requires $rootScope
**/

angular.module('app.services.emails', [])
	.service('dataService', ['$q', '$timeout', function($q, $timeout){
//     var getList = function(){
//       var deferred = $q.defer();
//       var n = 0;
//       var string = '';
//       $timeout(function(){
//         var list = [];
//         // ^^ this is going to be where the data is piped in ... prob need to parse it via some kind of json feed
//         while (n < 9001) {
//           string =  'This is a list item and its ID is ' + n;
//           list.push(string);
//           n++;
//         }
//         string =  'It\'s over 9000';
//         list.push(string);
//         var returnList = {};
//         returnList.data = {};
//         returnList.data.list = list;
//         deferred.resolve(returnList);
//       }, 3000);

//       return deferred.promise;
//     };
//     return { getList : getList };
  }]);