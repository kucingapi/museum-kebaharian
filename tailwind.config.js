/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './container/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {},
  },
  plugins: [require('@tailwindcss/typography'), require('daisyui')],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: '#01578F',
          'primary-content': '#FFFFFF',
          secondary: '#62B6CB',
          accent: '#FFE999',
          neutral: '#3B8BC4',
          'base-100': '#01578F',
          'base-content': '#000000',
          info: '#FFFFFF',
          success: '#16A249',
          warning: '#DB7706',
          error: '#DC2828',
        },
      },
    ],
  },
};
