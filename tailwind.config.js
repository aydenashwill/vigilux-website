// tailwind.config.js
module.exports = {
  content: ["./pages/**/*.{js,jsx}", "./components/**/*.{js,jsx}"],
  theme: { extend: {} },
  plugins: [],
};
  theme: {
    extend: {
      colors: {
        brand: {
          light: '#ffffff',
          DEFAULT: '#C32128',
          dark:  '#8B0000',
        },
        muted: '#1F1F1F',
      },
      fontFamily: {
        heading: ['Montserrat', 'sans-serif'],
        body:    ['Source Sans Pro', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
