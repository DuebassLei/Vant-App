<template>
  <base-page>
    <template #title>
      <van-radio-group v-model="radioGender" direction="horizontal">
        <van-radio shape="square" name="1">男生</van-radio>
        <van-radio shape="square" name="2">女生</van-radio>
      </van-radio-group>
    </template>
    <van-row>
      <van-col :span="6">
        <van-sidebar v-model="activeKey" @change="onChange">
          <van-sidebar-item v-for="(item,index) in bookCategoryList" :key="index" :title="item.name" />
        </van-sidebar>
      </van-col>
      <van-col :span="18">

        <van-list
            v-model="loading"
            :finished="finished"
            finished-text="没有更多了"
            @load="onLoad"
        >
          <van-card
              v-for="(item,index) in bookCategoryDetailList"
              :key="index"
              :desc="item.shortIntro"
              :title="item.title"
              :currency="currency"
              :thumb="`${bookApi}${item.cover}`"
              @click="onClick(item._id)"
          >
            <template #tags>
              <template v-if="item.tags.length > 0">
                <van-tag plain v-for="(tag,index) in 3" :key="index" color="#ffe1e1" text-color="#ad0000">{{item.tags[index]}}</van-tag>
              </template>
            </template>
            <template #num>
              <van-tag color="#ffe5e5" text-color="#00C98C">
                {{item.author}}
              </van-tag>
            </template>
            <template #price>
              <van-tag color="#ffe1e1" text-color="#ad0000" >
               {{item.retentionRatio}}%
              </van-tag>
            </template>

          </van-card>
        </van-list>
      </van-col>
    </van-row>
  </base-page>
</template>

<script>
import BasePage from "@/components/base/BasePage";
import {mapState} from 'vuex'
import base from "@/api/base";
export default {
  name: "Category",
  components: {BasePage},
  data(){
    return {
      radioGender: "1",
      activeKey: 0,
      bookCategoryList: [],
      bookCategoryDetailList: [],
      bookApi: base.bookCoverApi,
      loading: false,
      finished: false,
      currency: "%",
      mapRadioGender:{"1":"male","2": "female"}
    }
  },
  computed:{
    ...mapState({
      bookCategory: state => state.bookCategory.bookCategoryData,
    }),
  },
  watch:{
    radioGender(n,o){
      switch (n) {
        case '1':
          this.bookCategoryList = this.$store.getters["bookCategory/getBookCategory"].male;
          break;
        case '2':
          this.bookCategoryList = this.$store.getters["bookCategory/getBookCategory"].female;
          break;
        default:
          break;
      }
    }
  },
  methods: {
    async onChange(index) {
      let vm = this;
      // this.$notify({ type: 'primary', message: index });
      const param = {
        gender: vm.mapRadioGender[vm.radioGender],
        type: 'hot',
        major: vm.bookCategoryList[index+1].name,
        start: 0,
        limit: 20
      }
      // switch (vm.radioGender) {
      //   case "1":
      //     await vm.$store.dispatch(`bookCategory/setBookCategoryDetail`,param);
      //     vm.bookCategoryDetailList = this.$store.getters["bookCategory/getBookCategoryDetail"].books
      //     break;
      //   case "2":
      //     break;
      //   default:
      //     break;
      // }
      await vm.$store.dispatch(`bookCategory/setBookCategoryDetail`,param);
      vm.bookCategoryDetailList = this.$store.getters["bookCategory/getBookCategoryDetail"].books
    },
    //初始化数据
    async init(){
      let vm = this;
      await vm.$store.dispatch(`bookCategory/setBookCategory`, null);
      vm.bookCategoryList = this.$store.getters["bookCategory/getBookCategory"].male;
      let majorTmp = [...vm.bookCategoryList]
      console.log(majorTmp)
      const param = {
        gender: vm.mapRadioGender[vm.radioGender],
        type: 'hot',
        major: majorTmp[vm.radioGender].name,
        start: 0,
        limit: 20
      }
      await vm.$store.dispatch(`bookCategory/setBookCategoryDetail`,param);
      vm.bookCategoryDetailList = this.$store.getters["bookCategory/getBookCategoryDetail"].books;
      console.log(vm.bookCategoryDetailList)
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
  created() {
    this.init();
  }
}
</script>

<style scoped>

</style>
