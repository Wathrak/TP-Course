/** @type {import('tailwindcss').Config} */
export const content = ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}']
export const theme = {
  extend: {
    colors: {
      green: '#10b981',
    },
  },
}
export const plugins = [require('flowbite/plugin')]
