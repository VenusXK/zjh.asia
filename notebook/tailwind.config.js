/** @type {import('tailwindcss').Config} */
module.exports = {
  important: true,
  darkMode: 'class',
  theme: {
    extend: {},
    screens: {
      'sm': {'max': '900px'},
      // => @media (min-width: 640px and max-width: 767px) { ... }

      'md': {'min': '900px', 'max': '1200px'},
      // => @media (min-width: 768px and max-width: 1023px) { ... }

      'lg': {'min': '1200px', 'max': '1279px'},
      // => @media (min-width: 1024px and max-width: 1279px) { ... }

      'xl': {'min': '1280px', 'max': '1600px'},
      '2xl': {'min': '1600px', 'max': '2240px'},

      '3xl': {'min': '2240px'},
      // => @media (min-width: 1536px) { ... }
    },
  },
  plugins: [],
}
