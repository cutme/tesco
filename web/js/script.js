!function(e,t,i,o,n){"use strict";var a=o.Accordion=function(){};a.prototype.init=function(e){t.querySelector(".js-accNav");i(e).on("click",".js-accNav",function(t){t.preventDefault();var o=i(this),n=(i(".js-accNav",e),o.parents(".js-accContent"));n.hasClass("is-active")?(n.removeClass("is-active"),n.find(".c-list__row--details").addClass("is-hidden")):(i(".js-accContent",e).removeClass("is-active"),i(".c-list__row--details",e).addClass("is-hidden"),n.addClass("is-active"),n.find(".c-list__row--details").removeClass("is-hidden"))})},o.Accordion=new a}(window,document,jQuery,window.tesco=window.tesco||{}),function(e,t,i,o,n){"use strict";var a=o.Datepicker=function(){};a.prototype.init=function(e){!function(e){"function"==typeof define&&define.amd?define("datepicker.pl-PL",["jquery"],e):e("object"==typeof exports?require("jquery"):jQuery)}(function(e){e.fn.datepicker.languages["pl-PL"]={format:"dd.mm.YYYY",days:["Niedziela","Poniedziałek","Wtorek","Środa","Czwartek","Piątek","Sobota"],daysShort:["Niedz","Pon","Wt","Śr","Czw","Pt","Sob"],daysMin:["Nie","Pon","Wt","Śr","Czw","Pt","Sob"],weekStart:1,months:["Styczeń","Luty","Marzec","Kwiecień","Maj","Czerwiec","Lipiec","Sierpień","Wrzesień","Październik","Listopad","Grudzień"],monthsShort:["Sty","Lut","Mar","Kwi","Maj","Cze","Lip","Sie","Wrz","Paź","Lis","Gru"]}}),i("#toDate").datepicker({autoHide:!0,autoPick:!0,language:"pl-PL"}),i("#fromDate").datepicker({autoHide:!0,autoPick:!0,language:"pl-PL"}).on("pick.datepicker",function(e){i("#toDate").datepicker("destroy"),i("#toDate").datepicker({startDate:e.date,autoHide:!0,language:"pl-PL"}),i("#toDate").datepicker("setDate",e.date)})},o.Datepicker=new a}(window,document,jQuery,window.tesco=window.tesco||{}),function(e,t,i,o,n){"use strict";var a=o.Gallery=function(){this.init()};a.prototype.init=function(){i(".c-gallery-modal").each(function(){i(this).magnificPopup({delegate:"a",type:"image",closeMarkup:'<a title="%title%" class="mfp-close">Zamknij <i class="icon-x-2"></i></a>',gallery:{enabled:!0,arrowMarkup:'<a title="%title%" class="mfp-arrow mfp-arrow-%dir%"></a>',tCounter:'<span class="mfp-counter">Zdjęcie %curr% z %total%</span>'},fixedContentPos:!0,mainClass:"mfp-fade",callbacks:{buildControls:function(){this.contentContainer.append(this.arrowLeft.add(this.arrowRight))}}})}),i(".js-openGallery").on("click",function(e){e.preventDefault(),i(i(this).attr("href")).magnificPopup("open")})}}(window,document,jQuery,window.tesco=window.tesco||{}),function(e,t,i,o,n){"use strict";function a(){var e=i(".js-back");e.on("click",function(e){e.preventDefault(),history.back()})}function c(){new Blazy({breakpoints:!1,success:function(e){setTimeout(function(){i("body").addClass("is-loaded")},200)}})}function s(e){return i(e).length>0}function r(){/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(navigator.userAgent)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(navigator.userAgent.substr(0,4))?i("html").addClass("mobile"):i("html").addClass("desktop")}function l(){i(".nice-select").niceSelect()}var d=function(){return{back:a,exist:s,blazy:c,isMobile:r,nSelect:l}};o.Helper=new d}(window,document,jQuery,window.tesco=window.tesco||{}),function(e,t,i,o,n){"use strict";var a=o.Nav=function(){};a.prototype.Filters=function(o){function n(){i(l).removeClass("no-scroll nav-filters"),t.removeEventListener("keydown",c)}function a(){c=function(t){t=t||e.event,27==t.keyCode&&hideMenu(m)},t.addEventListener("keydown",c,!1),i(l).addClass("no-scroll nav-filters")}var c,s=i(".js-filters"),r=i(".js-navFilters"),l=t.getElementsByTagName("body");r.on("click",function(e){e.preventDefault(),n()}),s.on("click",function(e){e.preventDefault(),a()})},a.prototype.menu=function(o){function n(){s=l.detach(),d.append(s),i(p).removeClass("no-scroll mobile-nav"),t.removeEventListener("keydown",c)}function a(){d.after(s),c=function(t){t=t||e.event,27==t.keyCode&&n(s)},t.addEventListener("keydown",c,!1),p[0].classList?p[0].classList.add("no-scroll"):p[0].className+=" no-scroll"}var c,s,r=i(".js-nav"),l=i(".js-menu"),d=i(".c-top"),p=t.getElementsByTagName("body"),u=!1;r.on("click",function(e){e.preventDefault(),s=l.detach(),i(p).toggleClass("mobile-nav"),u===!1?(a(),u=!0):(n(),u=!1)})},o.Nav=new a}(window,document,jQuery,window.tesco=window.tesco||{}),WebFontConfig={google:{families:["Roboto:300,400,600,700,900:latin-ext"]},active:function(){}},function(){var e=document.createElement("script");e.src=("https:"==document.location.protocol?"https":"http")+"://ajax.googleapis.com/ajax/libs/webfont/1/webfont.js",e.type="text/javascript",e.async="true";var t=document.getElementsByTagName("script")[0];t.parentNode.insertBefore(e,t)}(),function(e,t,i,o,n){"use strict";i(t).ready(function(){o.Helper.isMobile(),o.Nav.menu(),o.Helper.exist(".b-lazy")&&o.Helper.blazy(),o.Helper.exist(".js-accordion")&&o.Accordion.init("#list"),o.Helper.exist(".js-back")&&o.Helper.back(),o.Helper.exist(".js-filters")&&o.Nav.Filters(),o.Helper.exist(".js-openGallery")&&new o.Gallery,o.Helper.exist(".nice-select")&&o.Helper.nSelect(),o.Helper.exist('[data-toggle="datepicker"]')&&o.Datepicker.init()})}(window,document,jQuery,window.tesco=window.tesco||{});