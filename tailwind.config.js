/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        float: 'float 3s ease-in-out infinite',
        floatReverse: 'floatReverse 3s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-40px)' },
        },
        floatReverse: {
          '0%, 100%': { transform: 'translateX(0px)' },
          '50%': { transform: 'translateX(40px)' },
        }
      }
    },
  },
  plugins: [],
}