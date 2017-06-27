(function(window, document, $, tesco, undefined) {
	'use strict';

	var Vote = tesco.Vote = function () { };

	Vote.prototype.init = function(el) {
		var confirmOverlay = document.getElementById('confirmOverlay');
		
		tesco.Helper.parsleyLang();

		$(document).on('click', '.vote', function(e) {
			e.preventDefault();	

			var id = $(this).parents('.js-accContent').find('.id').text();

			tesco.Overlay.init(confirmOverlay);
			
			$(confirmOverlay).parsley().reset();

			$('input[name="confirmation_id"]', confirmOverlay).val(id);
		});		
	};

	tesco.Vote = new Vote();


}(window, document, jQuery, window.tesco = window.tesco || {}));
