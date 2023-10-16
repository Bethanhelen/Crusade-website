/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html","./about.html","./programs.html","./contact.html","./main.js"],
  theme: {
    extend: {
      fontFamily: {
        sans:["Nunito Sans", "sans-serif"],
    },
    backgroundImage: {
      'home': "url('/img/Home.png')",
      'about': "url('/img/About.png')",
      'programs': "url('/img/Programs.png')",
      'contact': "url('/img/Contact Us.png')",
    },
    fontWeight:{
    sm:["200"],
    lg:["300"],
    xl:["400"],
    "2xl":["500"],
    "3xl":["600"],
    "4xl":["700"],
    "5xl":["800"],
    },
  },
},
  plugins: [],
};