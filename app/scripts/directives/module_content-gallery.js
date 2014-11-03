/* global $, jQuery, app, Modernizr */
/*jshint unused:false*/

//## Content Gallery (Module) ########
//========================================================================================================================

(function($) {
    'use strict';

    var $gallery = app.obj.$body.find('.content-gallery');

    // -- Carousel ------------------------------
    var galleryCarousel = function() {
        $gallery.owlCarousel({
            autoPlay: 3000,
            slideSpeed: 300,
            pagigation: false,
            paginationSpeed: 400,
            navigation: true,
            navigationText: ['', ''],
            itemsScaleUp: true,
            itemsDesktop: [1024, 3],
            itemsTablet: [600, 2],
            itemsMobile: [400, 1]
        });
    };

    // -- Assets ---------------------------------
    Modernizr.load([{
        load: [
            'js/async/libs/owl.carousel.js'
        ],
        complete: function() {
            galleryCarousel();
        }
    }]);

})(jQuery);
