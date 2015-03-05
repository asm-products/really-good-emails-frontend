/*global $, FastClick*/
/*jshint unused:false*/

//## Config ########
//================================================
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
      $main: $('body').find('> main'),
      $section: $('body').find('> section'),
      $footer: $('body').find('> footer')
  }
};
// >> General >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>


// >> Init >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
//

// -- fastclick ---------------
FastClick.attach(document.body);

