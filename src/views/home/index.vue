<template>
  <a-layout class="h-full SPB-home" id="components-layout-demo-custom-trigger">
    <a-layout>
      <a-layout-header class="flex justify-between bg-slate-50">
        <div>首页</div>
        <div>
          <a-icon
            style="transition: color 0.3s"
            class="px-6 text-lg leading-10 cursor-pointer"
            :type="collapsed ? 'menu-fold' : 'menu-unfold'"
            @click="() => (collapsed = !collapsed)"
          />
        </div>
      </a-layout-header>
      <a-layout-content
        :style="{
          margin: '24px 16px',
          padding: '24px',
          background: '#fff',
          minHeight: '280px',
        }"
      >
        Content
      </a-layout-content>
    </a-layout>
    <a-layout-sider
      theme="dark"
      v-model="collapsed"
      :trigger="null"
      collapsible
    >
      <div class="w-10 h-10 mx-auto my-2 text-center bg-green-400">
        <strong>SPB</strong>
      </div>
      <SiderMenu :HotNotesArray="HotNotesArray"></SiderMenu>
    </a-layout-sider>
  </a-layout>
</template>

<script>
import { getRoutes } from "@/api/sys/menu";
import { Icon, Layout } from "ant-design-vue";
import SiderMenu from "./components/SiderMenu.vue";
const LayoutSider = Layout.Sider;
const LayoutHeader = Layout.Header;
const LayoutContent = Layout.Content;

export default {
  name: "HomeView",
  components: {
    ALayout: Layout,
    ALayoutSider: LayoutSider,
    ALayoutHeader: LayoutHeader,
    ALayoutContent: LayoutContent,
    AIcon: Icon,
    SiderMenu,
  },
  data() {
    return {
      name: "111",
      collapsed: false,
      HotNotesArray: [1, 2, 3],
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

    backToLogin() {
      this.$router.push("/login");
    },
  },
  created() {
    console.log("this.getRoute");
    this.getRoute();
  },
};
</script>

<style lang="less" scoped>
.SPB-home .ant-layout .ant-layout-header {
  padding: 0 0 0 30px;
  background-color: white;
}
</style>
