module.exports = {
  content: ["./pages/**/*.{js,jsx}", "./components/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        brand: "#ff6a00",
        ink: "#0a0a0a",
        panel: "#0f0f10"
      },
      fontFamily: {
        heading: ["Montserrat", "system-ui", "sans-serif"],
        body: ["Source Sans Pro", "system-ui", "sans-serif"]
      },
      letterSpacing: {
        tactical: "0.22em"
      },
      boxShadow: {
        vx: "0 0 0 1px rgba(255,255,255,0.08), 0 14px 40px rgba(0,0,0,0.55)"
      }
    }
  },
  plugins: []
};
