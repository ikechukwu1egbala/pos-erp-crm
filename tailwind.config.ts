export default {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './lib/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#fffaf3',
          100: '#fdf0d7',
          200: '#f7d79a',
          300: '#f0b85d',
          400: '#d18d2d',
          500: '#a96b2b',
          600: '#834d1f',
          700: '#5f3618',
          800: '#3d220f',
          900: '#25160d'
        },
        slatewarm: '#f9f3ed',
        gold: '#d4a451'
      },
      boxShadow: {
        soft: '0 18px 45px -20px rgba(92, 62, 35, 0.28)'
      }
    }
  },
  plugins: []
};
