<template>
    <div id="home-swipe">
        <van-swipe :autoplay="3000">
            <van-swipe-item v-for="(image, index) in images" :key="index">
                <img v-lazy="image" height="200px" fit="fill" width="100%"/>
            </van-swipe-item>
        </van-swipe>
    </div>
</template>

<script>
    export default {
        name: "HomeSwipe",
        data() {
            return {
                images: [
                    require('@/assets/image/swipe/swipe-c.jpg'),
                    require('@/assets/image/swipe/swipe-b.png'),
                ],
            };
        },
    }
</script>

<style scoped>

</style>
