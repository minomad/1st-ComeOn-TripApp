/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      fontFamily: {
        suit: ['SUIT Variable'],
      },
      colors: {
        primary: '#3264FF',
        secondary: '#A8B2FF',
        thirdary: '#5D6FFF',
        accent: '#E03B69',
        lightPurple: 'rgba(168, 178, 255, 0.15)',
        gray: '#A6A6A6',
        gray2: '#6B6B6B',
        gray3: '#565656',
      },
      backgroundImage: {
        navColor:
          'linear-gradient(100deg, #74CCFF -1.69%, rgba(137, 151, 254, 0.9) 79.84%, rgba(150, 119, 253, 0.9) 129.86%)',
      },
    },
  },
  plugins: [],
};
