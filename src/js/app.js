// import lazysizes
import lazysizes from 'lazysizes';
// import meanmenu JS
import './vendor/meanMenu/jquery.meanmenu.js';
// Import Swiper and modules
import { Swiper, Navigation, Pagination, Scrollbar, EffectFade } from 'swiper';

const lazy =  lazysizes;

// Install modules
Swiper.use([Navigation, Pagination, Scrollbar, EffectFade]);

const swiper = new Swiper ('.swiper-container', {

	// Optional parameters
	loop: true,

	// Disable preloading of all images
	preloadImages: false,

	// Enable lazy loading
	lazy: {
		loadPrevNext: true,
	},

	fadeEffect: {
		crossFade: true
	},

	// Navigation arrows
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	}
})

$('header nav').meanmenu({
	meanScreenWidth: 1023,
	meanMenuContainer: '.site-wrapper'
});
