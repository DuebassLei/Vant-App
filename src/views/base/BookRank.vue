<template>
  <base-page title="排行榜">
    <!--    <template #title>-->
    <!--      <van-radio-group v-model="radioGender" direction="horizontal">-->
    <!--        <van-radio shape="square" name="1">男生</van-radio>-->
    <!--        <van-radio shape="square" name="2">女生</van-radio>-->
    <!--      </van-radio-group>-->
    <!--    </template>-->
    <van-tabs @change="change"  v-model="activeName" sticky>
      <van-tab v-for="(item,index) in tabOption" :title="item.title" :name="item.key" :key="index">
<!--        <van-grid :gutter="8">-->
<!--          <van-grid-item v-for="(rank,index) in dataSource" :key="index">-->
<!--            <span style="font-size: 8px">{{rank.title}}</span>-->
<!--          </van-grid-item>-->
<!--        </van-grid>-->

       <van-row :gutter="20">
         <van-col :span="8" v-for="(rank,index) in dataSource" :key="index">
           <base-card>
             <template #cover>
               <img :src="`${bookCoverApi}/${rank.cover}`"/>
             </template>
             <template #container>
               <p>{{rank.shortTitle}}</p>
             </template>
           </base-card>
         </van-col>
       </van-row>
      </van-tab>
    </van-tabs>
  </base-page>
</template>

<script>
import BasePage from "@/components/base/BasePage";
import {mapState} from 'vuex'
import base from "@/api/base";
import BaseCard from "@/components/base/BaseCard";
export default {
  name: "BookRank",
  components: {BaseCard, BasePage},
  data(){
    return {
      activeKey: 0,
      bookRankingList: [],
      bookCoverApi: base.bookCoverApi,
      loading: false,
      finished: false,
      activeName: 'male',
      tabOption: [
        {
          title: "男生",
          key: 'male'
        },
        {
          title: "女生",
          key: 'female'
        }
      ],
      mapRadioGender:{"1":"male","2": "female"}
    }
  },
  computed:{
    ...mapState({
      bookRankingData: state => state.bookRanking.bookRankingData,
    }),
    dataSource(){
      return this.bookRankingList
    }
  },
  methods: {
    async change(index){
      switch (index) {
        case 'male':
          this.bookRankingList = this.$store.getters["bookRanking/getBookRanking"].male ;
          break;
        case 'female':
          this.bookRankingList = this.$store.getters["bookRanking/getBookRanking"].female;
          break;
        default:
          break;
      }
    },
    // async onChange(index) {
    //   let vm = this;
    //   const param = {
    //     // gender: vm.mapRadioGender[vm.radioGender],
    //     gender: vm.activeName,
    //     type: 'hot',
    //     major: vm.bookRankingList[index].name,
    //     start: 0,
    //     limit: 20
    //   }
    //   await vm.$store.dispatch(`bookCategory/setBookCategoryDetail`,param);
    //   // debugger;
    //   setTimeout(()=>{
    //     vm.bookCategoryDetailList = this.$store.getters["bookCategory/getBookCategoryDetail"]
    //   },200)
    // },
    //初始化数据
    async init(){
      let vm = this;
      await vm.$store.dispatch(`bookRanking/setBookRanking`,null);
      vm.bookRankingList = this.$store.getters["bookRanking/getBookRanking"].male;
    },
    //加载小说分类数据
    onLoad(){

    },
    onClick(param){
      //获取API
      this.$router.push({
        path: `/book/detail/${param}`,
        query: {id: param}
      })
    }
  },
  mounted() {
    this.init();
  }
}
</script>

<style scoped>

</style>
