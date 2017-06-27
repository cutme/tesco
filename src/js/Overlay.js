(function(window, document, $, tesco, undefined) {
	'use strict';
	
	var Overlay = tesco.Overlay = function () { },
		listenKeys, 
		body = document.getElementsByTagName('body');

	Overlay.prototype.init = function(el) {

		$(el).removeClass('is-hidden');		
		
		listenKeys = function(evt) {			
		    evt = evt || window.event;
		    if (evt.keyCode == 27) {
				Overlay.prototype.destroy(el);
		    }
		};

		document.addEventListener('keydown', listenKeys, false);

		if (body[0].classList) {
		    body[0].classList.add('no-scroll');
		} else {
		    body[0].className += ' no-scroll';
		}
		
		$('.js-close', el).on('click', function(e) {
			e.preventDefault();
			tesco.Overlay.destroy(el);
		});
	};
	
	Overlay.prototype.destroy = function(el) {
		
		$(el).addClass('is-hidden');

		document.removeEventListener('keydown', listenKeys);
		
		$(document).off('click', '.js-close');
		
		el.reset();
		
		$(body).removeClass('no-scroll');
	};
	
	tesco.Overlay = new Overlay();
	

}(window, document, jQuery, window.tesco = window.tesco || {}));