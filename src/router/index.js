import Vue from "vue";
import VueRouter from "vue-router";
// import { component } from "vue/types/umd";
// import LoginView from "../views/Login.vue";
import { basicRoutes } from "./routes/basic";

Vue.use(VueRouter);
const routes = [...basicRoutes];

export const router = new VueRouter({
  routes,
});
