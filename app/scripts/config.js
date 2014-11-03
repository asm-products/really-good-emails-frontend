/*global jQuery, app:true, $, FastClick*/
/*jshint unused:false*/
/*jshint multistr:true */

//## Config ########
//================================================
app = {
  path: {
    url: window.location.protocol+'//'+window.location.host,
    currentUrl: window.location.href,
    img: '/media/images',
    cdn: '//cdnurl.com/something'
  },
  obj: {
      $html: $('html'),
      $body: $('body'),
      $header: $('header'),
      $main: $('main'),
      $section: $('section'),
      $footer: $('footer')
  }
};
// >> General >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>


// >> Init >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
//

// -- fastclick ---------------
FastClick.attach(document.body);
