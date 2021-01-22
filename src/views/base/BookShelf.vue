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
          <img class="list-avatar" :src="`${bookCoverApi}${item.cover}`" @click="handleRead(item)" />
        </template>
        <template #body>
          <p style="margin-top: 12px"><span class="list-title">{{item.title}}</span></p>
          <p><span>作者：{{item.author}}</span></p>
          <p class="list-content">连载至：{{item.lastChapter}}</p>
          <span class="btn-remove iconfont icon-ashbin-fill" @click="handleDel(item,index)"></span>
        </template>
      </base-list>
    </template>
  </base-page>
</template>

<script>
import BasePage from "@/components/base/BasePage";
import {read, save} from "@/utils/storage";
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
  computed:{
    // dataSource(){
    //   return this.bookList;
    // }
  },
  methods:{
    //初始化书架
    init(){
      let bookShelf = JSON.parse(read('bookShelf')||'{}');
      for (let i in bookShelf){
        this.bookList.push(bookShelf[i])
        console.log(this.bookList)
      }
    },
    //移除书架书籍
    handleDel(book,index){
      let bookShelf = JSON.parse(read('bookShelf')||'{}');
      let vm = this;
      this.$dialog.confirm({
        title: '提示',
        message: '确定要从书架中移除？',
        confirmButtonColor: '#ee0a24',
        cancelButtonColor:'#00C98C',
        // theme: 'round-button',
      }).then(()=>{
        delete bookShelf[book.id]
        // delete vm.bookList[index]
        vm.bookList= [];
        save('bookShelf',JSON.stringify(bookShelf))
        vm.init();
        this.$notify({
          type: 'success',
          background: '',
          message: '移除书籍成功'
        })
      }).catch(()=>{
        this.$notify({
          type: 'success',
          message: '取消操作'
        })
      })
    },
    //阅读书籍
    handleRead(book){
      this.$router.push({
        path: `/book/read/${book.id}`,
        query:{
          id: book.id
        }
      })
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
