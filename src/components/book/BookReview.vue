<template>
  <div class="commnent">
    <p class="commnent-header">热门评论</p>
    <ul class="commnent-ul">
      <li  v-for="item in commentList" :key="item.id" class="commnent-ul-li">
        <img class="commnet-avatar" :src="`${bookApi}${item.author.avatar}`">
        <div class="commnent-body">
          <p><span class="commnent-nickname">{{item.author.nickname}}</span><span class="commnent-date">{{item.updated|formatDate}}</span></p>
          <p class="mui-ellipsis">{{item.title}}</p>
          <p class="commnent-content">{{item.content}}</p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import base from "@/api/base";
import {format_zh_CN,DATE_TIME_MINUTE_ZH_FMT} from '@/utils/day'
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
    formatDate(time) {
      return format_zh_CN(time,DATE_TIME_MINUTE_ZH_FMT);
    }
  },
}
</script>

<style scoped lang="less">
.commnent{
  .commnent-header{
    margin-left: 15px;
    font-size: 16px;
    color: #333;
  }
  .commnent-ul{
    max-height: 400px;
    overflow-y: auto;
  }
  .commnent-ul-li{
    margin-bottom: 30px;
    height: 120px;
    .commnet-avatar{
      height: 42px;
      width: 12%;
      margin: 6px;
      //border-radius: 25px;
    }
    .commnent-body{
      float: right;
      width: 84%;
      p{
        font-size: 6px;
        padding: 1px;
      }
      .commnent-content{
        display: -webkit-box;
        overflow: hidden;
        text-overflow: ellipsis;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 4;
        color: #8F8F94;

      }
      .commnent-nickname{
        color: @bgColor;
      }
      .commnent-date{
        float: right;
        font-size: 4px;
        color: #8F8F94;
      }
    }
  }


}
</style>
