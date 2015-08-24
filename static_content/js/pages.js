function isProbablyWithoutHover() {
	var deviceAgent = navigator.userAgent.toLowerCase();
	var msGesture = window.navigator && window.navigator.msPointerEnabled && window.MSGesture;
	var hasTouchStart = ( "ontouchstart" in window );
	var touchSupport = msGesture || (navigator.msMaxTouchPoints > 0) || (window.DocumentTouch && document instanceof DocumentTouch);

	var isTouchDevice = touchSupport ||
	(deviceAgent.match(/(iphone|ipod|ipad)/) ||
	deviceAgent.match(/(android)/)  ||
	deviceAgent.match(/(iemobile)/) ||
	deviceAgent.match(/iphone/i) ||
	deviceAgent.match(/ipad/i) ||
	deviceAgent.match(/ipod/i) ||
	deviceAgent.match(/blackberry/i) ||
	deviceAgent.match(/bada/i));

	return isTouchDevice;
}

var evalShowApproach = function(selector) {
	if($(selector).size() < 1) {
		return;
	}
	var approachTop = $(selector).offset().top;
	var windowBottom = ($('body')[0].scrollTop || $('html')[0].scrollTop) + window.innerHeight;
	if(windowBottom - approachTop > 150) {
		$(selector).addClass('show');
	}
};

function moveBackgrounds() {
	var $layers = $('.parallax');
	$layers.each(function() {
		var percent = ($(this).get(0).getBoundingClientRect().top / $(window).height()) * 100;
		if(percent < -100) {
			percent = -100;
		}
		else if(percent > 100) {
			percent = 100;
		}

		var coefficient = $(this).attr('data-movement-coefficient');
		var propertyName = $(this).attr('data-movement-property');
		if(!propertyName) {
			propertyName = 'margin-top';
		}

		$(this).find('.back').each(function() {

			var specCoefficient = $(this).attr('data-movement-coefficient');
			if(specCoefficient) {
				coefficient = specCoefficient;
			}

			var value = percent;
			if(coefficient) {
				value = percent * coefficient * -1;
			}
			var propValue = value + "px";
			$(this).css(propertyName,  propValue);
		});
	});
}

function checkHeader() {
	var windowScroll = $(window).scrollTop();
	if(windowScroll > 35) {
		$('.header').addClass('pin-top');
	}
	else {
		$('.header').removeClass('pin-top');
	}
}

$(function() {
	
	
	$(window).on('scroll', function(evt) {
		requestAnimationFrame(function() {
//			add one of these for ever type of thing that should animate into view
//			evalShowApproach('.thing-to-show-when-it-comes-into-view');
			
// 			enable this if there will be parallax scrolling backgrounds
//			moveBackgrounds();
			
//			enable this to check if there's a fixed header which should be updated
//			checkHeader();

		});
	});
	
//	add one of these for ever type of thing that should animate into view
//  evalShowApproach('.thing-to-show-when-it-comes-into-view');
	
	
	// this is the standard check for a menu being opened
	$('.ei-default-menu').click(function() {
		if($('.ei-default-menu ul').width() == 0) {
			$('.ei-default-menu').addClass('open');
		}
		else if($('.ei-default-menu').hasClass('open')) {
			$('.ei-default-menu').removeClass('open');
		}
	});

//	enable for headers that stay stuck to the top
//	checkHeader();
	
//	enable if there are parallax backgrounds	
//	moveBackgrounds();

//	enable to have smooth scrolling
//	var platform = navigator.platform.toLowerCase();
//	if (platform.indexOf('windows') != -1 || platform.indexOf('linux') != -1) {
//		if (!$.browser || $.browser.webkit) {
//			if($.srSmoothscroll) {
//				$.srSmoothscroll({
//					step: 90,
//					speed: 150,
//					ease: "swing"
//				});
//			}
//		}
//	}


});

if(isProbablyWithoutHover()) {
    $('body').addClass('touch');
}
