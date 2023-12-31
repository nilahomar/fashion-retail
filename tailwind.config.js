/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts}",
    "./node_modules/flowbite/**/*.js"
  ],
  theme: {
    extend: {
      colors: {
        jade: {
          50: "#eafff5",
          100: "#cdfee5",
          200: "#a0fad1",
          300: "#63f2b9",
          400: "#25e29d",
          500: "#00bd7e",
          600: "#00a46e",
          700: "#00835c",
          800: "#00674a",
          900: "#00553e",
        },
      },
      screens: {
        "hover-hover": { raw: "(hover: hover)" },
        // '2xl': {'max': '1535px'},
        // 'xl': {'max': '1279px'},
        // 'lg': {'max': '1023px'},
        // 'md': {'max': '767px'},
        // 'sm': {'max': '639px'},
      },
      transitionDuration: {
        400: "400ms",
      },
    },
  },
};
