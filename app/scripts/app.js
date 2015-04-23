/*global $, FastClick, app*/
/*jshint unused:false*/
/*jshint devel:true*/
'use strict';

/*
 * @ngdoc overview
 * @name reallygoodemails
 * @description
 * # reallygoodemails
 * Main module of reallygoodemails.
 */

// >> Global Vars >>>>>>>>>>>>>>>
var gbl = {
  path: {
    url: window.location.protocol+'//'+window.location.host,
    currentUrl: window.location.href,
    img: '/media/images',
    cdn: '//cdnurl.com/something'
  },
  obj: {
    $html: $('html'),
    $body: $('body'),
    $header: $('body').find('> header'),
    $container: $('body').find('> .container'),
    $core: $('body > .container').find('> .core'),
    $footer: $('body').find('> footer')
  }
};

//## Config ########
//================================================
(function() {

// >> App Config >>>>>>>>>>>>>>>
var app = angular
          .module('reallygoodemails', [
            'ngCookies', 'ngResource', 'ngRoute', 'ngSanitize', // services / dependencies / directives
          ])
          .run(['$templateCache', '$http', function($templateCache, $http) {
            $http.get('partials/header.html', {cache:$templateCache});
            $http.get('partials/footer.html', {cache:$templateCache});
          }]);

// >> Init >>>>>>>>>>>>>>>
app.run(function($rootScope) { // onready
  // -- FastClick -----------
  // FastClick.attach(document.body); // may not be needed
});

// >> General Functions >>>>>>>>>>>>>>>
app.factory('db', function() {
  var items = [];

  var modify = {};
  modify.addItem = function(item) {
    items.push(item);
    return 'added item';
  };
  modify.getItems = function() {
    return items;
  };
  return modify;
});

// function MainCtrl = function ($scope, db) {  // for controller
//   $scope.save = function() {
//     db.addItem('hello');
//     console.log( db.getItems() );
//   };
// }

// optimization stuff
// https://github.com/ericclemmons/grunt-angular-templates
// bindonce - https://github.com/Pasvaz/bindonce


// >> Routing >>>>>>>>>>>>>>>
  var resolve = {
    // delay: ['$q','$timeout', function($q, $timeout) {
    //   var delay = $q.defer();
    //   $timeout(delay.resolve, 200, false);
    //   return delay.promise;
    // }]
  };
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
        resolve: resolve,
        titleTag: 'Email Inspiration | Really Good Emails',
        metaTitle: 'the meta title',
        metaDesc: 'the meta description'
      })
      .when('/interviews', {
        templateUrl: 'views/interviews.html',
        resolve: resolve,
        titleTag: 'Email Interviews | Really Good Emails',
        metaTitle: 'the meta title',
        metaDesc: 'the meta description'
      })
      .when('/email-kits', {
        templateUrl: 'views/email-kits.html',
        resolve: resolve,
        titleTag: 'Email Kits | Really Good Emails',
        metaTitle: 'the meta title',
        metaDesc: 'the meta description'
      })
      .when('/archive', {
        templateUrl: 'views/archive.html',
        resolve: resolve,
        titleTag: 'Email Archive | Really Good Emails',
        metaTitle: 'the meta title',
        metaDesc: 'the meta description'
      })
      .when('/faq', {
        templateUrl: 'views/faq.html',
        resolve: resolve,
        titleTag: 'FAQ | Really Good Emails',
        metaTitle: 'the meta title',
        metaDesc: 'the meta description'
      })
      .when('/contact', {
        templateUrl: 'views/contact.html',
        resolve: resolve,
        titleTag: 'Contact | Really Good Emails',
        metaTitle: 'the meta title',
        metaDesc: 'the meta description'
      })
      .when('/newsletter', {
        templateUrl: 'views/newsletter.html',
        resolve: resolve,
        titleTag: 'Email Newsletter | Really Good Emails',
        metaTitle: 'the meta title',
        metaDesc: 'the meta description'
      })
      .when('/test', {
        templateUrl: 'views/test.html',
        resolve: resolve,
        titleTag: 'test | Really Good Emails',
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

// >> Global Meta Injection >>>>>>>>>>>>>>>
  app.controller('metaCtrl', ['$scope', function($scope) {
    $scope.appName = 'reallygoodemails';
    $scope.appTitle = 'Really Good Emails';
    $scope.appMetaTitleDefault = '';
    $scope.appURL = 'http://reallygoodemails.com';
    $scope.appCDNurl = '';
  }]);

// >> Per Page Injection >>>>>>>>>>>>>>>
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
