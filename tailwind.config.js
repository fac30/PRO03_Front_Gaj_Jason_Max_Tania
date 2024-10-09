/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'max-lg': { 'max': '380px' }, // Apply styles below 380px
        'min-lg': { 'min': '900px' }, // Apply styles above 900px
        'custom-range': { 'min': '475px', 'max': '900px' }, // Between 475px and 900px
      },
    },
  },
  plugins: [],
};

