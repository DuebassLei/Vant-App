<template>
    <div id="app-dashboard">
        <keep-alive>
            <router-view v-if="$route.meta.keepAlive" />
        </keep-alive>
        <router-view v-if="!$route.meta.keepAlive" />
        <van-tabbar route>
            <van-tabbar-item replace v-for="(item, index) in tabberMenu" :key="index" :icon="item.icon" :to="item.router">
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
                        icon: "home-o",
                    },
                    {
                        name: "分类",
                        router: "/dashboard/category",
                        icon: "chat-o",
                    },
                    {
                        name: "书架",
                        router: "/dashboard/bookshelf",
                        icon: "calendar-o",
                    },
                    {
                        name: "排行",
                        router: "/contact",
                        icon: "notes-o",
                    },
                    {
                        name: "个人中心",
                        router: "/contact",
                        icon: "contact",
                    },
                ],
            };
        },
    };
</script>

<style lang="scss" scoped></style>
