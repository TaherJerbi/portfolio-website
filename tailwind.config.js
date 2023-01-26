/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "brand-blue": "#348AA7",
        "brand-green-light": "#F2F4F3",
        "brand-blue-dark": "#1C1D1F",
        "brand-marron-dark": "#31312B",
        "brand-beige-light": "#FFFCF9",
        "brand-red": "#FF5A5F",
        "brand-beige-ecru": "#FFD6AD",
      },
      boxShadow: {
        "brand-sm": "5px 5px 0px #1C1D1F",
        "brand-md": "7px 7px 0px #1C1D1F",
        "brand-lg": "10px 10px 0px #1C1D1F",
      },
      dropShadow: {
        "brand-xs": "3px 3px 0px #1C1D1F",
        "brand-xs-reverse": "-3px 3px 0px #1C1D1F",
        "brand-sm": "5px 5px 0px #1C1D1F",
        "brand-md": "7px 7px 0px #1C1D1F",
        "brand-lg": "10px 10px 0px #1C1D1F",
      },
    },
  },
  plugins: [],
};
