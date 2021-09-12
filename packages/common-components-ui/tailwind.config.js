const colors = require('tailwindcss/colors');

module.exports = {
  purge: ['./src/**/*.{ts,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      sans: ['Helvetica', 'ui-sans-serif', 'sans-serif', 'system-ui'],
      serif: ['Helvetica-Neue', 'ui-serif', 'Georgia'],
      mono: ['ui-monospace', 'SFMono-Regular'],
    },
    container: {
      center: true,
    },
    colors: { ...colors },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
