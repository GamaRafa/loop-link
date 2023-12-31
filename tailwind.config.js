/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,ts}'],
  theme: {
    extend: {
      'soft-mint': '#9ed8b6',
      'lavender-mist': '#c9a7e3',
      'peach-sorbet': '#f5c6aa',
      'powder-blue': '#add8e6',
      'buttercream': '#f8e3a1'
    },
  },
  plugins: [require('@tailwindcss/aspect-ratio')
,require('@tailwindcss/forms')
,require('@tailwindcss/line-clamp')
,require('@tailwindcss/typography')
],
};
