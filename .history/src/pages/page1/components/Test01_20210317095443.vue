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
    let myChart = echarts.init(document.getElementById("main"), "dark");
    // 绘制图表
    myChart.setOption({
      title: {
        text: "",
        subtext: "",
      },
      tooltip: {
        trigger: "axis",
      },
      legend: {
        data: ["最高气温", "最低气温", "平均气温"],
      },
      toolbox: {
        show: true,
        feature: {
          dataZoom: { show: false, yAxisIndex: "none" },
          dataView: { show: false, readOnly: false },
          magicType: { show: false, type: ["line", "bar"] },
          restore: { show: false },
          saveAsImage: { show: false },
        },
      },
      xAxis: {
        type: "category",
        boundaryGap: false,
        data: ["周一", "周二", "周三", "周四", "周五", "周六", "周日"],
      },
      yAxis: {
        type: "value",
        axisLabel: {
          formatter: "{value} °C",
        },
      },
      grid: {
        // 控制图的大小，调整下面这些值就可以，
        // x: 64,  //左侧边距
        // x2: 64, //右侧边距
        y: 40,
        y2: 24, // y2可以控制 X轴跟Zoom控件之间的间隔，避免以为倾斜后造成 label重叠到zoom上
      },
      series: [
        {
          name: "最高气温",
          type: "line",
          data: [10, 11, 13, 11, 12, 12, 9],
          smooth: true,
          //   markPoint: {
          //     data: [
          //       { type: "max", name: "最大值" },
          //       { type: "min", name: "最小值" },
          //     ],
          //   },
          //   markLine: {
          //     data: [{ type: "average", name: "平均值" }],
          //   },
        },
        {
          name: "最低气温",
          type: "line",
          data: [1, -2, 2, 5, 3, 2, 0],
          smooth: true,
        },
        {
          name: "平均气温",
          type: "line",
          data: [5, 5, 7, 8, 7, 7, 5],
          smooth: true,
        },
      ],
    });

    //随窗口大小变化重置echarts大小
    window.onresize = myChart.resize;
  },
};
</script>
<style scoped>
html,
body,
#main {
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
}
</style>