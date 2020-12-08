<template>
    <div id="story-girl-card">
        <van-row gutter="20">
            <van-col span="22" class="story">
                &nbsp;&nbsp;<p class="story-info">{{data.story}}</p>
            </van-col>
        </van-row>
        <van-row gutter="10">
            <van-col span="4"/>
            <van-col span="4">
                <span class="iconfont icon-good-fill" style="color: rgb(254,67,101)"></span>
            </van-col>
            <van-col span="4">
                <span class="iconfont icon-bad-fill" style="color: rgb(131,175,155)"></span>
            </van-col>
            <van-col span="4">
                <span class="iconfont icon-favorites-fill" style="color: rgb(249,205,173)" ></span>
            </van-col>
            <van-col span="4">
                <span class="iconfont icon-salescenter-fill" style="color: rgb(200,200,169)"></span>
            </van-col>

        </van-row>
    </div>
</template>

<script>
    export default {
        name: "StoryGirlCard",
        props:{
            data:{
                type: Object,
                default: function () {
                    return {}
                }
            }
        }
    }
</script>

<style lang="less" scoped>
#story-girl-card{
  margin-top: 43px;
}
.story{
    margin:0 20px;
}
.story-info{
   text-indent:2em;
   margin: 5px;
   font-size: 14px;
   line-height: 18px;
}
.iconfont{
    font-size: 32px;
}

</style>
