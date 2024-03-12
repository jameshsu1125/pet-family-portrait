/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
import color from 'tailwindcss/colors';
import { fontSize } from 'tailwindcss/defaultTheme';

delete color.lightBlue;
delete color.warmGray;
delete color.trueGray;
delete color.coolGray;
delete color.blueGray;

export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    fontSize: {
      ...fontSize,
    },
    colors: {
      ...color,
      primary: '#cc3333',
      secondary: '#e25744',
      line: '#00ca42',
      backgroundColor: '#f7f6f0',
      textColor: '#eee',
    },
    extend: {},
  },
  plugins: ['prettier-plugin-tailwindcss'],
};
