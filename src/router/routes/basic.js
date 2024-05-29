export const basicRoutes = [
  {
    // path: "/",
    // name: "ROOT",
    // component: "LATOUT",
    // redirect: "/home",
    // children: {
    path: "/home",
    name: "Home",
    component: () => import("@/views/home/Home.vue"),
    // },
  },
  {
    path: "/login",
    name: "Login",
    component: () => import("@/views/sys/login/Login.vue"),
  },
];
