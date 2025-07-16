/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./*.html",
    "./src/**/*.js",
    "./js/**/*.js"
  ],
  theme: {
    extend: {
      colors: {
        'dental-blue': '#2563eb',
        'dental-green': '#10b981',
        'dental-red': '#ef4444',
        'dental-yellow': '#f59e0b'
      },
      fontFamily: {
        'sans': ['Inter', 'ui-sans-serif', 'system-ui']
      }
    },
  },
  plugins: [],
}
