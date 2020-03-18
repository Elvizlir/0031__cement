"use strict";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var JSCCommon = {
	// часть вызов скриптов здесь, для использования при AJAX
	btnToggleMenuMobile: [].slice.call(document.querySelectorAll(".toggle-menu-mobile--js")),
	body: document.querySelector("body"),
	modalCall: function modalCall() {
		$(".link-modal").fancybox({
			arrows: false,
			infobar: false,
			touch: false,
			type: 'inline',
			i18n: {
				en: {
					CLOSE: "Закрыть",
					NEXT: "Вперед",
					PREV: "Назад" // PLAY_START: "Start slideshow",
					// PLAY_STOP: "Pause slideshow",
					// FULL_SCREEN: "Full screen",
					// THUMBS: "Thumbnails",
					// DOWNLOAD: "Download",
					// SHARE: "Share",
					// ZOOM: "Zoom"

				}
			}
		});
		$(".modal-close-js").click(function () {
			$.fancybox.close();
		});
	},
	// /magnificPopupCall
	toggleMenu: function toggleMenu() {
		var _this = this;

		_this.btnToggleMenuMobile.forEach(function (element) {
			element.addEventListener('click', function () {
				_this.btnToggleMenuMobile.forEach(function (element) {
					element.classList.toggle("on");
				});

				_this.menuMobile.classList.toggle("active");

				_this.body.classList.toggle("fixed");

				return false;
			});
		});
	},
	// табы  . 
	tabscostume: function tabscostume(tab) {
		$('.' + tab + '__caption').on('click', '.' + tab + '__btn:not(.active)', function (e) {
			$(this).addClass('active').siblings().removeClass('active').closest('.' + tab).find('.' + tab + '__content').hide().removeClass('active').eq($(this).index()).show().addClass('active');
		});
	},
	// /табы  
	inputMask: function inputMask() {
		// mask for input
		$('input[type="tel"]').attr("pattern", "[+][0-9]{1}[(][0-9]{3}[)][0-9]{3}-[0-9]{2}-[0-9]{2}").inputmask("+9(999)999-99-99");
	} // /inputMask

};

