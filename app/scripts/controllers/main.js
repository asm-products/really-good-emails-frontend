/*global jQuery, app*/
/*jshint unused:false*/
/*jshint devel:true*/

/*
 * @ngdoc function
 * @name reallygoodemails.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of reallygoodemails
 */

(function() {
  'use strict';

  var app = angular.module('reallygoodemails');

  app.controller('MainCtrl', function($rootScope, $scope) {

  });

  // inject vars within routes
  app.run(['$rootScope', function($rootScope) {
      $rootScope.$on('$routeChangeSuccess', function (event, current, previous) {
          $rootScope.title = current.$$route.title;
          $rootScope.metaTitle = current.$$route.metaTitle;
          $rootScope.metaDesc = current.$$route.metaDesc;
      });
  }]);


})();
