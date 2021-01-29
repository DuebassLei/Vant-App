<template>
  <div class="card">
    <slot name="cover">
      <img src="https://static.runoob.com/images/mix/img_avatar.png" alt="Avatar" style="width:100%">
    </slot>
    <div class="container">
     <slot name="container">
       <h4><b>标题</b></h4>
       <p>卡片描述</p>
     </slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "BaseCard"
}
</script>

<style scoped lang="less">
.card {
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
  border-radius: 8px;
  transition: 0.3s;
  width: 98%;
  height: 100px;
  border-radius: 8px;
  margin: 2px 1px;
}

.card:hover {
  box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
}

img {
  height: 50px;
  width: 50px;
  margin-left: 25px;
  border-radius: 5px 5px 0 0;
  display: flex;
  justify-content: center;
  flex-direction: column;
}

.container {
  padding: 2px 16px;
}
</style>
