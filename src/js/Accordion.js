(function(window, document, $, tesco, undefined) {
	'use strict';
	
	var Accordion = tesco.Accordion = function () { };
	
	Accordion.prototype.init = function(el) {
		var trigger = document.querySelector('.js-accNav');
		

		$(el).on('click', '.js-accNav', function(e) {
			e.preventDefault();	

			var $$ = $(this),
				nav = $('.js-accNav', el),
				content = $$.parents('.js-accContent');

			if (content.hasClass('is-active')) {
				content.removeClass('is-active');
				content.find('.c-list__row--details').addClass('is-hidden');

			} else {
			
				$('.js-accContent', el).removeClass('is-active');
				$('.c-list__row--details', el).addClass('is-hidden');
			
			
				content.addClass('is-active');				
				content.find('.c-list__row--details').removeClass('is-hidden');			
			}
		});		
	};

	tesco.Accordion = new Accordion();
	

}(window, document, jQuery, window.tesco = window.tesco || {}));


