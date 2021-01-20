<template>
  <div id="base-chart">
      <div ref="myChart" :style="{height:'425px',width:'500px'}">

      </div>
  </div>
</template>

<script>
// import echarts from 'echarts'
//按需加载
// import echarts from "echarts/lib/echarts"
//1.导入柱形图
// import "echarts/lib/chart/bar"
// import "echarts/lib/component/tooltip"
// import "echarts/lib/component/title"
// import "echarts/lib/component/legend"
// import "echarts/lib/component/markPoint"
export default {
  name: "Echart",
  data(){
    return{

    }
  },
  mounted() {
      this.init();
  },
  methods:{
    init(){
     let vm = this;
     let option = {
        title: {
          text: '用户骑行订单'
        },
        tooltip : {
          trigger: 'axis'
        },
        legend:{
          data:['小黄','小摩','小蓝']
        },
        xAxis: {
          data: [
            '周一',
            '周二',
            '周三',
            '周四',
            '周五',
            '周六',
            '周日'
          ]
        },
        yAxis: {
          type: 'value'
        },
        series: [
          {
            name: '小黄',
            type: 'bar',
            data: [
              2000,
              3000,
              5500,
              7000,
              8000,
              12000,
              20000
            ]
          },
          {
            name: '小摩',
            type: 'bar',
            data: [
              1500,
              3000,
              4500,
              6000,
              8000,
              10000,
              15000
            ]
          },
          {
            name: '小蓝',
            type: 'bar',
            data: [
              1000,
              2000,
              2500,
              4000,
              6000,
              7000,
              8000
            ]
          },
        ]
      }
     let chartDom = vm.$refs['myChart'];
      if(chartDom){
        let myChart = vm.$echarts.init(chartDom,'DuebassLei', { renderer: "svg" })
        myChart.setOption(option);
        window.addEventListener("resize", function() {
          myChart.resize()
        })
        this.$on('hook:destroyed',()=>{
          window.removeEventListener("resize", function() {
            myChart.resize();
          });
        })
      }

    }
  }


}
</script>

<style scoped>

</style>
