/*global jQuery, $, gbl, app */
/*jshint unused:false*/

//## Header ########
//================================================
//

// -- Site Nav ------------------------------

/* deprecated 

(function($) { 'use strict';
  var siteNav = gbl.obj.$header.find('.site-nav'),
  		siteNavPrimary = siteNav.find('.site-nav-primary'),
  		siteNavSecondary = siteNav.find('.site-nav-secondary'),
  		primaryMenuLinks = siteNavPrimary.find('nav'),
  		primaryMenuButton = siteNavPrimary.find('.primary-menu-button'),
  		secondaryMenuLinks = siteNavSecondary.find('nav'),
  		secondaryMenuButton = siteNavSecondary.find('.secondary-menu-button');


  var menuToggle = function(active){
  	gbl.obj.$body.toggleClass(active);
  };

  var menuClose = function(active){
  	gbl.obj.$body.removeClass(active);
  };

// -- primary menu toggle
  primaryMenuButton.on('click', function(e) {
  	e.preventDefault();
  	menuToggle('primary-menu-active');
  });

// -- primary nav item toggle
  primaryMenuLinks.on('click', 'ul > li > a', function(e) {
  	if (gbl.obj.$body.is('.mobile')) {
  		menuClose('primary-menu-active');
  	}
  });

// -- secondary menu toggle
  secondaryMenuButton.on('click', function(e) {
  	e.preventDefault();
  	menuToggle('secondary-menu-active');
  });

// -- secondary nav item toggle
  secondaryMenuLinks.on('click', 'ul > li > a', function(e) {
  		menuClose('secondary-menu-active');
  });

// -- menu toggle on resize
  $(window).on('resize orientationchange', $.throttle(250,
      function() {
      	menuClose('primary-menu-active');
        menuClose('secondary-menu-active');
      }));

})(jQuery);

*/
