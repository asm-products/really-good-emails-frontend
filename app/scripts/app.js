/*global $, FastClick, app*/
/*jshint unused:false*/
/*jshint devel:true*/
'use strict';

/**
 * @ngdoc overview
 * @name reallygoodemails
 * @description Main module of reallygoodemails
**/

(function() {
// >> App Config >>>>>>>>>>>>>>>
// 
var app = angular
          .module('reallygoodemails', [
            'ngCookies', 'ngResource', 'ngRoute', 'ngSanitize', 'ngTouch', // services / dependencies / directives
            'ui.utils',
            'headroom',
            'app.services.emailData',
            'app.filters.general',
            'app.directives.general'
          ])
          .run(['$templateCache', '$http', function($templateCache, $http) { // onReady
            $http.get('partials/header.html', {cache:$templateCache});
            $http.get('partials/footer.html', {cache:$templateCache});
          }]);

// >> Init >>>>>>>>>>>>>>>
//
app.run(function() { // onready
  // stuff
});

// >> Routing >>>>>>>>>>>>>>>
//
  var resolve = {
    // timeout for load cover
    delay: ['$q','$timeout', function($q, $timeout) {
      var delay = $q.defer();
      $timeout(delay.resolve, 400, false);
      return delay.promise;
    }]
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
      .when('/emails/:page', {
        templateUrl: 'views/email-detail.html',
        resolve: resolve,
        titleTag: '',
        metaTitle: '',
        metaDesc: ''
      })
      .when('/collections/:page', {
        templateUrl: 'views/collections.html',
        resolve: resolve,
        titleTag: '',
        metaTitle: '',
        metaDesc: ''
      })
      .when('/brands/:page', {
        templateUrl: 'views/brands.html',
        resolve: resolve,
        titleTag: '',
        metaTitle: '',
        metaDesc: ''
      })
      .when('/tags/:page', {
        templateUrl: 'views/tags.html',
        resolve: resolve,
        titleTag: '',
        metaTitle: '',
        metaDesc: ''
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

// >> Global Functions (onReady) >>>>>>>>>>>>>>>
//
  app.run(['$rootScope', '$window', '$timeout', function($rootScope, $window, $timeout) {
  // -- Scroll
    angular.element($window).on('scroll', function() {
      // $timeout(function(){
        // something here later
      // }, 250);
    });
  // -- Responsive
    angular.element($window).on('orientationchange', function () {
      // nav kill on orientation change
      $timeout(function() {
        $rootScope.mobileSideNavClose();
      });
    });
    angular.element($window).on('resize', function () {
      // nav kill on resize
      $timeout(function() {
        if (!angular.element('html').hasClass('mobile')) {
          $rootScope.mobileSideNavClose();
        }
      });
    });
  }]);

})();
