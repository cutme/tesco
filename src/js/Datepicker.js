(function(window, document, $, tesco, undefined) {
	'use strict';
	
	var Datepicker = tesco.Datepicker = function () { };
	
	Datepicker.prototype.init = function(el) {	
	
		(function (factory) {
		  if (typeof define === 'function' && define.amd) {
		    // AMD. Register as anonymous module.
		    define('datepicker.pl-PL', ['jquery'], factory);
		  } else if (typeof exports === 'object') {
		    // Node / CommonJS
		    factory(require('jquery'));
		  } else {
		    // Browser globals.
		    factory(jQuery);
		  }
		})(function ($) {
		
//		  'use strict';
		
		  $.fn.datepicker.languages['pl-PL'] = {
		    format: 'dd.mm.YYYY',
		    days: ['Niedziela', 'Poniedziałek', 'Wtorek', 'Środa', 'Czwartek', 'Piątek', 'Sobota'],
		    daysShort: ['Niedz', 'Pon', 'Wt', 'Śr', 'Czw', 'Pt', 'Sob'],
		    // Used and correct are only daysShort, daysMin are just shorted to fit UI
		    daysMin: ['Nie', 'Pon', 'Wt', 'Śr', 'Czw', 'Pt', 'Sob'],
		    weekStart: 1,
		    months: ['Styczeń', 'Luty', 'Marzec', 'Kwiecień', 'Maj', 'Czerwiec', 'Lipiec', 'Sierpień', 'Wrzesień', 'Październik', 'Listopad', 'Grudzień'],
		    monthsShort: ['Sty', 'Lut', 'Mar', 'Kwi', 'Maj', 'Cze', 'Lip', 'Sie', 'Wrz', 'Paź', 'Lis', 'Gru']
		  };
		});	


		$('#toDate').datepicker({
			autoHide: true,
			autoPick: true,
			language: 'pl-PL'
		});

		$('#fromDate').datepicker({
			autoHide: true,
			autoPick: true,
			language: 'pl-PL'
		}).on('pick.datepicker', function (e) {
	
			$('#toDate').datepicker('destroy');
			$("#toDate").datepicker({		
				startDate: e.date,
				autoHide: true,
				language: 'pl-PL'
			});

			$('#toDate').datepicker('setDate', e.date);
			
		});
	};

	tesco.Datepicker = new Datepicker();
	

}(window, document, jQuery, window.tesco = window.tesco || {}));


