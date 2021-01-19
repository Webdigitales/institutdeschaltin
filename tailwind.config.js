/**
 * Tailwindcss custom configs file
 * https://tailwindcss.com/docs/configuration
 *
 * Defines here your project variables
 * ONLY change values DON'T touch to variables name
 */

module.exports = {
	theme: {
		extend: {
			// Define colors
			colors: {
				black: "#3d3e4e",
				white: "#fff",
				green: "#26D366",
				primary: {
					lighter: "#EBF1FA",
					default: "#303676"
				},
				secondary: {
					lighter: "#EBF1FA",
					default: "#5176de"
				},
				gray: {
					100: "#E4E9EE",
					300: "#8A939F",
					500: "#6B6E76"
				}
			},
		},
		// Define font families, don't forget to load correct fonts in :
		// ./templates/_boilerplate/_partials/head-css.twig
		fontFamily: {
			heading: [
				"Lora",
				"Georgia",
				"Arial",
				"serif"
			],
			body: [
				"Roboto",
				"Helvetica",
				"Helvetica Neue",
				"Arial",
				"sans-serif"
			]
		},
		// Define font sizes
		fontSize: {
			xs: '0.75rem', 			// 12px
			sm: '0.875rem', 		// 14px
			base: '1rem', 			// 16px
			lg: '1.125rem', 		// 18px
			xl: '1.25rem', 			// 20px
			'2xl': '1.5rem', 		// 24px
			'3xl': '2rem', 			// 32px
			'4xl': '3rem', 			// 48px
		},
		// Define all spacing values
		spacing: {
			px: '1px',
			'0': '0',
			'0.5': '0.5rem',	// 8px
			'1': '1rem',			// 16px
			'1.5': '1.5rem',	// 24px
			'2': '2rem',			// 32px
			'2.5': '2.5rem',	// 40px
			'3': '3rem',			// 48px
			'4': '5rem',			// 80px
			'5': '6.5rem',		// 104px
		},
		// Padding uses spacing values
		padding: theme => theme('spacing'),
		// Grid gap uses spacing values
		gap: theme => theme('spacing'),
		// Define box shadows
		boxShadow: {
			default: '0 8px 24px 0 rgba(50, 54, 64, 0.07)',
			hover: '0 8px 32px 0 rgba(50, 54, 64, 0.16)',
			none: 'none',
		},
		// Define border widths
		borderWidth: {
			'0': '0',
			'1': '1px',
			'2': '2px',
			'4': '4px',
			'8': '8px',
		},
		borderRadius: {
			none: '0',
			default: '0.1875rem',
			lg: '50%',
			full: '9999px',
		},
		// Define responsive breakpoints
		screens: {
			'sm': '640px',
			// => @media (min-width: 640px) { ... }

			'md': '768px',
			// => @media (min-width: 768px) { ... }

			'lg': '1024px',
			// => @media (min-width: 1024px) { ... }

			'xl': '1280px',
			// => @media (min-width: 1280px) { ... }
		}
	},
	variants: {
		display: ["responsive", "hover", "focus"],
		backgroundColor: ["responsive", "hover", "focus", "active"],
		boxShadow: ["responsive", "hover", "focus"],
		color: ["hover", "focus", "active"],
		transitionProperty: ['responsive', 'hover', 'focus'],
	},
	plugins: [require("@tailwindcss/custom-forms")]
};
