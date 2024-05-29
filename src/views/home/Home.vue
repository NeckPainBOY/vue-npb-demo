<template>
  <div>111</div>
</template>

<script>
import { getRoutes } from "@/api/sys/menu";
console.log("home");
export default {
  name: "HomeView",
  data() {
    return {
      name: "111",
    };
  },
  methods: {
    getRoute() {
      getRoutes.then((res) => {
        console.log("res");
        console.log(res);
      });
      // axios.get("/data/getRoutes").then((res) => {
      //   console.log(res.data);
      // });
    },
  },
  created() {
    console.log("this.getRoute");
    this.getRoute();
  },
};
</script>

<style lang="less" scoped></style>
