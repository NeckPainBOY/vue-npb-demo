const { defineConfig } = require("@vue/cli-service");

const path = require("path");
function resolve(dir) {
  return path.join(__dirname, dir); // path.join(__dirname)设置绝对路径
}
module.exports = defineConfig({
  // 静态资源访问路径
  publicPath: "./",
  transpileDependencies: true,
  // webpack 的配置对象
  configureWebpack: {
    // 配置Webpack模块解析的方式，使得你可以通过模块名字而不是相对路径来引入模块
    resolve: {
      // 设置路径别名
      alias: {
        "@/": resolve("src/"),
      },
    },
  },
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
