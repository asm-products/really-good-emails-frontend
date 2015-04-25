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
	app.controller('mainCtrl', ['$rootScope', '$scope', '$window', '$location', '$timeout', function($rootScope, $scope, $window, $location, $timeout) {

    $rootScope.appName = 'reallygoodemails';
    $rootScope.appTitle = 'Really Good Emails';
    $rootScope.appURL = 'http://reallygoodemails.com';
    $rootScope.currentURL = window.location.href;
    $rootScope.imgPath = '/media/images';
    $rootScope.appCDNurl = '//reallygoodemails-cdn.appspot.com';

    // -- Load (onReady) ---------------
    $rootScope.$on('$routeChangeStart', function (event, next, current, previous) {
      if (next && next.$$route) {
        // "Load Cover" Sequence: Start
        $rootScope.loaderTrash = false;
        $rootScope.loaderSpin = true;
        $rootScope.loader = true;
      }
    });
    $rootScope.$on('$routeChangeSuccess', function(event, current, previous) {
      // inject vars
      $rootScope.titleTag = current.$$route.titleTag;
      $rootScope.metaTitle = current.$$route.metaTitle;
      $rootScope.metaDesc = current.$$route.metaDesc;
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
    // -- Events ---------------
    //
    // -- Menu Toggle
    $rootScope.mobileSideNavClose = function(event) {
      $rootScope.mobileSideNav = false;
      // $rootScope.toggleSecondaryMenu = false;  // cleanup later
      // if (typeof event !== 'undefined') {
      //   var $this = angular.element(event.target);
      //   if (!$this.is('a')) {
      //     event.preventDefault();
      //     console.log('is not a!');
      //   }
      // }
    };

    $rootScope.heightAdjust = function() {
      var $header = angular.element($('header'));
      console.log($header);
    };

	}]);

})();
