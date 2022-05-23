module.exports = {
  content: ["./src/**/*.{html,js}", './src/**/*.{html,js}', './node_modules/tw-elements/dist/js/**/*.js'],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui", 'tw-elements/dist/plugin')],
}
