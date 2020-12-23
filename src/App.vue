<template>
  <div id="app">
    <keep-alive>
      <router-view v-if="$route.meta.keepAlive"></router-view>
    </keep-alive>
    <router-view v-if="!$route.meta.keepAlive"></router-view>
  </div>
</template>

<script>
  export default {
   name: "App"
  };
</script>

<style lang="less" scoped>
/*#app{*/
/*    color: rgb(62, 62, 62);*/
/*    line-height: 1.6;*/
/*    word-spacing: 0px;*/
/*    letter-spacing: 0px;*/
/*    font-family: 'Helvetica Neue', Helvetica, 'Hiragino Sans GB', 'Microsoft YaHei', Arial, sans-serif;*/

/*    background-image: linear-gradient(90deg, rgba(50, 0, 0, 0.05) 3%, rgba(0, 0, 0, 0) 3%), linear-gradient(360deg, rgba(50, 0, 0, 0.05) 3%, rgba(0, 0, 0, 0) 3%);*/
/*    background-size: 10px 10px;*/
/*    background-position: center center;*/
/*}*/

</style>
