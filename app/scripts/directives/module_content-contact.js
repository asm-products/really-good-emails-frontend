/* global jQuery, app */
/*jshint unused:false*/

//## Content Contact (Module) ########
//=======================================================================

(function($) {
    'use strict';

    var $contact = app.obj.$body.find('.content-contact'),
        $contactType = $contact.find('input:text[name="contact-type"]');

    // responsive
    app.obj.$body.on('vmin_1024_true', function() {
        $contactType.attr('placeholder', 'Your Email or Phone');
    }).on('vmin_1024_false', function() {
        $contactType.attr('placeholder', 'Your Email');
    });

    // load
    if (app.obj.$body.is('.vmin_1024')) {
        $contactType.attr('placeholder', 'Your Email or Phone');
    }

})(jQuery);
