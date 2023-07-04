/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}',
    './node_modules/flowbite/**/*.js',
  ],

  theme: {
    extend: {
      typography: ({ theme }) => ({
        blue: {
          css: {
            '--tw-prose-body': theme('colors.blue[500]'),
            '--tw-prose-headings': theme('colors.blue[900]'),
            '--tw-prose-lead': theme('colors.blue[500]'),
            '--tw-prose-links': theme('colors.blue[600]'),
            '--tw-prose-bold': theme('colors.blue[900]'),
            '--tw-prose-counters': theme('colors.blue[500]'),
            '--tw-prose-bullets': theme('colors.blue[500]'),
            '--tw-prose-hr': theme('colors.blue[200]'),
            '--tw-prose-quotes': theme('colors.blue[900]'),
            '--tw-prose-quote-borders': theme('colors.blue[300]'),
            '--tw-prose-captions': theme('colors.blue[700]'),
            '--tw-prose-code': theme('colors.blue[900]'),
            '--tw-prose-code-bg': theme('colors.blue[50]'),
            '--tw-prose-pre-code': theme('colors.blue[100]'),
            '--tw-prose-pre-bg': theme('colors.blue[900]'),
            '--tw-prose-th-borders': theme('colors.blue[300]'),
            '--tw-prose-td-borders': theme('colors.blue[200]'),
            '--tw-format-th-bg': theme('colors.blue[50]'),
            '--tw-prose-invert-body': theme('colors.blue[200]'),
            '--tw-prose-invert-headings': theme('colors.white'),
            '--tw-prose-invert-lead': theme('colors.blue[300]'),
            '--tw-prose-invert-links': theme('colors.white'),
            '--tw-prose-invert-bold': theme('colors.white'),
            '--tw-prose-invert-counters': theme('colors.blue[400]'),
            '--tw-prose-invert-bullets': theme('colors.blue[600]'),
            '--tw-prose-invert-hr': theme('colors.blue[700]'),
            '--tw-prose-invert-quotes': theme('colors.pink[100]'),
            '--tw-prose-invert-quote-borders': theme('colors.blue[700]'),
            '--tw-prose-invert-captions': theme('colors.blue[400]'),
            '--tw-prose-invert-code': theme('colors.white'),
            '--tw-prose-invert-pre-code': theme('colors.blue[300]'),
            '--tw-prose-invert-pre-bg': 'rgb(0 0 0 / 50%)',
            '--tw-prose-invert-th-borders': theme('colors.blue[600]'),
            '--tw-prose-invert-td-borders': theme('colors.blue[700]'),
            '--tw-format-invert-th-bg': theme('colors.blue[700]'),
          },
        },
      }),
      container: {
        center: true,
      },
      colors: {
        'almost-white': 'hsl(0,0,98%)',
        'mediunm-gray': 'hsl(0,0,41%)',
        'almost-black': 'hsl(0,0,8%)',
      },
    },
  },
  plugins: [require('flowbite-typography', 'flowbite/plugin')],
};
