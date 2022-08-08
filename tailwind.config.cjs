/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  theme: {
    extend: {
      backgroundImage: {
        banner: "url('public/Images/banner.png')",
        banner2: "url('public/Images/banner2.png')",
      },
    },
  },
  plugins: [],
};
