module.exports = {
  content: ['./src/**/*.{js,md,njk,svg}'],
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
    require('tailwindcss-debug-screens'),
    require('@tailwindcss/aspect-ratio'),
  ],
  theme: {
    container: {
      center: true,
      padding: '1.5rem',
    },
    debugScreens: {
      position: ['bottom', 'right'],
    },
    extend: {
      fontFamily: {
      poppins: ['Poppins', 'sans-serif'], 
      IMB: ['IBM Plex Sans', 'sans-serif'],
    },
    colors: {
      sand: '#f9d5ab',
    },
    },
  },
}
