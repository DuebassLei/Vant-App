<template>
  <base-page title="个人中心">
    <template #left>
      <span class="iconfont icon-hot-fill">
      </span>
    </template>
    <h3 style="text-align: center">个人中心</h3>
  </base-page>
</template>
<script>
import BasePage from "@/components/base/BasePage";
export default {
  name: "User",
  components: {BasePage},
};
</script>
<style lang="less" scoped>
.iconfont{
  color: yellow;
  font-size: 32px;
}
</style>
