
(function(window, document, $, tesco, undefined) {
	'use strict';


	$(document).ready(function() {
		
		if (tesco.Helper.exist('.b-lazy')) tesco.Helper.blazy();
		if (tesco.Helper.exist('.js-accordion')) tesco.Accordion.init('#list');
		if (tesco.Helper.exist('.js-back')) tesco.Helper.back();
		if (tesco.Helper.exist('.js-openGallery')) new tesco.Gallery();
		if (tesco.Helper.exist('.nice-select')) tesco.Helper.nSelect();		
		if (tesco.Helper.exist('[data-toggle="datepicker"]')) tesco.Datepicker.init();
		
		
	});


		
}(window, document, jQuery, window.tesco = window.tesco || {}));

