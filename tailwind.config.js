module.exports = {
  content: ["./public/index.html", "./src/**/*.{html,js}"],
  darkMode:'class',
  content: ["./public/index.html", "./src/**/*.{html,js}"],
  theme: {
    backgroundImage: {
      'sanFrancisco': "url('../img/sanFrancisco.jpg')",
      'sanFranciscoDesktop': "url('../img/sanFranciscoDesktop.jpg')",
      'yosemite': "url('../img/yosemite.jpg')",
      'LA': "url('../img/LA.jpg')",
      'seattle': "url('../img/seattle.jpg')",
      'new_york': "url('../img/new_york.jpg')",
      'norway': "url('../img/norway.jpg')",
      'sydney': "url('../img/sydney.jpg')",
      'miami': "url('../img/miami.jpg')",
      'switzerland': "url('../img/switzerland.jpg')",
      'bali': "url('../img/bali.jpg')",
      'norway': "url('../img/norway.jpg')",
      'chicago': "url('../img/chicago.jpg')",
      'europe': "url('../img/europe.jpg')",
      'iceland': "url('../img/iceland.jpg')",

    },
    backgroundColor: theme => ({
      ...theme('colors'),
      'principal': '#CC2D4A',
      'secondary': '#8FA206',
      'tertiary': '#61AEC9',
    }),
    textColor: {
      'principal': '#CC2D4A',
      'secondary': '#8FA206',
      'tertiary': '#61AEC9',
      'white': "#FFF",
      'black':"#000",
      'gray':{
        200:"#E5E7EB",
        300:"#e2e8f0",
        400:"#D1D5DB"
      }
    },
    fontFamily: {
      Montserrat: ["Montserrat", "sans-serif"],
    },
    extend:{
      spacing:{
        '128':'45rem'
      }
    }
  },
  variants:{
    width:["responsive", "hover", "focus"]
  },
  plugins: [
    require('postcss-import'),
    require('tailwindcss')('./tailwind.config.js'),
    require('autoprefixer'),
  ]
};