/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,tsx}'],
  theme: {
    extend: {
      colors:{
        'Dark-elem': 'hsl(209, 23%, 22%)',
        'Dark-bg': 'hsl(207, 26%, 17%)',
        'Light-txt': 'hsl(200, 15%, 8%)',
        'Light-bg': 'hsl(0, 0%, 98%)',
        'Dark-txt': 'hsl(0, 0%, 100%)', //elemento branco
      }
    },
    screens: {
      'sm': '400px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    }
  },
  plugins: [],
}
