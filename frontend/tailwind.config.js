const colors = require('tailwindcss/colors');

/**
 * Surfaces: BG900/BG800 + Border400
 * 
 * Primary Purple 500
 * Secondary Emerald 300
 * 
 * Success: 
 * Error: 
 */

const config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      letterSpacing: {
        widest: '.25em'
      },
      boxShadow: {
        offset: '10px 10px 0px 2px rgba(167,139,250, 0.1)' 
      },
      colors: {
        background: {
          50: '#74687E',
          100: '#5c5066',
          200: '#4e4456',
          300: '#3f3746',
          400: '#342e3a',
          500: '#28222e',
          600: '#201c25',
          700: '#1b171f',
          800: '#17131b',
          900: '#0F0C12'
        },
        // background: {
        //   50: '#E6E2F3',
        //   100: '#BAB5CB',
        //   200: '#A09DAB',
        //   300: '#756E8A',
        //   400: '#5D4F6A',
        //   500: '#28222E',
        //   // 600: '#3E374A',
        //   600: '#201C25',
        //   700: '#1B171F',
        //   800: '#15101A',
        //   900: '#0E0912'
        // },
      }
    }
  },
  plugins: [require('@tailwindcss/aspect-ratio'), require('@tailwindcss/forms'), require('tailwindcss-children'), require('./src/tw/scrollbar')]
};

module.exports = config;

// Primary: Emerald-300
// Secondary: Purple-800
