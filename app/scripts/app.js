/*global jQuery, app*/
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

(function() {
  'use strict';

  var app = angular.module('reallygoodemails', ['ngAnimate', 'ngCookies', 'ngResource', 'ngRoute', 'ngSanitize', 'ngTouch']);

  // global meta
  app.controller('metaCtrl', function($rootScope, $scope) {
    $scope.appName = 'reallygoodemails';
    $scope.appTitle = 'Really Good Emails';
    $scope.appMetaTitleDefault = '';
    $scope.appURL = 'http://reallygoodemails.com';
    $scope.appCDNurl = '';
  });

  // Routing
  app.config(function($routeProvider, $locationProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        title: 'Really Good Emails - The Best Email Designs in the Universe (that came into my inbox)',
        metaTitle: 'the meta title',
        metaDesc: 'the meta description'
      })
      .when('/archive', {
        templateUrl: 'views/archive.html',
        controller: 'archiveCtrl',
        title: 'Really Good Emails - Archive'
      })
      .when('/contact', {
        templateUrl: 'views/contact.html',
        controller: 'AboutCtrl',
        title: 'Really Good Emails - Contact'
      })
      .when('/subscribe', {
        templateUrl: 'views/subscribe.html',
        controller: 'AboutCtrl',
        title: 'Really Good Emails - Subscribe'
      })
      .otherwise({
        redirectTo: '/',
      });
      $locationProvider.html5Mode(true);
  });

})();
