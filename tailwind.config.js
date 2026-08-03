/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          paper: '#FBF9F5',
          charcoal: '#18181A',
          darkSlate: '#242528',
          gold: '#C5A880',
          goldLight: '#E8D5C4',
          beige: '#F3EFEA',
          stone: '#8E8C89',
        }
      },
      fontFamily: {
        serif: ['Playfair Display', 'Cormorant Garamond', 'Georgia', 'serif'],
        sans: ['Plus Jakarta Sans', 'Inter', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
