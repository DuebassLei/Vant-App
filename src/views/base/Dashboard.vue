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
                        name: "工作台",
                        router: "/dashboard/home",
                        icon: "home-o",
                    },
                    {
                        name: "消息",
                        router: "/contact",
                        icon: "chat-o",
                    },
                    {
                        name: "日历",
                        router: "/contact",
                        icon: "calendar-o",
                    },
                    {
                        name: "云文档",
                        router: "/contact",
                        icon: "notes-o",
                    },
                    {
                        name: "联系人",
                        router: "/contact",
                        icon: "contact",
                    },
                ],
            };
        },
    };
</script>

<style lang="scss" scoped></style>
