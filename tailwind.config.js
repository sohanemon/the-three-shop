/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
    './src/app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#0C120C',
        secondary: '#E3B23C',
        accent: '#EA3546',
        base: '#FFFFC6',
      },
    },
  },
  plugins: [],
};
