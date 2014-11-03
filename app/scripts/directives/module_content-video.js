/* global jQuery, app, Modernizr */
/*jshint unused:false*/

//## Content Video (Module) ########
//========================================================================================================================

(function($) {
    'use strict';

    // -- Flash Video Fallback ------------------------------
    var contentVideo = function() {

    };

    // -- Assets ---------------------------------
    Modernizr.load([{
        test: Modernizr.canvas,
        nope: 'js/async/libs/swfobject.js',
        complete: function() {
            if (app.obj.$html.hasClass('no-canvas')) {
                contentVideo();
            }
        }
    }]);

})(jQuery);
