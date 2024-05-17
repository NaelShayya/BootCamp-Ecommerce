/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        maroon: {
          '50': '#f9f2f2',
          '100': '#f2e5e5',
          '200': '#dcbcbc',
          '300': '#c5a3a3',
          '400': '#996666',
          '500': '#6d4040',
          '600': '#5d3535',
          '700': '#540216',
          '800': '#4a0012',
          '900': '#3d000f',
          'lighter-hover': '#732b2b',
          'lighter-focus': '#7f3636',
        },
      },
    },
  },
  plugins: [],
}