function eventHandler() {
	// полифил для object-fit
	objectFitImages(); // Picture element HTML5 shiv

	document.createElement("picture"); // для свг

	svg4everybody({});
	JSCCommon.modalCall();
	JSCCommon.tabscostume('tabs');
	JSCCommon.inputMask(); // JSCCommon.CustomInputFile();
	// добавляет подложку для pixel perfect

	$(".main-wrapper").after('<div class="screen" style="background-image: url(screen/main.jpg);"></div>'); // /добавляет подложку для pixel perfect
	// const url = document.location.href;
	// $.each($(".top-nav__nav a "), function() {
	// 	if (this.href == url) {
	// 		if ($(this).hasClass("top-nav__link") == true) {
	// 			$(this).addClass('top-nav__link-active');
	// 		}
	// 		if ($(this).hasClass("footer__link") == true) {
	// 			$(this).addClass('footer__link-active');
	// 		} 
	// 	}; 
	// }); 
	// /закрыть/открыть мобильное меню
	// function heightses() {
	// 			// $(".main-wrapper").css("margin-bottom", $('footer').height())
	// 			// $(".otz__item .text-wrap ").height('auto').equalHeights();
	// 			// 
	// 			// скрывает моб меню
	// 			const stickyHeight = $("s-contacts__nav-line").offsetTop;
	// 			const contactsSticky = $("s-contacts__nav-line").innerHeight();
	// 	$(window).scroll(function() {
	// 		if ($(window).scrollTop() > topH) {
	// 			$('.top-nav  ').addClass('fixed');
	// 		} else {
	// 			$('.top-nav  ').removeClass('fixed');
	// 		}
	// 	});
	// 	// конец добавил
	// }
	// $(window).resize(function() {
	// 	heightses();
	// });
	// heightses();
	// листалка по стр

	$(" .top-nav li a, .scroll-link").click(function () {
		var elementClick = $(this).attr("href");
		var destination = $(elementClick).offset().top - 150;
		$('html, body').animate({
			scrollTop: destination
		}, 1100);
		return false;
	});
	var icon = '<svg  xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" x="0px" y="0px" viewBox="0 0 28 47" style="enable-background:new 0 0 492.004 492.004;" xml:space="preserve" ><path d="M27.259 21.422L6.613.742A2.518 2.518 0 0 0 4.82 0C4.139 0 3.5.264 3.024.742l-1.52 1.523a2.549 2.549 0 0 0 0 3.595L18.84 23.226 1.484 40.61a2.528 2.528 0 0 0-.74 1.798c0 .68.263 1.319.74 1.798l1.52 1.522a2.518 2.518 0 0 0 1.795.742c.68 0 1.317-.263 1.795-.742L27.259 25.03a2.53 2.53 0 0 0 .74-1.803 2.528 2.528 0 0 0-.74-1.805z" ></path>';
	var arrl2 = ' <div class="r">' + icon,
			arrr2 = ' <div class="l">' + icon; // // карусель

	var defaultSlide = {
		speed: 600,
		infinite: true,
		arrows: true,
		mobileFirst: true,
		prevArrow: arrr2,
		nextArrow: arrl2,
		// autoplay: true,
		autoplaySpeed: 6000,
		lazyLoad: 'progressive'
	};
	$('.header-block__slider--js').slick(_objectSpread({}, defaultSlide, {
		slidesToShow: 1,
		responsive: [{
			breakpoint: 991,
			settings: {
				slidesToShow: 5
			}
		}, {
			breakpoint: 580,
			settings: {
				slidesToShow: 3
			}
		}, {
			breakpoint: 400,
			settings: {
				slidesToShow: 2
			}
		}]
	}));
	$('.s-sidebar__banner-slider--js').slick(_objectSpread({}, defaultSlide, {
		autoplaySpeed: 3000,
		arrows: false,
		autoplay: true,
		fade: true,
		slidesToShow: 1
	}));
	$('.s-product__main-slider--js').slick(_objectSpread({}, defaultSlide, {
		arrows: false,
		asNavFor: '.s-product__pre-slider--js',
		fade: true,
		slidesToShow: 1
	}));
	$('.s-product__pre-slider--js').slick(_objectSpread({}, defaultSlide, {
		slidesToShow: 4.5,
		arrows: false,
		draggable: false,
		asNavFor: '.s-product__main-slider--js',
		focusOnSelect: true
	}));

	var gets = function () {
		var a = window.location.search;
		var b = new Object();
		var c;
		a = a.substring(1).split("&");

		for (var i = 0; i < a.length; i++) {
			c = a[i].split("=");
			b[c[0]] = c[1];
		}

		return b;
	}(); // form


	$("form").submit(function (e) {
		e.preventDefault();
		var th = $(this);
		var data = th.serialize();
		th.find('.utm_source').val(decodeURIComponent(gets['utm_source'] || ''));
		th.find('.utm_term').val(decodeURIComponent(gets['utm_term'] || ''));
		th.find('.utm_medium').val(decodeURIComponent(gets['utm_medium'] || ''));
		th.find('.utm_campaign').val(decodeURIComponent(gets['utm_campaign'] || ''));
		$.ajax({
			url: 'action.php',
			type: 'POST',
			data: data
		}).done(function (data) {
			$.fancybox.close();
			$.fancybox.open({
				src: '#modal-thanks',
				type: 'inline'
			}); // window.location.replace("/thanks.html");

			setTimeout(function () {
				// Done Functions
				th.trigger("reset"); // $.magnificPopup.close();
				// ym(53383120, 'reachGoal', 'zakaz');
				// yaCounter55828534.reachGoal('zakaz');
			}, 4000);
		}).fail(function () {});
	});
	$(".toggle-menu-mobile--top-line").click(function () {
		$('.top-line .navbar').slideToggle();
	});
	$(".toggle-menu-mobile--top-nav").click(function () {
		$('.top-nav .navbar').slideToggle();
	}); // 	var stickyNavTop = $('.s-contacts__nav-line').offset().top;
	// 	var stickyNav = function(){
	// 	 var scrollTop = $(window).scrollTop();
	// 	 if (scrollTop > stickyNavTop) { 
	// 			 $('.s-contacts__nav-line').addClass('sticky');
	// 	 } else {
	// 			 $('.s-contacts__nav-line').removeClass('sticky'); 
	// 	 }
	// };
	// if($('.s-contacts__nav-line').length){
	// 	stickyNav();
	// 	$(window).scroll(function() {
	// 	 stickyNav();
	// 	});
	// }
}

;

if (document.readyState !== 'loading') {
	eventHandler();
} else {
	document.addEventListener('DOMContentLoaded', eventHandler);
}