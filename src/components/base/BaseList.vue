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
  //display: flex;
  align-content: center;
  .list-ul{
    //max-height: 400px;
    //overflow-y: auto;
    .list-ul-li{
      margin-bottom: 20px;
      height: 100px;
      .list-avatar{
        height: 100%;
        width: 20%;
        margin: 4px;
        display: inline-block;
        img{
          height: 100%;
          width: 100%;
        }
      }
      .list-body{
        float: right;
        width: 72%;
        p{
          font-size: 6px;
          padding: 1px;
        }
        .list-title{
          padding-top: 40px;
          color: @bgColor;
        }
        .list-content{
          max-width: 100%; /*最大宽度为当前元素的100%*/
          display: inline-block;
          white-space: nowrap;/*保证文本内容不会自动换行，如果多余的内容会在水平方向撑破单元格*/
          overflow: hidden; /*隐藏超出单元格的部分*/
          text-overflow: ellipsis; /*将被隐藏的那部分用省略号代替*/
        }
        .btn-remove{
          width: 64px;
          font-size: 28px;
          float: right;
          color: @dangerColor;
          margin-top: -10px;
          margin-right: -24px;
        }
      }
    }
  }
}
</style>
