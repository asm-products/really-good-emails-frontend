/*global jQuery, gbl, app*/
/*jshint unused:false*/
/*jshint devel:true*/

/*
 * @ngdoc overview
 * @name reallygoodemails
 * @description
 * # reallygoodemails
 *
 * Main module of the application.
 */

(function() { 'use strict';

  var app = angular.module('reallygoodemails', ['ngAnimate', 'ngCookies', 'ngResource', 'ngRoute', 'ngSanitize', 'ngTouch']); // services / dependecies

  var resolve = {
    delay: function($q, $timeout) {
      var delay = $q.defer();
      $timeout(delay.resolve, 200, false);
      return delay.promise;
    }
  };

// Routing /////
  app.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/home.html',
        controller: 'homeCtrl',
        // resolve: { // things that need to happen before the page can load
        // },
        resolve: resolve,
        titleTag: 'Really Good Emails - The Best Email Designs in the Universe (that came into my inbox)',
        metaTitle: 'the meta title',
        metaDesc: 'the meta description'
      })
      .when('/inspiration', {
        templateUrl: 'views/inspiration.html',
        // controller: 'secondaryCtrl',
        resolve: resolve,
        titleTag: 'Really Good Emails - Inspiration',
        metaTitle: 'the meta title',
        metaDesc: 'the meta description'
      })
      .when('/interviews', {
        templateUrl: 'views/interviews.html',
        // controller: 'secondaryCtrl',
        resolve: resolve,
        titleTag: 'Really Good Emails - Interviews',
        metaTitle: 'the meta title',
        metaDesc: 'the meta description'
      })
      .when('/email-kits', {
        templateUrl: 'views/email-kits.html',
        // controller: 'secondaryCtrl',
        resolve: resolve,
        titleTag: 'Really Good Emails - Email - Kits',
        metaTitle: 'the meta title',
        metaDesc: 'the meta description'
      })
      .otherwise({
        redirectTo: '/',
        titleTag: 'Really Good Emails',
        resolve: resolve,
        metaTitle: '',
        metaDesc: ''
      });
      $locationProvider.html5Mode(true);
  }]);

// Global Meta /////
  app.controller('metaCtrl', ['$scope', function($scope) {
    $scope.appName = 'reallygoodemails';
    $scope.appTitle = 'Really Good Emails';
    $scope.appMetaTitleDefault = '';
    $scope.appURL = 'http://reallygoodemails.com';
    $scope.appCDNurl = '';
  }]);

  app.run(['$rootScope', '$timeout', function($rootScope, $timeout) {
    $rootScope.$on('$routeChangeStart', function (event, next, current, previous) {
      if (next && next.$$route) {
        $rootScope.toggleLoadMain = false;
        $rootScope.toggleLoadSpin = true;
      }
    });
    $rootScope.$on('$routeChangeSuccess', function (event, current, previous) {
      $timeout(function(){
        // $rootScope.toggleLoadMain = true;
        // $rootScope.toggleLoadSpin = false;
      }, 500);
      $rootScope.titleTag = current.$$route.titleTag;
      $rootScope.metaTitle = current.$$route.metaTitle;
      $rootScope.metaDesc = current.$$route.metaDesc;
    });
  }]);

})();

