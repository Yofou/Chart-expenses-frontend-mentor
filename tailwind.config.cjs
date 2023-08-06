const plugin = require("tailwindcss/plugin")

/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		colors: {
			creamBg: '#F8E9DD',
			red: '#EC755D',
			cyan: '#76B5BC',
			brown: '#92857A',
			darkBrown: '#382314',
			white: '#FFFBF6',
      'pureWhite': '#FFF',
			redHover: '#FF9B86',
      cyanHover: '#B4E0E5',
		},
		fontSize: {
			mini: '0.9375rem',
			body: '1.125rem',
			l: '2rem',
			xl: '3rem',
		},
		fontFamily: {
			dm: ["'DM Sans'", "sans-serif"]
		}
	},
	plugins: [
		plugin(({ addComponents, theme }) => {
			addComponents({
				'.heading-xl': {
					fontFamily: theme('fontFamily.dm'),
					fontSize: theme('fontSize.xl'),
					fontWeight: '700',
					fontFeatureSettings: "'clig' off, 'liga' off"
				},
				'.heading-l': {
					fontFamily: theme('fontFamily.dm'),
					fontSize: theme('fontSize.l'),
					fontWeight: '700',
					fontFeatureSettings: "'clig' off, 'liga' off"
				},
				'.body': {
					fontFamily: theme('fontFamily.dm'),
					fontSize: theme('fontSize.body'),
					fontWeight: '400',
					fontFeatureSettings: "'clig' off, 'liga' off"
				},
				'.mini-caption': {
					fontFamily: theme('fontFamily.dm'),
					fontSize: theme('fontSize.mini'),
					fontWeight: '400',
					fontFeatureSettings: "'clig' off, 'liga' off"
				}
			})
		})
	],
}
