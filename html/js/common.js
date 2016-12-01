$(document).ready(function() {

	$('.header-dropdown__arrow').on('click', function() {
		if ( $(this).parent().hasClass('expand') ) {
			$(this).parent().removeClass('expand');
			$(this).parent().find('.header-dropdown__inner').slideUp();
			$(this).removeClass('icon-arrow-up');
			$(this).addClass('icon-arrow-down');
		} else {
			$(this).parent().addClass('expand');
			$(this).parent().find('.header-dropdown__inner').slideDown();
			$(this).removeClass('icon-arrow-down');
			$(this).addClass('icon-arrow-up');
		}
	});
	
	$('.about__direction-btn').on('click', function() {
		$('.about__direction-eventsprojects').hide();
		if ( $(this).hasClass('about__direction-btn_1') ) {
			$('.about__direction-eventsprojects_1').show();
		}
		if ( $(this).hasClass('about__direction-btn_2') ) {
			$('.about__direction-eventsprojects_2').show();
		}
		if ( $(this).hasClass('about__direction-btn_3') ) {
			$('.about__direction-eventsprojects_3').show();
		}
		if ( $(this).hasClass('about__direction-btn_4') ) {
			$('.about__direction-eventsprojects_4').show();
		}
		if ( $(this).hasClass('about__direction-btn_5') ) {
			$('.about__direction-eventsprojects_5').show();
		}
		if ( $(this).hasClass('about__direction-btn_6') ) {
			$('.about__direction-eventsprojects_6').show();
		}
		if ( $(this).hasClass('about__direction-btn_7') ) {
			$('.about__direction-eventsprojects_7').show();
		}
	});

	$('.fact__btn').on('click', function() {
		$(this).parent().find('.fact__info').slideToggle();
	});

});