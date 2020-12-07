<template>
    <div id="home-grid">
        <van-grid gutter="2" v-for="(grid,index) in gridList" :key="index" :clickable="true" :border="false">
            <van-grid-item v-for="(item,indexs) in grid" :key="indexs"  :text="item.text">
              <template slot="icon">
                <span :class="item.icon" class="icon-css"  :style="{color: `${item.color}`}" />
              </template>
            </van-grid-item>
        </van-grid>
    </div>
</template>

<script>
    export default {
        name: "HomeGrid",
        data(){
            return{
                gridList:[
                    [
                        {
                            text: '精选头像',
                            icon: 'iconfont icon-camera ',
                            color: '#00bcd4'
                        },
                        {
                            text: '精选壁纸',
                            icon: 'iconfont icon-pic',
                            color: '#a0ffe6'
                        },
                        {
                            text: '电脑壁纸',
                            icon: 'iconfont icon-training1',
                            color: '#c70039'
                        },
                        {
                            text: '在线作图',
                            icon: 'iconfont icon-earth',
                            color: '#347474'
                        }
                    ],
                    [
                        {
                            text: '每日语录',
                            icon: 'iconfont icon-collection-fill',
                            color: '#ff2e63'
                        },
                        {
                            text: '每周小记',
                            icon: 'iconfont icon-writing',
                            color: '#f8b24f'
                        },
                        {
                            text: '二维码制作',
                            icon: 'iconfont icon-QRcode',
                            color: '#ffacb7'
                        },
                        {
                            text: '帮助中心',
                            icon: 'iconfont icon-help1',
                            color: '#00bcd4'
                        }

                    ]
                ]
            }
        }
    }
</script>

<style lang="less" scoped>
.icon-css{
  font-size: 60px;
}
</style>
