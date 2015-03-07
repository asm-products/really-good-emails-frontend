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
    delay: ['$q','$timeout', function($q, $timeout) {
      var delay = $q.defer();
      $timeout(delay.resolve, 200, false);
      return delay.promise;
    }]
  };

// Routing /////
  app.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/home.html',
        // controller: 'homeCtrl',
        resolve: resolve, // things that need to happen before load
        titleTag: 'Really Good Emails - The Best Email Designs in the Universe (that came into my inbox)',
        metaTitle: 'the meta title',
        metaDesc: 'the meta description'
      })
      .when('/email-details', {
        templateUrl: 'views/email-details.html',
        // controller: 'secondaryCtrl',
        resolve: resolve,
        titleTag: '{{Email Page Title}} | Really Good Emails',
        metaTitle: 'the meta title',
        metaDesc: 'the meta description'
      })
      .when('/inspiration', {
        templateUrl: 'views/inspiration.html',
        // controller: 'secondaryCtrl',
        resolve: resolve,
        titleTag: 'Email Inspiration | Really Good Emails',
        metaTitle: 'the meta title',
        metaDesc: 'the meta description'
      })
      .when('/interviews', {
        templateUrl: 'views/interviews.html',
        // controller: 'secondaryCtrl',
        resolve: resolve,
        titleTag: 'Email Interviews | Really Good Emails',
        metaTitle: 'the meta title',
        metaDesc: 'the meta description'
      })
      .when('/email-kits', {
        templateUrl: 'views/email-kits.html',
        // controller: 'secondaryCtrl',
        resolve: resolve,
        titleTag: 'Email Kits | Really Good Emails',
        metaTitle: 'the meta title',
        metaDesc: 'the meta description'
      })
      .when('/archive', {
        templateUrl: 'views/archive.html',
        // controller: 'secondaryCtrl',
        resolve: resolve,
        titleTag: 'Email Archive | Really Good Emails',
        metaTitle: 'the meta title',
        metaDesc: 'the meta description'
      })
      .when('/faq', {
        templateUrl: 'views/faq.html',
        // controller: 'secondaryCtrl',
        resolve: resolve,
        titleTag: 'FAQ | Really Good Emails',
        metaTitle: 'the meta title',
        metaDesc: 'the meta description'
      })
      .when('/contact', {
        templateUrl: 'views/contact.html',
        // controller: 'secondaryCtrl',
        resolve: resolve,
        titleTag: 'Contact | Really Good Emails',
        metaTitle: 'the meta title',
        metaDesc: 'the meta description'
      })
      .when('/newsletter', {
        templateUrl: 'views/newsletter.html',
        // controller: 'secondaryCtrl',
        resolve: resolve,
        titleTag: 'Email Newsletter | Really Good Emails',
        metaTitle: 'the meta title',
        metaDesc: 'the meta description'
      })
      .when('/404', {
          templateUrl : 'views/error.html',
          //controller : 'errorCtrl',
          resolve: resolve,
          titleTag: 'Ruh Roh! | Really Good Emails',
          metaTitle: 'the meta title',
          metaDesc: 'the meta description'
      })
      .otherwise({
        redirectTo: '/404',
      });
      $locationProvider.html5Mode(true);
  }]);

// Global Meta Injection /////
  app.controller('metaCtrl', ['$scope', function($scope) {
    $scope.appName = 'reallygoodemails';
    $scope.appTitle = 'Really Good Emails';
    $scope.appMetaTitleDefault = '';
    $scope.appURL = 'http://reallygoodemails.com';
    $scope.appCDNurl = '';
  }]);

// Per Page Injection /////
  app.run(['$rootScope', '$window', '$location', function($rootScope, $window, $location) {
    $rootScope.$on('$routeChangeSuccess', function(event, current, previous) {
      $rootScope.controller = current.$$route.controller;
      $rootScope.titleTag = current.$$route.titleTag;
      $rootScope.metaTitle = current.$$route.metaTitle;
      $rootScope.metaDesc = current.$$route.metaDesc;
      // analytics
      if (!$window.ga) {
        return;
      }
      $window.ga('send', 'pageview', { page: $location.path() });
    });
  }]);

})();

