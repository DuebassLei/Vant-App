<template>
  <base-page title="我的书架">
    <template v-if="bookList.length < 1">
      <van-empty description="暂无收藏">
        <van-button  class="btn-default">找本书看看</van-button>
      </van-empty>
    </template>
    <template v-else>

      <base-list :data-source="item" v-for="(item,index) in bookList" :key="index">
        <template #avatar>
          <img class="list-avatar" :src="`${bookCoverApi}${item.cover}`"/>
        </template>
        <template #body>
          <p><span class="commnent-nickname">{{item.title}}</span></p>
          <p><span>{{item.author}}</span></p>
          <p class="commnent-content">{{item.lastChapter}}</p>
        </template>
      </base-list>
    </template>
  </base-page>
</template>

<script>
import BasePage from "@/components/base/BasePage";
import {read} from "@/utils/storage";
import BaseList from "@/components/base/BaseList";
import base from "@/api/base"
export default {
  name: "BookShelf",
  components: {BaseList, BasePage},
  data(){
    return{
      bookList:[],
      bookCoverApi: base.bookCoverApi
    }
  },
  created() {
    this.init();
  },
  methods:{
    //初始化书架
    init(){
      let bookShelf = JSON.parse(read('bookShelf')||'{}');
      for (let i in bookShelf){
        this.bookList.push(bookShelf[i])
        console.log(this.bookList)
      }
    }
  }
}
</script>

<style scoped lang="less">
.btn-default{
  width: 160px;
  height: 40px;
}
</style>
