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
    colors: { ...colors },
    extend: {
      width: {
        fit: 'fit-content',
      },
    },
  },
  variants: {
    extend: {},
  },
  corePlugins: {
    container: false,
  },
  plugins: [
    function ({ addComponents }) {
      addComponents({
        '.container': {
          width: '100%',
          marginLeft: 'auto',
          marginRight: 'auto',
          '@screen sm': {
            maxWidth: '600px',
            paddingLeft: '2rem',
            paddingRight: '2rem',
          },
          '@screen md': {
            maxWidth: '720px',
          },
          '@screen lg': {
            maxWidth: '984px',
          },
          '@screen xl': {
            maxWidth: '1240px',
          },
        },
      });
    },
    function ({ addComponents }) {
      addComponents({
        '.z-above-map': {
          zIndex: 1000,
        },
      });
    },
  ],
};
