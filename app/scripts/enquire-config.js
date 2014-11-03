/* global jQuery, app, enquire */

//## Enquire Config ########
//================================================
(function($) {
	'use strict';
	$.mq320 = 'screen and (min-width: 320px)';
	$.mq480 = 'screen and (min-width: 480px)';
	$.mq600 = 'screen and (min-width: 600px)';
	$.mq768 = 'screen and (min-width: 768px)';
	$.mq1024 = 'screen and (min-width: 1024px)';

// -- 320
	$.vmin320 = {
		match: function(){
			app.obj.$body.addClass('vmin320');
			app.obj.$body.trigger('vmin_320_true');
		},
		unmatch: function(){
			app.obj.$body.removeClass('vmin320');
			app.obj.$body.trigger('vmin_320_false');
		}
	};
// -- 480
	$.vmin480 = {
		match: function(){
			app.obj.$body.addClass('vmin480');
			app.obj.$body.trigger('vmin_480_true');
		},
		unmatch: function(){
			app.obj.$body.removeClass('vmin480');
			app.obj.$body.trigger('vmin_480_false');
		}
	};
// -- 600
	$.vmin600 = {
		match: function(){
			app.obj.$body.addClass('vmin600');
			app.obj.$body.trigger('vmin_600_true');
		},
		unmatch: function(){
			app.obj.$body.removeClass('vmin600');
			app.obj.$body.trigger('vmin_600_false');
		}
	};
// -- 768
	$.vmin768 = {
		match: function(){
			app.obj.$body.addClass('vmin768');
			app.obj.$body.trigger('vmin_768_true');
		},
		unmatch: function(){
			app.obj.$body.removeClass('vmin768');
			app.obj.$body.trigger('vmin_768_false');
		}
	};
// -- 1024
	$.vmin1024 = {
		match: function(){
			app.obj.$body.addClass('vmin1024');
			app.obj.$body.trigger('vmin_1024_true');
		},
		unmatch: function(){
			app.obj.$body.removeClass('vmin1024');
			app.obj.$body.trigger('vmin_1024_false');
		}
	};
// -----

	enquire.register($.mq320, $.vmin320);
	enquire.register($.mq480, $.vmin480);
	enquire.register($.mq600, $.vmin600);
	enquire.register($.mq768, $.vmin768);
	enquire.register($.mq1024, $.vmin1024);


})(jQuery);
