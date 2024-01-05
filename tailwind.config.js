/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        main: "#FF9143",
        secondery: {
          '100': "#1A1A1A",
          '200': "#262A2C",
          '300': "#696969",
          '400': "#ffffff",
        },
        grey: {
          '100': "#E5E6EB",
          '200': "#D3D5DA",
          '300': "#9EA3AE",
          '400': "#6C727F",
          '500': "#4D5461",
          '600': "#394150",
          '700': "#212936",
          '800': "#0B0A0F ",
        },
      },
      fontFamily:{
        'syne': 'Syne',
        'rubik': 'rubik',
      },
    },
  },
  plugins: [],
};
