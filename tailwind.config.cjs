/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			        xl: { max: '1200px' },
            lg: { max: '991px' },
            md: { max: '767px' },
            sm: { max: '550px' },
            xsm: { max: '375px' },

		},
	},
	plugins: [],
}
