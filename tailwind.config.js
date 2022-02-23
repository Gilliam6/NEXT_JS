module.exports = {
  content: ["./pages/**/*.{js,ts,jsx,tsx}",
  "./components/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
      spacing: {
        '200':'967px'
      },
    },
  },
  plugins: [require("daisyui")],
}