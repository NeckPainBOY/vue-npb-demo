<template>
  <a-layout>
    <a-layout>
      <a-layout-content>
        <a-row>
          <a-col :span="14">
            <img class="logo" alt="Vue logo" src="../assets/logo.svg" />
          </a-col>
          <a-col :span="10">
            <div class="loginForm">
              <p class="loginFont">登录</p>
              <a-row>
                <a-col :span="6">用户名：</a-col>
                <a-col :span="16"><a-input placeholder="Basic usage" /></a-col>
              </a-row>
              <a-row>
                <a-col :span="6">密码：</a-col>
                <a-col :span="16"
                  ><a-input-password placeholder="input password"
                /></a-col>
              </a-row>
              <a-button type="primary">login</a-button>
            </div>
          </a-col>
        </a-row></a-layout-content
      >
    </a-layout>
    <a-layout-footer>Footer</a-layout-footer>
  </a-layout>
</template>

<script>
// @ is an alias to /src

export default {
  name: "LoginView",
  data() {
    return {
      objectItem: require("@/assets/mockjs").default.list,
    };
  },
  created() {
    console.log("this.objectItem");
    console.log(this.objectItem);
  },
};
</script>

<style lang="less" scoped>
.loginForm {
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 400px;
  margin: 0 auto;
  margin-top: calc(100vh - 650px);
  min-height: 300px;
  background: rgba(0, 0, 0, 0.2);
  text-align: center;
}
.loginForm .ant-row {
  margin-top: 30px;
}
.loginForm .loginFont {
  font-size: 30px;
  font-weight: bolder;
}

.loginForm .ant-btn-primary {
  margin: 30px auto;
  width: 50%;
}

body .logo {
  width: 100%;
  height: calc(100vh - 69px);
}
</style>
