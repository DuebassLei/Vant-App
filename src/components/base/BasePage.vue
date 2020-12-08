<template>
    <div id="base-page">
        <van-nav-bar fixed safe-area-inset-top>
          <template #left>
            <slot name="left"></slot>
          </template>
          <template #title>
            <slot name="title">
              <span style="color: #ffffff;font-size: 18px">{{title}}</span>
            </slot>
          </template>
          <template #right>
            <slot name="right">
            </slot>
          </template>
        </van-nav-bar>
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name: "BasePage",
        props: {
          title: {
            type: String,
            default: ''
          }
        },
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
