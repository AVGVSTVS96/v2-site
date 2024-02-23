/** @type {import('tailwindcss').Config} */

const colors = require('tailwindcss/colors')
const primaryColor = 'slate'

const mix = (name) => `color-mix(in srgb, var(${name}), transparent calc(100% * (1 - <alpha-value>)))`;

export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				mycustom: {
					100: '#15162e',
					200: '#191D2D'
				},
				primary: {
					50: colors[primaryColor][50],
					100: colors[primaryColor][100],
					200: colors[primaryColor][200],
					300: colors[primaryColor][300],
					400: colors[primaryColor][400],
					500: colors[primaryColor][500],
					600: colors[primaryColor][600],
					700: colors[primaryColor][700],
					800: colors[primaryColor][800],
					900: colors[primaryColor][900],
					950: colors[primaryColor][950]
				},
			},
			textColor: {
				light: colors[primaryColor][50],
				'muted-light': colors[primaryColor][200],
				'muted': colors[primaryColor][400],
				'muted-dark': colors[primaryColor][500],
				dark: colors[primaryColor][900],
			}
		},
	},
	plugins: [],
}
