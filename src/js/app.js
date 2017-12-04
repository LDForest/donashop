import $ from 'jquery';
import 'owl-carousel';
const render = require('../../views/templates/products.pug');

const productsWrapper = $('.products');

$('.main-slider').owlCarousel({
	 items: 1,
   center: true,
   animateOut: 'fadeOut',
   nav: true,
   loop: true,
   navText: ['<svg class="prev"><use xlink:href="#right-arrow"></svg>', '<svg class="next"><use xlink:href="#right-arrow"></svg>']
})

$('.search-link').on('click', () => {
	$('.search-click').fadeToggle(400);
})

$('#load').on('click', function(e) {
	e.preventDefault();
	const svg = $(this).find('svg');
	svg.toggleClass('loader_animate')

	$.ajax('/index-products').then(data => {
		const rendered = render({
			data : transformData(data, 4)
		});
		productsWrapper.append(rendered);
		svg.toggleClass('loader_animate');
	})
})

function transformData(data, amount) {
	const result = []
	const rowsCount = Math.ceil(data.length / amount)

	for(let i = 0; i < rowsCount; i++ ){
		const start = i * amount
		const finish = (i + 1) * amount
		result.push(data.slice(start, finish))
	}
	return result
}