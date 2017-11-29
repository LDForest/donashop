import $ from 'jquery';
import 'owl-carousel';

$('.main-slider').owlCarousel({
	 items: 1,
   center: true,
  //   mouseDrag: false,
  //   autoplay: false,
   animateOut: 'fadeOut',
   nav: true,
   loop: true,
   navText: ['<svg class="prev"><use xlink:href="#right-arrow"></svg>', '<svg class="next"><use xlink:href="#right-arrow"></svg>']

  //   smartSpeed: 700,
})

$('.search-link').on('click', () => {
	$('.search-click').fadeToggle(400);
})