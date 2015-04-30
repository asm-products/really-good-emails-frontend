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
	app.controller('mainCtrl', [
    '$rootScope', '$scope', '$window', '$location', '$timeout', '$filter', 'emailData',
    function($rootScope, $scope, $window, $location, $timeout, $filter, emailData) {

    $rootScope.appName = 'reallygoodemails';
    $rootScope.appTitle = 'Really Good Emails';
    $rootScope.appURL = 'http://reallygoodemails.com';
    $rootScope.currentURL = window.location.href;
    $rootScope.imgPath = '/media/images';
    $rootScope.appCDNurl = '//reallygoodemails-cdn.appspot.com';

    // -- Data -------------------------
    // Email Data
    emailData().success(function(data) {
      $scope.emails = data.emails;
      $scope.brands = data.brands;
      $scope.collections = data.collections;
      $scope.brandCount = $scope.brands.length;
      $scope.collectionCount = $scope.collections.length;
      //
      data.emails.map(function(email) {
        // Build email slugs
        var source = $filter('slugify')(email.brandName),
            subject = $filter('slugify')(email.subject),
            slug = 'emails/'+source+'-'+subject+'?id='+email.id;
        email.slug = slug;
      });
    });

    $scope.getID = function() {
      // $timeout(function(){
        return $location.search().id;
      // }, 500);
    };

    $scope.viewCount = 'metrics[0].views';
    $scope.postCount = 'metrics[0].posts';

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
      // Theme Checker
      var themeCheck = function() {
        if ($location.path().indexOf('/emails/') >= 0) {
          angular.element('.container > .theme-slate').removeClass('theme-slate');
          $rootScope.theme = false;
        } else {
          $rootScope.theme = true;
        }
      };
      // "Load Cover" Sequence: End
      window.scrollTo(0,0);
      $timeout(function(){
        $rootScope.loader = false;
        themeCheck();
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
