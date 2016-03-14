

/*===================================================================================*/
/*	HEADER SHRINK
/*===================================================================================*/

$(document).ready(function() {
	
	var s = skrollr;
	var sActive = false;
	
	if ($(window).width() > 1024) {
		s.init({
			mobileCheck: function() {
				return false;
			}
		});
		sActive = true;
	}
	
	$(window).on('resize', function() {
		if ($(window).width() < 1024 && sActive) {
			s.init().destroy();
			sActive = false;
		}
		else if ($(window).width() > 1024) {
			s.init({
				mobileCheck: function() {
					return false;
				}
			});
			sActive = true;
		}
	});
	
});


/*===================================================================================*/
/*	STICKY NAVIGATION
/*===================================================================================*/

$(document).ready(function() {
	$('.navbar .navbar-collapse').waypoint('sticky');
});


/*===================================================================================*/
/*	ANIMATIONS ON SCROLL
/*===================================================================================*/

$(document).ready(function() {
	var waypointClass = 'main [class*="col-"]';
	var animationClass = 'fadeInUp';
	var delayTime;
	
	$(waypointClass).waypoint(function() {
		delayTime += 100;
		$(this).delay(delayTime).queue(function(next){
			$(this).toggleClass('animated');
			$(this).toggleClass(animationClass);
			delayTime = 0;
			next();
		});
	},
	{
		offset: '90%',
		triggerOnce: true
	});
});


/*===================================================================================*/
/*	ANIMATED / SMOOTH SCROLL TO ANCHOR
/*===================================================================================*/

$(document).ready(function() {
	
	$("a.scroll-to").click(function() {
		
		if ($(window).width() > 1024) {
			var navbarHeight = 45;
		}
		else {
			var navbarHeight = 0;
		}
		
		if ($(this).attr('data-anchor-offset') !== undefined) {
			var anchorOffset = $(this).attr('data-anchor-offset');
		}
		else {
			var anchorOffset = 0;
		}
		
		$("html, body").animate({
			scrollTop: $($(this).attr("href")).offset().top - navbarHeight - anchorOffset + "px"
		}, {
			duration: 1000,
			easing: "easeInOutCubic"
		});
		return false;
	});
	
});


/*===================================================================================*/
/*	SCROLL SPY
/*===================================================================================*/

$(document).ready(function () {
	$('body').scrollspy({ 
		target: '.navbar-collapse',
		offset: 50
	})
});


/*===================================================================================*/
/*	IMAGE HOVER
/*===================================================================================*/

$(document).ready(function () {
	$('.icon-overlay a').prepend('<span class="icn-more"></span>');
});


/*===================================================================================*/
/*	MODALS
/*===================================================================================*/

$('.modal').on('hidden.bs.modal', function () {
	$('.video-container iframe').attr("src", $(".video-container iframe").attr("src"));
});


/*===================================================================================*/
/*	DATA REL
/*===================================================================================*/

$(document).ready(function () {
	$('a[data-rel]').each(function () {
		$(this).attr('rel', $(this).data('rel'));
	});
});


/*===================================================================================*/
/*	TOOLTIP
/*===================================================================================*/

$(document).ready(function () {
	if ($("[rel=tooltip]").length) {
		$("[rel=tooltip]").tooltip();
	}
});



/*===================================================================================*/
/*	CONVERTING iOS SAFARI VIEWPORT UNITS (BUGGY) INTO PIXELS
/*===================================================================================*/

$(document).ready(function () {
	window.viewportUnitsBuggyfill.init();
});