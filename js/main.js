$(function(){
	new WOW().init();
	let nav = $('.navigation');
	let menu = $('.navigation-menu');

	$('.button').click(function(){
		$('.modal').show();
	});
	$('.modal-close').click(function(){
		$('.modal').hide();
	});

	nav.click(function(){
		nav.toggleClass('navigation_active');
		menu.toggleClass('navigation-menu_active');
	});



	jQuery(function($){
	   $(".modal-main__input, .form-input, .offer-form__input").mask("+7 (999) 999-99-99");
	});

	$('.production-slider_top').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		asNavFor: '.production-slider_bottom',
		arrows: false,
		responsive: [
			{
				breakpoint: 992,
				settings: {
					arrows: true,
					prevArrow: '<div class="slider-arrow production-arrow slider-arrow_left"></div>',
					nextArrow: '<div class="slider-arrow production-arrow production-arrow_right slider-arrow_right"></div>'
				}
			}
		]
	})
	$('.production-slider_bottom').slick({
		slidesToShow: 4,
		slidesToScroll: 1,
		prevArrow: '<div class="slider-arrow slider-arrow_left"></div>',
		nextArrow: '<div class="slider-arrow slider-arrow_right"></div>',
		focusOnSelect: true,
		asNavFor: '.production-slider_top'
	})
	$('.feedback-slider').slick({
		slidesToShow: 3,
		slidesToScroll: 1,
		prevArrow: '<div class="slider-arrow feedback-arrow feedback-arrow_left"></div>',
		nextArrow: '<div class="slider-arrow feedback-arrow feedback-arrow_right"></div>',
		responsive: [	
			{		   
			    breakpoint: 992,
			    settings:  {
			    	slidesToShow: 1,
			    	slidesToScroll: 1
			    }
		    }
		]	   
	})
});




