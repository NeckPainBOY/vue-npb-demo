// 使用 Mock
let Mock = require("mockjs");

const sysRoute = {
  path: "/system",
  name: "System",
  component: "LAYOUT",
  redirect: "/system/account",
  // meta: {
  //   icon: "ion:settings-outline",
  //   title: "routes.demo.system.moduleName",
  // },
  children: [
    {
      path: "account",
      name: "AccountManagement",
      // meta: {
      //   title: "routes.demo.system.account",
      //   ignoreKeepAlive: true,
      // },
      component: "/demo/system/account/index",
    },
    {
      path: "role",
      name: "RoleManagement",
      // meta: {
      //   title: "routes.demo.system.role",
      //   ignoreKeepAlive: true,
      // },
      component: "/demo/system/role/index",
    },
  ],
  message: "success",
  code: 200,
};

export let routes = Mock.mock(
  "http://192.168.31.200:8080/data/getRoutes",
  "get",
  sysRoute
);

// 输出结果
// console.log(JSON.stringify(data, null, 4));
