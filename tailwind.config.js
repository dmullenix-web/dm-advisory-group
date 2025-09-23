
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: { DEFAULT: '#1891ac', dark: '#13758a' },
        accent: '#1eb7d9',
        surface: '#d2ecf9',
        line: '#a5d9f3',
        text: '#111111',
        muted: '#35525b'
      },
      borderRadius: { '2xl': '1.25rem' },
      boxShadow: { card: '0 8px 24px rgba(2,8,23,.06)' }
    }
  },
  plugins: []
};
