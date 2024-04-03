/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        primaryRegular: ['Regular'],
        secMedium: ['Medium'],
        secBold: ['Bold'],
        secSemiBold: ['SemiBold'],
        secThin: ['Thin'],
      }
    },
  },
  plugins: [],
}

