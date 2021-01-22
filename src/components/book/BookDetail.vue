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
          <van-col :span="5">
            <span :style="{fontSize: '12px'}">{{bookInfo.author}}</span>
          </van-col>
          <van-col :span="1">
            <span :style="{fontSize: '12px',padding: '0 2px'}">|</span>
          </van-col>
          <van-col :span="5">
            <span :style="{fontSize: '12px'}">{{bookInfo.rating !== undefined ? bookInfo.rating.score: '暂无评'}}分</span>
          </van-col>
        </van-row>
      </van-col>

    </van-row>
    <van-row type="flex" justify="center">
      <van-col :span="8">
        <van-button class="book-btn" @click="handleAddBook(bookInfo)">{{bookShelfFlag?'撤出书架':'加入书架'}}</van-button>
      </van-col>
      <van-col :span="8">
        <van-button class="book-btn" @click="handleRead(bookInfo)">{{bookShelfFlag?'继续阅读':'立即阅读'}}</van-button>
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
          留存率 <span :style="{fontSize:'12px',color: '#00C98C'}">{{bookInfo.retentionRatio}}%</span>
        </span>
      </van-col>
      <van-col span="7">
        <span :style="{fontSize: '16px'}">
          章节 <span :style="{fontSize:'12px',color: '#00C98C'}"> {{bookInfo.chaptersCount}}</span>
        </span>
      </van-col>
    </van-row>
    <van-divider class="book-divider"></van-divider>
    <van-row>
      <van-col>
        <p class="book-longIntro">
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
import {read,save,remove} from "@/utils/storage";
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
      //是否加入书架
      bookShelfFlag: false
    }
  },
  mounted() {
    this.init();
    this.renderBookShelf();
  },
  methods:{
    init(){
      let vm = this;
      vm.$api.book.fetchBookDetail(vm.$route.query.id)
          .then(reply=>{
            vm.bookInfo = reply.data;
            console.log(vm.bookInfo)
          })
          .catch(e=>{
            vm.$notify({ type: 'warning', message: e });
          }
        )
        vm.$api.book.fetchBookReviews(vm.$route.query.id)
            .then(reply=>{
              vm.bookComment = reply.data.reviews;
              console.log(vm.bookComment)
            })
            .catch(e=>{
              vm.$notify({ type: 'warning', message: e });
          })
    },
    //是否在书架
    renderBookShelf(){
      let vm = this;
      let bookShelf = JSON.parse(read("bookShelf")||"{}")
      if(bookShelf && bookShelf[vm.$route.query.id]){
          vm.bookShelfFlag = true;
      }
    },
    //加入书架
    handleAddBook(book){
      let vm = this;
      let bookShelf = JSON.parse(read("bookShelf")||"{}")
      if(!vm.bookShelfFlag){
        bookShelf[book._id]=
        {
          id: book._id,//书籍ID
          author:book.author,//作者
          cover: book.cover,//封面
          flag: true,
          title: book.title,//书名
          lastChapter:book.lastChapter,//最新章节
          chapterIndexCache: 0,
          bookSource: 0,
          pageIndexCache: 0,
        }
        save('bookShelf',JSON.stringify(bookShelf))
        vm.bookShelfFlag = !vm.bookShelfFlag;
      }else {
        // remove(bookShelf[book._id]);
        delete bookShelf[book._id];
        save('bookShelf',JSON.stringify(bookShelf))
        vm.bookShelfFlag = !vm.bookShelfFlag;
      }
    },
    //阅读书籍
    handleRead(book){
      this.$router.push({path:`/book/read/${book._id}`,query:{id:book._id}});
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
.book-longIntro{
  text-indent: 1em;
  font-size: 14px;
  margin: 2px 2px;
  padding: 2px 2px 0px 2px;
  display: -webkit-box;
  overflow: hidden;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 4;
  font-family:"Times New Roman",Georgia,Serif;
}
</style>
