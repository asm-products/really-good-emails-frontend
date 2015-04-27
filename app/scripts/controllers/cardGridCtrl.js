/*global jQuery, gbl, app*/
/*jshint unused:false*/
/*jshint devel:true*/

/*
 * @ngdoc function
 * @name reallygoodemails.controller:cardGridCtrl
 * @description card grid controller
 */

(function() { 'use strict';

  var app = angular.module('reallygoodemails');
  //
  app.controller('cardGridCtrl',['$scope', '$timeout', '$http', function($scope, $timeout, $http) {

  	// todo: make item data conditional based on a route or key (class) of some sort
  	// make more dynamic, break out into dropdownCtrl.js (directive?)

  	// nav group 1
		$scope.navGroupOneItems = [{'title':'Brands'}, {'title':'Collections'}];
		$scope.navGroupOneTitle = $scope.navGroupOneItems[0].title;
  	$scope.toggleNavGroupOneItem = function() {
  		angular.element('.nav-group-one').find('.first').removeClass();
  		angular.element('.nav-group-two').find('.active').removeClass();
  		angular.element('.nav-group-three').find('.active').removeClass();
  		if ($scope.lastStatus) {
				$scope.lastStatus.status1 = '';
			}
			$scope.navGroupOneTitle = this.item.title;
  		this.status1 = 'active';
  		$scope.lastStatus = this;
  		$timeout(function() {
      	$scope.toggleNavGroupOne = false;
      }, 100);
  	};

  	// nav group 2
		$scope.navGroupTwoItems = [{'title':'My Lists', 'svg':'icon-list'}, {'title':'My Favorites', 'svg':'icon-smiley'}];
		$scope.navGroupTwoTitle = $scope.navGroupTwoItems[0].title;
  	$scope.toggleNavGroupTwoItem = function() {
  		angular.element('.nav-group-two').find('.first').removeClass();
  		angular.element('.nav-group-one').find('.active').removeClass();
  		angular.element('.nav-group-three').find('.active').removeClass();
  		if ($scope.lastStatus) {
				$scope.lastStatus.status2 = '';
			}
			$scope.navGroupTwoTitle = this.item.title;
  		this.status2 = 'active';
  		$scope.lastStatus = this;
  		$timeout(function() {
      	$scope.toggleNavGroupTwo = false;
      }, 100);
  	};

  	// nav group 3
  	$scope.navGroupThreeItems = [{'title':'Trending'}, {'title':'New'}, {'title':'Popular'}];
		$scope.navGroupThreeTitle = $scope.navGroupThreeItems[0].title;
  	$scope.toggleNavGroupThreeItem = function() {
  		angular.element('.nav-group-three').find('.first').removeClass();
  		angular.element('.nav-group-one').find('.active').removeClass();
  		angular.element('.nav-group-two').find('.active').removeClass();
  		if ($scope.lastStatus) {
				$scope.lastStatus.status3 = '';
			}
			$scope.navGroupThreeTitle = this.item.title;
  		this.status3 = 'active';
  		$scope.lastStatus = this;
  		$timeout(function() {
      	$scope.toggleNavGroupThree = false;
      }, 100);
  	};

    $http.get('data/emails.json').success(function(data) {
      $scope.emails = data;
    });
    $scope.orderProp = 'age';

  }]);
})();
