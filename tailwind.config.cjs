/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		colors: {
			'main': '#fafafa',
			'secondary' : '#ffffff',
			'border' : '#d6d6d6',
			'text' : '#7f7f7f',
			'dark-text' : '#3c3c3c',
			'selected' : '#ec7905',
			'selected-area': '#feefe1',
			'alternate' : '#ffffff',
			'non-selected' : '#959595',
			'non-selected-area' : '#ebebeb',
			'available-area': '#E6FFE1',
			'available': '#00b600',
			'not-available-area' : '#FDCBCB',
			'not-available' : '#FD7A7A',
		 },
		extend: {},
	},
	plugins: [],
}
