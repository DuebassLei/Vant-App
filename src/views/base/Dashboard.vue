<template>
    <div id="app-dashboard">
        <keep-alive>
            <router-view v-if="$route.meta.keepAlive" />
        </keep-alive>
        <router-view v-if="!$route.meta.keepAlive" />
        <van-tabbar route active-color="#00C98C">
            <van-tabbar-item replace v-for="(item, index) in tabberMenu" :key="index" :to="item.router" >
              <template #icon>
                <span :class="`${item.icon}`"></span>
              </template>
                {{ item.name }}
            </van-tabbar-item>
        </van-tabbar>
    </div>
</template>

<script>
    import { Tabbar, TabbarItem } from "vant";
    export default {
        name: "Dashboard",
        components: {
            [Tabbar.name]: Tabbar,
            [TabbarItem.name]: TabbarItem,
        },
        data() {
            return {
                tabberMenu: [
                    {
                        name: "首页",
                        router: "/dashboard/home",
                        icon: "iconfont icon-store-fill",
                    },
                    {
                        name: "分类",
                        router: "/dashboard/category",
                        icon: "iconfont icon-all-fill",
                    },
                    {
                        name: "书架",
                        router: "/dashboard/bookshelf",
                        icon: "iconfont icon-Newuserzone-fill",
                    },
                    {
                        name: "排行",
                        router: "/dashboard/bookRank",
                        icon: "iconfont icon-vip-fill",
                    },
                    {
                        name: "个人中心",
                        router: "/dashboard/userCenter",
                        icon: "iconfont icon-bussiness-man-fill",
                    },
                ],
            };
        },
    };
</script>

<style lang="scss" scoped></style>
