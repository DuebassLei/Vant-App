<template>
  <base-page title="小说分类">
<!--    <template #title>-->
<!--      <van-radio-group v-model="radioGender" direction="horizontal">-->
<!--        <van-radio shape="square" name="1">男生</van-radio>-->
<!--        <van-radio shape="square" name="2">女生</van-radio>-->
<!--      </van-radio-group>-->
<!--    </template>-->
    <van-tabs @change="change"  v-model="activeName" sticky>
      <van-tab v-for="(item,index) in tabOption" :title="item.title" :name="item.key" :key="index">
        <van-row>
          <van-col :span="6">
            <van-sidebar v-model="activeKey" @change="onChange">
              <van-sidebar-item v-for="(item,index) in bookCategoryList " :key="index" :title="item.name" />
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
      </van-tab>
    </van-tabs>

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
      // radioGender: "1",
      activeKey: 0,
      bookCategoryList: [],
      bookCategoryDetailList: [],
      bookApi: base.bookCoverApi,
      loading: false,
      finished: false,
      currency: "%",
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
      bookCategory: state => state.bookCategory.bookCategoryData,
    }),
  },
  // watch:{
  //   radioGender(n,o){
  //     switch (n) {
  //       case '1':
  //         this.bookCategoryList = this.$store.getters["bookCategory/getBookCategory"].male;
  //         break;
  //       case '2':
  //         this.bookCategoryList = this.$store.getters["bookCategory/getBookCategory"].female;
  //         break;
  //       default:
  //     }
  //   }
  // },
  methods: {
    async change(index){
      switch (index) {
        case 'male':
          this.bookCategoryList = this.$store.getters["bookCategory/getBookCategory"].male;
          await this.onChange(0);
          break;
        case 'female':
          this.bookCategoryList = this.$store.getters["bookCategory/getBookCategory"].female;
          await this.onChange(0);
          break;
        default:
          break;
      }
    },
    async onChange(index) {
      let vm = this;
      const param = {
        // gender: vm.mapRadioGender[vm.radioGender],
        gender: vm.activeName,
        type: 'hot',
        major: vm.bookCategoryList[index].name,
        start: 0,
        limit: 20
      }
      await vm.$store.dispatch(`bookCategory/setBookCategoryDetail`,param);
      // debugger;
      setTimeout(()=>{
        vm.bookCategoryDetailList = this.$store.getters["bookCategory/getBookCategoryDetail"]
      },200)
    },
    //初始化数据
    async init(){
      let vm = this;
      await vm.$store.dispatch(`bookCategory/setBookCategory`, null);
      vm.bookCategoryList = this.$store.getters["bookCategory/getBookCategory"].male;
      // let majorTmp = [...vm.bookCategoryList]
      // let majorTmp =JSON.parse(JSON.stringify(vm.bookCategoryList))
      //
      // console.log(majorTmp)
      const param = {
        //gender: vm.mapRadioGender[vm.radioGender],
        gender:'male',
        type: 'hot',
        // major: majorTmp[vm.radioGender].name,
        major: '玄幻',
        start: 0,
        limit: 20
      }
      await vm.$store.dispatch(`bookCategory/setBookCategoryDetail`,param);
      vm.bookCategoryDetailList = this.$store.getters["bookCategory/getBookCategoryDetail"];
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
