(function(window, document, $, tesco, undefined) {
	'use strict';
	
	var Nav = tesco.Nav = function () { };
	
	Nav.prototype.init = function(el) {	
	
		var trigger = $('.js-nav'),
			menu = $('.js-menu'),
			top = $('.c-top'),
			body = document.getElementsByTagName('body');
		
		trigger.on('click', function(e) {
			e.preventDefault();

			$(body).toggleClass('mobile-nav-active');

			var m = menu.detach();
			
			top.after(m);
		});
	};

	tesco.Nav = new Nav();

}(window, document, jQuery, window.tesco = window.tesco || {}));


