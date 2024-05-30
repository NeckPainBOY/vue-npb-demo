// const plugin = require("tailwindcss/plugin");

module.exports = {
  purge: ["./src/**/*,{js,jsx,vue,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: {
        "SBR-logo": "url('@/assets/logo.svg')",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    // addComponents：用于注册新的静态工具样式
    // plugin(function ({ addUtilities }) {
    //   const minHeight = {
    //     ".min-h-267": {
    //       minHeight: "267px",
    //     },
    //   };
    //   addUtilities(minHeight);
    // }),
  ],
};
