/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				primary: '#FF7F49',
				dark: '#0a0a0a',
				'off-white': '#f5f5f5',
			},
			fontFamily: {
				serif: ['Newsreader', 'serif'],
				sans: ['Inter', 'sans-serif'],
			},
			letterSpacing: {
				widest: '0.1em', // For buttons
			},
			borderRadius: {
				'btn': '20px',
			},
		},
	},
	plugins: [
		require('@tailwindcss/typography'),
	],
};
