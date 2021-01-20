<template>
  <base-page title="介绍">
    <van-row type="flex" justify="center">
      <van-col :span="6">
        <van-image :src="`${bookApi}${bookInfo.cover}`" :style="{margin: '5px',borderRadius: '10px'}"></van-image>
      </van-col>
      <van-col :span="16">
        <van-row >
            <span :style="{fontSize: '20px'}">{{bookInfo.title}}</span>
        </van-row>
        <van-row type="flex" justify="center">
          <van-col :span="5">
            <span :style="{fontSize: '12px'}">{{bookInfo.cat}}</span>
          </van-col>
          <van-col :span="1">
            <span :style="{fontSize: '12px',padding: '0 2px'}">|</span>
          </van-col>
          <van-col :span="5">
            <span :style="{fontSize: '12px',textAlign:'center'}">{{bookInfo.majorCate}}</span>
          </van-col>
          <van-col :span="1">
            <span :style="{fontSize: '12px',padding: '0 2px'}">|</span>
          </van-col>
          <van-col :span="5" >
            <span :style="{fontSize: '12px'}">{{bookInfo.wordCount | renderWordCount}}字</span>
          </van-col>
        </van-row>
        <van-row type="flex" justify="center">
          <van-col :span="4">
            <span :style="{fontSize: '12px'}">{{bookInfo.isSerial?'连载中':'完结'}}</span>
          </van-col>
          <van-col :span="1">
            <span :style="{fontSize: '12px',padding: '0 2px'}">|</span>
          </van-col>
          <van-col :span="4">
            <span :style="{fontSize: '12px'}">{{bookInfo.author}}</span>
          </van-col>
          <van-col :span="1">
            <span :style="{fontSize: '12px',padding: '0 2px'}">|</span>
          </van-col>
          <van-col :span="5">
            <span :style="{fontSize: '12px'}">{{bookInfo.rating.score}}分</span>
          </van-col>
        </van-row>
      </van-col>

    </van-row>
    <van-row type="flex" justify="center">
      <van-col :span="8">
        <van-button class="book-btn">加入书架</van-button>
      </van-col>
      <van-col :span="8">
        <van-button class="book-btn">立即阅读</van-button>
      </van-col>
    </van-row>
    <van-divider class="book-divider"></van-divider>
    <van-row type="flex" justify="center">
      <van-col span="7">
       <span :style="{fontSize: '16px'}">
         追人气 <span :style="{fontSize:'12px',color: '#00C98C'}">{{bookInfo.totalFollower | renderFllower}}</span>
       </span>
      </van-col>
      <van-col span="7">
        <span :style="{fontSize: '16px'}">
          留存率<span :style="{fontSize:'12px',color: '#00C98C'}">{{bookInfo.retentionRatio}}%</span>
        </span>
      </van-col>
      <van-col span="7">
        <span :style="{fontSize: '16px'}">
          章节<span :style="{fontSize:'12px',color: '#00C98C'}"> {{bookInfo.chaptersCount}}</span>
        </span>
      </van-col>
    </van-row>
    <van-divider class="book-divider"></van-divider>
    <van-row>
      <van-col>
        <p :style="{fontSize: '14px',margin: '6px'}">
          {{bookInfo.longIntro}}
      </p>
      </van-col>
    </van-row>

    <book-review :comment-list="bookComment"></book-review>
  </base-page>
</template>

<script>
import BasePage from "@/components/base/BasePage";
import base from "@/api/base";
import BookReview from "@/components/book/BookReview";
export default {
  name: "BookDetail",
  components:{
    BookReview,
    BasePage
  },
  data(){
    return{
      bookInfo:{},
      bookComment:[],
      bookApi: base.bookCoverApi,
    }
  },
  created() {
    this.init();
  },
  methods:{
    init(){
      let vm = this;
      vm.$api.book.fetchBookDetail(vm.$route.query.id).then(reply=>{
        vm.bookInfo = reply.data;
        console.log(vm.bookInfo)
      })
        vm.$api.book.fetchBookReviews(vm.$route.query.id).then(reply=>{
        vm.bookComment = reply.data.docs;
        console.log(vm.bookComment)
      })

    }
  },
  filters:{
    renderWordCount(param){
       return param > 10000 ? parseInt(param/10000)+"万":param
    },
    renderFllower(param){
       return param > 10000 ? parseInt(param/10000)+"K":param
    },

  }
}
</script>

<style scoped lang="less">
.book-btn{
  color: @bgColor;
  border-radius: 10px ;
}
.book-divider{
  color: @bgColor;
  background: @bgColor;
  padding: 0 16px;
}
</style>
