/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./**/*.tsx'],
  theme: {
    extend: {
      gridTemplateRows: {
        10: 'repeat(10, minmax(0, 1fr))',
      },
    },
    fontFamily: {
      main: ['Courier New', 'monospace'],
    },
  },
  plugins: [],
};
