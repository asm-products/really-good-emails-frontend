/* global jQuery, enquire */
'use strict';

//## Enquire Config ########
//================================================
(function($) {

	var $body = $('body');

	$.mq320 = 'screen and (min-width: 320px)';
	$.mq480 = 'screen and (min-width: 480px)';
	$.mq600 = 'screen and (min-width: 600px)';
	$.mq736 = 'screen and (min-width: 736px)';
	$.mq768 = 'screen and (min-width: 768px)';
	$.mq1024 = 'screen and (min-width: 1024px)';

// -- 320
	$.vmin320 = {
		match: function(){
			$body.addClass('mobile vmin320');
			$body.trigger('vmin_320_true');
		},
		unmatch: function(){
			$body.removeClass('vmin320');
			$body.trigger('vmin_320_false');
		}
	};
// -- 480
	$.vmin480 = {
		match: function(){
			$body.addClass('vmin480');
			$body.trigger('vmin_480_true');
		},
		unmatch: function(){
			$body.removeClass('vmin480');
			$body.trigger('vmin_480_false');
		}
	};
// -- 600
	$.vmin600 = {
		match: function(){
			$body.addClass('vmin600');
			$body.trigger('vmin_600_true');
		},
		unmatch: function(){
			$body.removeClass('vmin600');
			$body.trigger('vmin_600_false');
		}
	};
// -- 736
	$.vmin736 = {
		match: function(){
			$body.addClass('vmin736');
			$body.removeClass('mobile');
			$body.trigger('vmin_736_true');
		},
		unmatch: function(){
			$body.addClass('mobile');
			$body.removeClass('vmin736');
			$body.trigger('vmin_736_false');
		}
	};
// -- 768
	$.vmin768 = {
		match: function(){
			$body.addClass('vmin768');
			$body.trigger('vmin_768_true');
		},
		unmatch: function(){
			$body.removeClass('vmin768');
			$body.trigger('vmin_768_false');
		}
	};
// -- 1024
	$.vmin1024 = {
		match: function(){
			$body.addClass('vmin1024');
			$body.trigger('vmin_1024_true');
		},
		unmatch: function(){
			$body.removeClass('vmin1024');
			$body.trigger('vmin_1024_false');
		}
	};
// -----

	enquire.register($.mq320, $.vmin320);
	enquire.register($.mq480, $.vmin480);
	enquire.register($.mq600, $.vmin600);
	enquire.register($.mq736, $.vmin736);
	enquire.register($.mq768, $.vmin768);
	enquire.register($.mq1024, $.vmin1024);


})(jQuery);
