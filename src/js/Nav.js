(function(window, document, $, tesco, undefined) {
	'use strict';
	
	var Nav = tesco.Nav = function () { };
	
	Nav.prototype.Filters = function(el) {	
	
		var openFilters = $('.js-filters'),
			closeFilters = $('.js-navFilters'),
			body = document.getElementsByTagName('body'),
			listenKeys;

		function hideFilters() {
			$(body).removeClass('no-scroll nav-filters');
			document.removeEventListener('keydown', listenKeys);
		}

		function showFilters() {

			listenKeys = function(evt) {			
			    evt = evt || window.event;
			    if (evt.keyCode == 27) {
			    	hideMenu(m);
			    }
			};

			document.addEventListener('keydown', listenKeys, false);

			$(body).addClass('no-scroll nav-filters');
		}
		
		closeFilters.on('click', function(e) {
			e.preventDefault();
			hideFilters();
		});
		
		openFilters.on('click', function(e) {
			e.preventDefault();
			showFilters();
		});
		
	};
	
	Nav.prototype.menu = function(el) {	
	
		var trigger = $('.js-nav'),
			menu = $('.js-menu'),
			top = $('.c-top'),
			body = document.getElementsByTagName('body'),
			detached = false,
			listenKeys,
			m;
		
		function hideMenu() {
			m = menu.detach();
			top.append(m);
			
			$(body).removeClass('no-scroll mobile-nav');
			document.removeEventListener('keydown', listenKeys);
		}
		
		function showMenu() {
			top.after(m);
			
			listenKeys = function(evt) {			
			    evt = evt || window.event;
			    if (evt.keyCode == 27) {
			    	hideMenu(m);
			    }
			};

			document.addEventListener('keydown', listenKeys, false);
		
			if (body[0].classList) {
			    body[0].classList.add('no-scroll');
			} else {
			    body[0].className += ' no-scroll';
			}
		}
		
		trigger.on('click', function(e) {
			e.preventDefault();

			m = menu.detach();

			$(body).toggleClass('mobile-nav');
			
			if (detached === false) {
				showMenu();
				detached = true;
			
			} else {
				hideMenu();
				detached = false;
			}
		});
	};


	tesco.Nav = new Nav();

}(window, document, jQuery, window.tesco = window.tesco || {}));


