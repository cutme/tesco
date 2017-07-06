(function(window, document, $, tesco, undefined) {
	'use strict';
	
	var Datepicker = tesco.Datepicker = function () { };
	
	Datepicker.prototype.init = function(el) {	
	
		var date = new Date(),
			currentDate = [date.getFullYear(), date.getMonth(), date.getDate()];
			
	
	switchLang();

	var $inputFrom = $('#fromDate').pickadate({
			format: 'dd.mm.yyyy',
			onStart: function() {
			    var date = new Date();
	            this.set('select', currentDate);
			},
			onClose: function(context) {
				toDate.set('min', this.get());
			}
	});
	var fromDate = $inputFrom.pickadate('picker');


	var $inputTo = $('#toDate').pickadate({
			format: 'dd.mm.yyyy',
			min: true,
			onStart: function() {
			    var date = new Date();
	            this.set('select', currentDate);
			},
			onClose: function(context) {
				fromDate.set('max', this.get('select'))
			}
	});
	var toDate = $inputTo.pickadate('picker');
	
	
	
	//picker.set('view', currentDate, { format: 'dd-mm-yyyy' });
	//picker.set('select', currentDate, { format: 'd-m-yy' });
	//picker.set('select', '04-30', { format: 'hh-i' })


			
		
	/*
	var $input2 = $('#toDate').pickadate({
			format: 'd.mm.yyyy',	
			min: true,
			//min: new Date(2017,7,6),
			
			onSet: function() {
				console.log('b');
			}
		});
		
		var picker2 = $input2.pickadate('picker2');
		

		

		var $input1 = $('#fromDate').pickadate({	
			format: 'd.mm.yyyy',
			onStart: function() {
			    var date = new Date();
                this.set('select', currentDate);
			},
			onSet: function(thingSet) {
				
			    console.log('Set stuff:', thingSet);
			    picker2.set('min', '9.07.2017');
				
				
			}
		});
		
		var picker1 = $input1.pickadate('picker');
		
*/
		
		
	
		function switchLang() {
			var lang = $('html').attr('lang');
			
			
			switch(lang) {
				case 'pl' : 
				
				// Polish
	
				jQuery.extend( jQuery.fn.pickadate.defaults, {
				    monthsFull: [ 'styczeń', 'luty', 'marzec', 'kwiecień', 'maj', 'czerwiec', 'lipiec', 'sierpień', 'wrzesień', 'październik', 'listopad', 'grudzień' ],
				    monthsShort: [ 'sty', 'lut', 'mar', 'kwi', 'maj', 'cze', 'lip', 'sie', 'wrz', 'paź', 'lis', 'gru' ],
				    weekdaysFull: [ 'niedziela', 'poniedziałek', 'wtorek', 'środa', 'czwartek', 'piątek', 'sobota' ],
				    weekdaysShort: [ 'niedz.', 'pn.', 'wt.', 'śr.', 'cz.', 'pt.', 'sob.' ],
				    today: 'Dzisiaj',
				    clear: 'Usuń',
				    close: 'Zamknij',
				    firstDay: 1,
				    format: 'd mmmm yyyy',
				    formatSubmit: 'yyyy/mm/dd'
				});
				
				jQuery.extend( jQuery.fn.pickatime.defaults, {
				    clear: 'usunąć'
				});
	
				break;
				
				case 'cz' :
				
				// Czech
	
				jQuery.extend( jQuery.fn.pickadate.defaults, {
				    monthsFull: [ 'leden', 'únor', 'březen', 'duben', 'květen', 'červen', 'červenec', 'srpen', 'září', 'říjen', 'listopad', 'prosinec' ],
				    monthsShort: [ 'led', 'úno', 'bře', 'dub', 'kvě', 'čer', 'čvc', 'srp', 'zář', 'říj', 'lis', 'pro' ],
				    weekdaysFull: [ 'neděle', 'pondělí', 'úterý', 'středa', 'čtvrtek', 'pátek', 'sobota' ],
				    weekdaysShort: [ 'ne', 'po', 'út', 'st', 'čt', 'pá', 'so' ],
				    today: 'dnes',
				    clear: 'vymazat',
				    firstDay: 1,
				    format: 'd. mmmm yyyy',
				    formatSubmit: 'yyyy/mm/dd'
				});
				
				jQuery.extend( jQuery.fn.pickatime.defaults, {
				    clear: 'vymazat'
				});
				
				break;
				
				
				case 'hu' :
				
				// Hungarian
	
				jQuery.extend( jQuery.fn.pickadate.defaults, {
				    monthsFull: [ 'január', 'február', 'március', 'április', 'május', 'június', 'július', 'augusztus', 'szeptember', 'október', 'november', 'december' ],
				    monthsShort: [ 'jan', 'febr', 'márc', 'ápr', 'máj', 'jún', 'júl', 'aug', 'szept', 'okt', 'nov', 'dec' ],
				    weekdaysFull: [ 'vasárnap', 'hétfő', 'kedd', 'szerda', 'csütörtök', 'péntek', 'szombat' ],
				    weekdaysShort: [ 'V', 'H', 'K', 'SZe', 'CS', 'P', 'SZo' ],
				    today: 'Ma',
				    clear: 'Törlés',
				    firstDay: 1,
				    format: 'yyyy. mmmm dd.',
				    formatSubmit: 'yyyy/mm/dd'
				});
				
				jQuery.extend( jQuery.fn.pickatime.defaults, {
				    clear: 'Törlés'
				});
				
				break;
				
				
				case 'sk' : 
				
				// Slovak
	
				jQuery.extend( jQuery.fn.pickadate.defaults, {
				    monthsFull: [ 'január', 'február', 'marec', 'apríl', 'máj', 'jún', 'júl', 'august', 'september', 'október', 'november', 'december' ],
				    monthsShort: [ 'jan', 'feb', 'mar', 'apr', 'máj', 'jún', 'júl', 'aug', 'sep', 'okt', 'nov', 'dec' ],
				    weekdaysFull: [ 'nedeľa', 'pondelok', 'utorok', 'streda', 'štvrtok', 'piatok', 'sobota' ],
				    weekdaysShort: [ 'Ne', 'Po', 'Ut', 'St', 'Št', 'Pi', 'So' ],
				    today: 'dnes',
				    clear: 'vymazať',
				    close: 'zavrieť',
				    firstDay: 1,
				    format: 'd. mmmm yyyy',
				    formatSubmit: 'yyyy/mm/dd'
				});
				
				jQuery.extend( jQuery.fn.pickatime.defaults, {
				    clear: 'vymazať'
				});
				
				break;
	
			}
		}
		
		
		
		
		

		//$('#toDate').datepicker(datepickerOptions);

		/*
$('#fromDate').datepicker(datepickerOptions).on('pick.datepicker', function (e) {
		
			//$('.c-filters__overlay').addClass('openedDatepicker');
		
			$('#toDate').datepicker('destroy');
			$("#toDate").datepicker(datepickerOptions);

			$('#toDate').datepicker('setDate', e.date);
			
		});
*/
	};

	tesco.Datepicker = new Datepicker();
	

}(window, document, jQuery, window.tesco = window.tesco || {}));


