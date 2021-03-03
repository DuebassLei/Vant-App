<template>
  <base-page title="我的资料">
    <template #left>
      <span class="iconfont icon-hot-fill">
      </span>
    </template>
    <van-row style="text-align: center;">
      <van-image
          width="100"
          height="100"
          lazy-load
          round
          src="https://img01.yzcdn.cn/vant/cat.jpeg"
          style="padding-top: 4px"
      />
    </van-row>
    <van-cell-group>
      <van-cell title="用户名" :value="userInfo.userName" ></van-cell>
      <van-cell title="年龄" :value="userInfo.userAge+'岁'" ></van-cell>
      <van-cell title="联系" :value="userInfo.userTel" ></van-cell>
      <van-cell title="地址" :value="userInfo.userAddress" ></van-cell>
      <van-cell title="系统设置" value="" ></van-cell>
      <van-cell title="关于" value="" ></van-cell>

    </van-cell-group>
  </base-page>
</template>
<script>
import BasePage from "@/components/base/BasePage";
export default {
  name: "User",
  components: {BasePage},
  data(){
    return {
      userInfo:{
        userName: '海边的小溪鱼',
        userCode: 'DuebassLei',
        userAge: 18,
        userAddress: '云南省昆明市五华区',
        userTel: '151217693xx'
      }
    }
  }
};
</script>
<style lang="less" scoped>
.iconfont{
  color: yellow;
  font-size: 32px;
}
</style>
