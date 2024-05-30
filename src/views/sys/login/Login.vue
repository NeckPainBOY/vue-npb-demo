<template>
  <a-layout class="h-full">
    <!-- <a-layout-header>header</a-layout-header> -->
    <a-layout-content>
      <div class="flex justify-center w-full h-full overflow-auto">
        <div class="w-1/2 h-full">
          <div
            class="w-full h-full bg-center bg-no-repeat bg-cover bg-SBR-logo"
          ></div>
        </div>
        <div class="flex flex-col justify-center w-1/2 h-full">
          <div class="w-1/2 py-5 mx-auto text-center bg-white rounded-md">
            <p class="my-5">登录</p>
            <a-row class="mb-5">
              <a-col :span="6">用户名：</a-col>
              <a-col :span="16"><a-input placeholder="Basic usage" /></a-col>
            </a-row>
            <a-row class="mb-5">
              <a-col :span="6">密码：</a-col>
              <a-col :span="16"
                ><a-input-password placeholder="input password"
              /></a-col>
            </a-row>
            <a-button type="primary">登录</a-button>
          </div>
        </div>
      </div>
    </a-layout-content>
    <a-layout-footer>Footer</a-layout-footer>
  </a-layout>
</template>

<script>
import { Layout, Button, Col, Row, Input } from "ant-design-vue";
// const LayoutHeader = Layout.Header;
const LayoutContent = Layout.Content;
const LayoutFooter = Layout.Footer;
const InputPassword = Input.Password;

export default {
  name: "LoginView",
  components: {
    ALayout: Layout,
    ALayoutFooter: LayoutFooter,
    ALayoutContent: LayoutContent,
    ACol: Col,
    ARow: Row,
    AButton: Button,
    AInput: Input,
    AInputPassword: InputPassword,
    // ALayoutHeader: LayoutHeader,
  },
  data() {
    return {};
  },
  created() {},
};
</script>

<style lang="less" scoped></style>
