<template>
  <div class="flex justify-center text-3xl">
    11111112
    <Button class="text-3xl font-bold underline"> {{ btnText }} </Button>
  </div>
</template>
<script>
import { Button } from "ant-design-vue";

export default {
  name: "AButton",
  props: {
    btnText: {
      default: "登录",
    },
  },
  components: { Button },
};
</script>
