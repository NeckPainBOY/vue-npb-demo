const { defineConfig } = require("@vue/cli-service");
module.exports = defineConfig({
  transpileDependencies: true,
  css: {
    loaderOptions: {
      postcss: {
        postcssOptions: {
          plugins: [
            // require("ant-design-vue/dist/antd"),
            require("tailwindcss"),
            require("autoprefixer"),
          ],
        },
      },
    },
  },
});
