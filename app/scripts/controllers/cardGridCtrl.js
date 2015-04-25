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
  app.controller('cardGridCtrl',['$scope', '$timeout', function($scope, $timeout) {

  	// todo: make item data conditional based on a route or key (class) of some sort
  	// to do - this is an unoptimal piece of crap at the moment, but it will do for now
  	// make more dynamic, break out into dropdownCtrl.js

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

	  $scope.gridCards = [{
			'title':'Company Name', 'url':'#', 'img':'https://reallygoodemails-cdn.appspot.com/media/images/emails/designmodo-phablets_041715_thumb.jpg', 'tag1':'sometag', 'tag2':'anothertag', 'tag3':'onemoretag'
		}, {
		  'title':'Company Name', 'url':'#', 'img':'https://reallygoodemails-cdn.appspot.com/media/images/emails/marvel-enterprise_041615_thumb.jpg?=1234', 'tag1':'sometag', 'tag2':'anothertag', 'tag3':'onemoretag'
		}, {
		  'title':'Company Name', 'url':'#', 'img':'https://reallygoodemails-cdn.appspot.com/media/images/emails/trello-welcome_041215_thumb.jpg?=1234', 'tag1':'sometag', 'tag2':'anothertag', 'tag3':'onemoretag'
		}, {
		  'title':'Company Name', 'url':'#', 'img':'https://reallygoodemails-cdn.appspot.com/media/images/emails/jakprints-48-pages_041615_thumb.jpg?=1234', 'tag1':'sometag', 'tag2':'anothertag', 'tag3':'onemoretag'
		}, {
		  'title':'Company Name', 'url':'#', 'img':'https://reallygoodemails-cdn.appspot.com/media/images/emails/designmodo-phablets_041715_thumb.jpg', 'tag1':'sometag', 'tag2':'anothertag', 'tag3':'onemoretag'
		}, {
		  'title':'Company Name', 'url':'#', 'img':'https://reallygoodemails-cdn.appspot.com/media/images/emails/marvel-enterprise_041615_thumb.jpg?=1234', 'tag1':'sometag', 'tag2':'anothertag', 'tag3':'onemoretag'
		}, {
		  'title':'Company Name', 'url':'#', 'img':'https://reallygoodemails-cdn.appspot.com/media/images/emails/trello-welcome_041215_thumb.jpg?=1234', 'tag1':'sometag', 'tag2':'anothertag', 'tag3':'onemoretag'
		}, {
		  'title':'Company Name', 'url':'#', 'img':'https://reallygoodemails-cdn.appspot.com/media/images/emails/jakprints-48-pages_041615_thumb.jpg?=1234', 'tag1':'sometag', 'tag2':'anothertag', 'tag3':'onemoretag'
		}, {
		  'title':'Company Name', 'url':'#', 'img':'https://reallygoodemails-cdn.appspot.com/media/images/emails/designmodo-phablets_041715_thumb.jpg', 'tag1':'sometag', 'tag2':'anothertag', 'tag3':'onemoretag'
		}, {
		  'title':'Company Name', 'url':'#', 'img':'https://reallygoodemails-cdn.appspot.com/media/images/emails/marvel-enterprise_041615_thumb.jpg?=1234', 'tag1':'sometag', 'tag2':'anothertag', 'tag3':'onemoretag'
		}, {
		  'title':'Company Name', 'url':'#', 'img':'https://reallygoodemails-cdn.appspot.com/media/images/emails/trello-welcome_041215_thumb.jpg?=1234', 'tag1':'sometag', 'tag2':'anothertag', 'tag3':'onemoretag'
		}, {
		  'title':'Company Name', 'url':'#', 'img':'https://reallygoodemails-cdn.appspot.com/media/images/emails/jakprints-48-pages_041615_thumb.jpg?=1234', 'tag1':'sometag', 'tag2':'anothertag', 'tag3':'onemoretag'
		}];

  }]);
})();
