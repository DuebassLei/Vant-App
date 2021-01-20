import Vue from  'vue'
//引入全部
// import echarts from "echarts";

//按需加载
import echarts from "echarts/lib/echarts"

//公共插件
import "echarts/lib/component/tooltip"
import "echarts/lib/component/title"
import "echarts/lib/component/legend"
import "echarts/lib/component/markPoint"

// 柱形图
import "echarts/lib/chart/bar"

//饼状图
import "echarts/lib/chart/pie"


//设置自定义主题
import echartTheme from "./echartTheme"
echarts.registerTheme("DuebassLei",echartTheme)


Vue.prototype.$echarts = echarts
