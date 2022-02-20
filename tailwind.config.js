module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      backgroundImage: {
        'i-like-food': "url('../public/img/i-like-food.svg')"
      }
    },
    darkMode: 'class'
  },
  plugins: [require('daisyui')]
};
