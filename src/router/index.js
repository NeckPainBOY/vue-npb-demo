import Vue from "vue";
import VueRouter from "vue-router";
import LoginView from "../views/Login.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: LoginView,
  },
];

const router = new VueRouter({
  routes,
});

export default router;
