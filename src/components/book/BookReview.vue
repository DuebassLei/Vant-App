<template>
  <div class="commnent">
    <p class="commnent-header">热门评论</p>
    <ul class="commnent-ul">
      <li  v-for="item in commentList" :key="item.id" class="commnent-ul-li">
        <img class="commnet-avatar" :src="`${bookApi}${item.author.avatar}`">
        <div class="commnent-body">
          <p><span>{{item.author.nickname}}</span><span>日期</span></p>
          <p class="mui-ellipsis">{{item.title}}</p>
          <p>{{item.content}}</p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import base from "@/api/base";
export default {
  name: "BookReview",
  props:{
    commentList:{
      type: Array,
      default:()=>{
        return []
      }
    }
  },
  data(){
    return{
      bookApi: base.bookCoverApi,
    }
  },
  filters: {
    // formatDate(time) {
    //   var date = new Date(time);
    //   return formatDate(date, 'yyyy-MM-dd hh:mm');
    // }
  },
}
</script>

<style scoped lang="less">
.commnent{
.commnent-header{
  margin-left: 15px;
  font-size: 18px;
  color: #333;
}
.commnent-ul{
  max-height: 400px;
  overflow-y: auto;
}
.commnet-avatar{
  height: 45px;
  width: 45px
}
.commnent-body{
p{
  font-size: 12px;
}
:nth-child(1){
  display: flex;
  justify-content: space-between;
}
:nth-child(2){
  color: #333;
}
}
.fenlei{
  height: 500px;
}
}
</style>
