<template>
  <div id="app-home">
    <van-sticky>
      <home-header/>
    </van-sticky>
    <home-swipe class="swipe"/>
    <home-grid/>
  </div>
</template>
<script>
  import HomeHeader from '@/components/home/HomeHeader'
  import HomeSwipe from '@/components/home/HomeSwipe'
  import HomeGrid from '@/components/home/HomeGrid'

  export default {
    name: "Home",
    components: {
      HomeHeader,
      HomeSwipe,
      HomeGrid
    },
    data() {
      return {

      };
    },
    created() {
      this.init();
    },
    methods: {
      init() {
        // this.$http
        //   .get("/api/v1/test/list")
        //   .then((res) => {
        //     console.log(res);
        //   })
        //   .catch((e) => {
        //     console.log(e);
        //   });
      },
    },
  };
</script>
<style lang="less" scoped>
  .swipe{
    margin-top: 10px;
  }
</style>
