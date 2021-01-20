<template>
    <div id="home-grid">
        <van-grid gutter="2" v-for="(grid,index) in gridList" :key="index" :clickable="true" :border="false">
            <van-grid-item v-for="(item,indexs) in grid" :key="indexs"  :text="item.text" :to="item.url">
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
                            text: '传记名著',
                            icon: 'iconfont icon-camera ',
                            color: '#00bcd4',
                            url: '/story'
                        },
                        {
                            text: '出版小说',
                            icon: 'iconfont icon-pic',
                            color: '#a0ffe6',
                            url: '/story'
                        },
                        {
                            text: '人文社科',
                            icon: 'iconfont icon-training1',
                            color: '#c70039',
                            url: '/story'
                        },
                        {
                            text: '经管理财',
                            icon: 'iconfont icon-earth',
                            color: '#347474',
                            url: '/dashboard/echart'
                        }
                    ],
                    [
                        {
                            text: '青春言情',
                            icon: 'iconfont icon-collection',
                            color: '#ff2e63',
                            url: '/story'
                        },
                        {
                            text: '外文原版',
                            icon: 'iconfont icon-writing',
                            color: '#f8b24f',
                            url: '/story'
                        },
                        {
                            text: '政治军事',
                            icon: 'iconfont icon-QRcode',
                            color: '#ffacb7',
                            url: '/story'
                        },
                        {
                            text: '成功励志',
                            icon: 'iconfont icon-help1',
                            color: '#00bcd4',
                            url: '/story'
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
