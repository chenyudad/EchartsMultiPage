<template>
  <div id="main"></div>
</template>

<script>
import * as echarts from "echarts";

export default {
  name: "Test01",
  data() {
    return {};
  },
  mounted: function () {
    // 基于准备好的dom，初始化echarts实例
    let myChart = echarts.init(document.getElementById("main"));
    // 绘制图表
    myChart.setOption(  
        
    },
};
</script>
<style scoped>
html,
body {
  margin: 0;
  padding: 0;
  overflow: hidden;
}
#main {
  width: 420px;
  height: 160px;
}
</style>