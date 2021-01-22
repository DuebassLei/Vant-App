<template>
    <div class="list">
      <ul class="list-ul">
        <li class="list-ul-li">
          <div class="list-avatar">
            <slot name="avatar">
              我是头像
            </slot>
          </div>
          <div class="list-body">
            <slot name="body">
              我是信息
            </slot>
          </div>
        </li>
      </ul>
    </div>
</template>

<script>
import base from "@/api/base"
export default {
  name: "BaseList",
  props:{
    //数据源
    dataSource: {
      type: Object,
      default:()=>{
        return {}
      }
    }
  },
  data(){
    return{
      bookCoverApi: base.bookCoverApi
    }
  }
}
</script>

<style scoped lang="less">
.list{
  width: 100%;
  .list-ul{
    //max-height: 400px;
    //overflow-y: auto;
    .list-ul-li{
      margin-bottom: 30px;
      height: 120px;
      .list-avatar{
        height: 100px;
        width: 60px;
        margin: 4px;
        img{
          height: 100px;
          width: 60px;
        }
      }
      .list-body{
        float: right;
        width: 76%;
        p{
          font-size: 6px;
          padding: 1px;
        }
      }
    }
  }
}
</style>
