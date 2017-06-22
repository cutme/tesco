(function(window, document, $, tesco, undefined) {
	'use strict';
	
	var Autocomplete = tesco.Autocomplete = function () { };
	
	Autocomplete.prototype.init = function(el) {
		var options = {
			adjustWidth: false,
			
			url: function(phrase) {
				return "/autocomplete.php?phrase=" + phrase + "&format=json";
			},
		
			getValue: function(element) {
				return element.name;
			},
			
			list: {
				match: {
					enabled: true
				}
			},
			
			ajaxSettings: {
				dataType: "json",
				method: "POST",
				data: {
					dataType: "json"
				}
			},
			
			preparePostData: function(data) {
				data.phrase = $("#autocomplete").val();
				return data;
			},
			
			requestDelay: 400
		};
		
		$("#autocomplete").easyAutocomplete(options);
	};

	tesco.Autocomplete = new Autocomplete();
	

}(window, document, jQuery, window.tesco = window.tesco || {}));


