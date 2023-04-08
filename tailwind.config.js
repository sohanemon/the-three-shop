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
        secondary: 'rgb(255 90 60 / var(--tw-text-opacity))',
        accent: '#EA3546',
        base: 'rgb(255 255 230 / var(--tw-bg-opacity))',
      },
    },
  },
  plugins: [],
};
