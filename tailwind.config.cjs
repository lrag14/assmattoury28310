/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			screens: {
				xl: { max: '1500px' },
				lg: { max: '1200px' },
				md: { max: '900px' },
				sm: { max: '550px' },
				xsm: { max: '375px' },
				 },
		},
	},
	plugins: [],
}
