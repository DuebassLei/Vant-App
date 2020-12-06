<template>
    <div id="home-grid">
        <van-grid gutter="10" v-for="(grid,index) in gridList" :key="index" icon-size="42" :clickable="true" :border="false">
            <van-grid-item v-for="(item,indexs) in grid" :key="indexs"  :text="item.text">
                <template slot="icon">
                    <van-icon :name="item.icon" :color="item.color" />
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
                            text: '健康报备',
                            icon: 'location-o',
                            color: '#00bcd4'
                        },
                        {
                            text: '日报',
                            icon: 'like-o',
                            color: '#a0ffe6'
                        },
                        {
                            text: '周报',
                            icon: 'star-o',
                            color: '#c70039'
                        },
                        {
                            text: '审批',
                            icon: 'phone-o',
                            color: '#347474'
                        }
                    ],
                    [
                        {
                            text: '打卡',
                            icon: 'fire-o',
                            color: '#ff2e63'
                        },
                        {
                            text: '公告',
                            icon: 'cart-o',
                            color: '#f8b24f'
                        },
                        {
                            text: '工资单',
                            icon: 'gem-o',
                            color: '#ffacb7'
                        },
                        {
                            text: '帮助中心',
                            icon: 'gift-o',
                            color: '#00bcd4'
                        }

                    ]
                ]
            }
        }
    }
</script>

<style lang="less" >
    /*#home-grid .van-icon{*/
    /*    color: #07c160;*/
    /*}*/
</style>