<template>
    <div id="base-page">
        <slot name="navBar">
            <van-nav-bar left-text="返回" left-arrow safe-area-inset-top @click-left="handleBack"/>
        </slot>
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name: "BasePage",
        data(){
            return{
            }
        },
        methods:{
            handleBack(){
                this.$router.back();
            }
        }
    }
</script>

<style scoped>

</style>