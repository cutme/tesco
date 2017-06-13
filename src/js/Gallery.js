(function(window, document, $, tesco, undefined) {
	'use strict';

	var Gallery = tesco.Gallery = function () { this.init(); };

	Gallery.prototype.init = function() {

		$('.c-gallery-modal').each(function () {
			$(this).magnificPopup({
				delegate: 'a',
				type: 'image',
				closeMarkup: '<a title="%title%" class="mfp-close">Zamknij <i class="icon-x-2"></i></a>',
				gallery: {
					enabled: true,
					arrowMarkup: '<a title="%title%" class="mfp-arrow mfp-arrow-%dir%"></a>',
					tCounter: '<span class="mfp-counter">Zdjęcie %curr% z %total%</span>'
				},
				fixedContentPos: true,
				mainClass: 'mfp-fade',
				callbacks: {
				    buildControls: function() {
				      // re-appends controls inside the main container
				      this.contentContainer.append(this.arrowLeft.add(this.arrowRight));
					}
				}
			});
		});
		
		$('.js-openGallery').on('click', function(e) {
			e.preventDefault();
			$($(this).attr('href')).magnificPopup('open');	
		});
	};


}(window, document, jQuery, window.tesco = window.tesco || {}));