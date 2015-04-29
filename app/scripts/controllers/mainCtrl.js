/*global $, app*/
/*jshint unused:false*/
'use strict';

/**
 * @ngdoc function
 * @name reallygoodemails.controller:mainCtrl
 * @description Main controller of reallygoodemails
**/

(function() {

  var app = angular.module('reallygoodemails');

  // Main Ctrl /////
	app.controller('mainCtrl', ['$rootScope', '$scope', '$window', '$location', '$timeout', 'emails', 'brands', 'collections', function($rootScope, $scope, $window, $location, $timeout, emails, brands, collections) {

    $rootScope.appName = 'reallygoodemails';
    $rootScope.appTitle = 'Really Good Emails';
    $rootScope.appURL = 'http://reallygoodemails.com';
    $rootScope.currentURL = window.location.href;
    $rootScope.imgPath = '/media/images';
    $rootScope.appCDNurl = '//reallygoodemails-cdn.appspot.com';

    // -- Data -------------------------
    // Emails
    emails().success(function(emails) {
      $scope.emails = emails;
      //
      emails.map(function(email) {
        // Build Urls
        var source = email.brand.replace(/[\.,-\/#!$%\^&\*;:{}=\-_`~()]/g,'').replace(/\s+/g, '-').toLowerCase(),
            subject = email.subject.replace(/[\.,-\/#!$%\^&\*;:{}=\-_`~()]/g,'').replace(/\s+/g, '-').toLowerCase(),
            slug = 'emails/'+source+'-'+subject;
        email.slug = slug;
      });
    });
    // Brands
    brands().success(function(brands) {
      $scope.brands = brands;
      $scope.brandCount = $scope.brands.length;
    });
    // Collections
    collections().success(function(collections) {
      $scope.collections = collections;
      $scope.collectionCount = $scope.collections.length;
    });

    $scope.viewCount = 'metrics[0].views';
    $scope.date = 'date';

    $scope.someFunc = function(collection){
      console.log({collection:collection});
    };

    // -- Load (onReady) ---------------
    //
    $rootScope.$on('$routeChangeStart', function (event, next, current, previous) {
      if (next && next.$$route) {
        // "Load Cover" Sequence: Start
        $rootScope.loaderTrash = false;
        $rootScope.loaderSpin = true;
        $rootScope.loader = true;
      }
    });
    $rootScope.$on('$routeChangeSuccess', function(event, current, previous) {
      // Inject Vars
      $rootScope.titleTag = current.$$route.titleTag;
      $rootScope.metaTitle = current.$$route.metaTitle;
      $rootScope.metaDesc = current.$$route.metaDesc;
      // Route Active State
      $scope.page = function(viewLocation) {
        return viewLocation === $location.path();
      };
      // "Load Cover" Sequence: End
      window.scrollTo(0,0);
      $timeout(function(){
        $rootScope.loader = false;
      }, 750);
      $timeout(function(){
        $rootScope.loaderTrash = true;
        $rootScope.loaderSpin = false;
      }, 1000);
      $timeout(function(){
        $rootScope.mobileSideNav = false;
      }, 1050);
      // analytics
      if (!$window.ga) {
        return;
      }
      $window.ga('send', 'pageview', { page: $location.path() });
    });

    // -- Load (LazyLoad) ---------------

    // $scope.data = {};
    // $scope.data.list = [];
    // $scope.range = '12';
    // $scope.startDelay = '1000';
    // $scope.appendDelay = '1000';
    // $scope.spinnerColor = 'rgb(79, 167, 217)';

    // $scope.$watch('spinnerColor', function(newVal){
    //   $scope.spinnerColor = newVal;
    //   console.log('watch', $scope.spinnerColor);
    // });

    // $scope.update = function(newVal){
    //   $scope.spinnerColor = newVal;
    //   $timeout(function(){
    //     $scope.$apply();
    //   },100);
    // };

    // -- Functions ---------------
    //
    // -- Relative Active State Toggle
    $scope.activeToggle = function() {
      $scope.active = !$scope.active;
    };
    // -- Mobile Side Nav
    $rootScope.mobileSideNavToggle = function(event) {
      $rootScope.mobileSideNav = !$rootScope.mobileSideNav;
    };
    $rootScope.mobileSideNavClose = function(event) {
      $rootScope.mobileSideNav = false;
    };
    //
    $rootScope.heightAdjust = function() {
      var $header = angular.element($('header'));
    };

	}]);

})();
