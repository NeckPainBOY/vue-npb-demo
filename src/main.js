import Vue from "vue";
import App from "./App.vue";
import store from "./store";
// import Antd from "ant-design-vue";
import { router } from "./router";
import "@/mockjs/index";
import "@/assets/css/index.less";
import "@/assets/css/tailwindcss.css";
import "ant-design-vue/dist/antd.css";

Vue.config.productionTip = false;

// 看情况要弄成按需引入还是自己二次封装下
// Vue.use(Antd);

console.log(router);
new Vue({
  el: "#app",
  store,
  router,
  render: (h) => h(App),
});
