/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        accent: '#10A37F'
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif']
      },
      spacing: {
        xl: '4rem',
        lg: '2rem'
      },
      maxWidth: {
        prose: '768px'
      }
    }
  },
  plugins: []
}
