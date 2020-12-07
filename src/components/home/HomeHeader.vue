<template>
    <div id="menu-header">
        <van-row style="padding-top: 10px;background-color: #fff">
            <van-col span="4">
                <van-image
                        round
                        width="1rem"
                        height="1rem"
                        class="menu-logo"
                        :src="logo"
                />
            </van-col>
            <van-col span="6">
                <span class="menu-title">工作台</span>
            </van-col>
            <van-col span="14">
              <span class="iconfont icon-all" style="font-size: 40px;float: right;margin-right: 10px"></span>
            </van-col>
        </van-row>
    </div>
</template>

<script>
    export default {
        name: "HomeHeader",
        data(){
            return {
                logo:require('../../assets/image/logo.jpeg')
            }
        }
    }
</script>

<style lang="less" scoped>
    .menu-logo{
        margin-left: 8px;
        margin-top: 8px;
    }
    .menu-title{
        font-size: 26px;
        font-weight: 700;
        line-height: 30px;
        color: #534e52;
    }
    .menu-icon{
        font-size: 32px;
        color: #000;
    }
</style>
