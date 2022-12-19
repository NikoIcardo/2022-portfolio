/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors');
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
    colors,
    backgroundImage: {
      '3js': './client-source/photos/3js.png',
      'bug-track': './client-source/photos/bug-track.png',
      'contact-keeper': './client-source/photos/contact-keeper.png',
      'github-finder': './client-source/photos/github-finder.png',
      jsagio: './client-source/photos/jsagio.png',
      'original-portfolio': './client-source/photos/original-portfolio.png',
      'react-principles': './client-source/photos/react-principles.png',
      'sight-seeing': './client-source/photos/sight-seeing.png',
      'speedyfingers.net': './client-source/photos/speedyfingers.net.png',
    },
  },
  plugins: [],
};
