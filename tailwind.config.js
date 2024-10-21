/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{jsx,js,tsx,ts}", "./index.html"],
  theme: {
    fontFamily : {
      sans: ["Quicksand", "sans-serif"],
    },
    extend: {
      colors : {
        primary : {
          blue : "#100C2F",
          purple : "#7877DF"
        },
        complementary: {
          white : "#EBE6E0",
          black : "#2D2D2D"
        }
      }
    },
  },
  plugins: [],
}

