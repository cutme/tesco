(function(window, document, $, tesco, undefined) {
	'use strict';
	
	var Upload = tesco.Upload = function () { };
	
	Upload.prototype.init = function(el) {

		var upload = $('.js-upload'),
			input = document.getElementById('file'),
			selected = document.getElementById('num_selected_files'),
			remove = $('.js-removeSelectedFiles'),
			info = $('.js-uploadInfo');


		upload.on('change', '#file' , function() {
			
			$(input).val().replace(/.*(\/|\\)/, '');
			
			if (input) {
				upload.addClass('file-added');
				info.removeClass('is-hidden');
				
				selected.textContent = input.files.length;
				
				for (var i = 0; i < input.files.length; ++i) {
					var name = input.files.item(i).name;
				}

			} else {
				upload.removeClass('file-added');
			}
		}); 
		
		remove.on('click', function(e) {
			e.preventDefault();
			input.value = '';
			info.addClass('is-hidden');
		});
	};

	tesco.Upload = new Upload();
	

}(window, document, jQuery, window.tesco = window.tesco || {}));



