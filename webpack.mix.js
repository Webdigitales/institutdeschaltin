/**
 * ===========================
 * WDI Craft CMS starterkit
 * Uses Laravel Mix with webpack and Tailwindcss
 * https://laravel-mix.com/
 * https://tailwindcss.com/
 * ===========================
 *
 * Contents
 *
 * 🎚️ Settings
 * 🏠 Templates
 * 🎭 Hashing
 * 🎨 Styles
 * 🎨 Styles: CriticalCSS
 * 🎨 Styles: PurgeCSS
 * 🎨 Styles: PostCSS
 * 📑 Scripts
 * 📑 Scripts: Polyfills
 * 📑 Scripts: Auto import libraries
 * 📑 Scripts: Linting
 * 🏞 Images
 * 🎆 Icons
 * 🗂️ Static
 * 🚧 Dev server
 */

/**
 * 🎚️ Imports
 **/
require("dotenv").config();
const mix = require("laravel-mix");

/**
 * 📑 Scripts
 * https://laravel-mix.com/docs/4.0/mixjs
 */
require('laravel-mix-polyfill');
mix.js(
	["src/js/app.js"]
	, "web/assets/js/app.js")
	.polyfill({
		enabled: true,
		useBuiltIns: "usage",
		targets: {"firefox": "50", "ie": 11}
	})
	.extract();

/**
 * 🎨 Styles
 * https://laravel-mix.com/docs/4.0/css-preprocessors
 * https://github.com/sass/node-sass#options
 */
require("laravel-mix-purgecss");
require('laravel-mix-clean');
const tailwindcss = require("tailwindcss");
mix
	.sass("src/scss/app.scss", "web/assets/css/app.css")
	.setPublicPath("web")
	.options({
		processCssUrls: false,
		postCss: [tailwindcss("./tailwind.config.js")]
	})
	.purgeCss({
		enabled: mix.inProduction(),
		content: ["./templates/**/*.twig", "./src/js/**/*.js"],
		extensions: ["html", "js", "php", "twig", "vue"]
	});

/**
 * 🏞 Images
 * Images are optimized and copied to the build directory
 * https://github.com/CupOfTea696/laravel-mix-imagemin
 * https://github.com/Klathmon/imagemin-webpack-plugin#api
 *
 * Important: laravel-mix-imagemin is incompatible with
 * copy-webpack-plugin > 5.1.1, so keep that dependency at that version.
 * See: https://github.com/CupOfTea696/laravel-mix-imagemin/issues/9
 */
require("laravel-mix-imagemin");
mix.imagemin(
	{
		from: 'img',
		to: 'assets/ima' +
			'ges',
		context: "src"
	},
	{
		gifsicle: {interlaced: true},
		mozjpeg: {progressive: true, arithmetic: false},
		optipng: {optimizationLevel: 3}, // Lower number = speedier/reduced compression
		svgo: {
			plugins: [
				{convertPathData: false},
				{convertColors: {currentColor: false}},
				{removeDimensions: true},
				{removeViewBox: false},
				{cleanupIDs: false},
			]
		},
	}
)


/**
 * 🏞 SVG Sprite generator
 * Individual SVG icons are optimised then combined into a single cacheable SVG
 * https://github.com/kisenka/svg-sprite-loader#configuration
 */
require('laravel-mix-svg-sprite');
mix.svgSprite(
	'src/img/icon',
	"web/assets/images/sprite.svg", {
	symbolId: filePath => path.basename(filePath),
	outputPath: 'web/assets/images/',
	spriteFilename: 'sprite.svg',
	extract: true,
})

// Icon options
mix.options({
	imgLoaderOptions: {
		svgo: {
			plugins: [
				{ convertColors: { currentColor: true } },
				{ removeDimensions: false },
				{ removeViewBox: false },
			],
		},
	},
})

/**
 * 🚧 Dev server
 * Browsersync
 */
// Run BrowserSync Locally, off by default
if (!mix.inProduction()) {
	mix.browserSync({
		// Set this to a variable in your .env file containing your local development URL:
		proxy: process.env.PRIMARY_SITE_URL,
		// Watch for any changes in src/ and templates/ directories:
		files: ['src/**/*', 'templates/**/*'],
	});
}

/**
 * 🎭 Hashing
 * Hash only for production env
 */
// Only run in Production
if (mix.inProduction()) {
	require("laravel-mix-versionhash");
	mix.versionHash();
}
