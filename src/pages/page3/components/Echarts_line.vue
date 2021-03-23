<template>
  <div id="main"></div>
</template>

<script>
import * as echarts from "echarts";

export default {
  name: "Echartsline",
  data() {
    return {};
  },
  methods: {
    addDate(_day) {
      let d = new Date();
      d.setDate(d.getDate() + _day);
      let nd = d.getMonth() + 1 + "-" + d.getDate();
      return nd;
    },
    //生成一个指定长度的数组
    randomArr(len) {
      //生成测试数据
      let arr = new Array(len).fill(0);
      arr = arr.map((item, index) => {
        return Math.floor(Math.random() * 100);
      });
      return arr;
    },
    updateData() {
      let _series = [
        {
          name: "采样人数",
          type: "line",
          yAxisIndex: 0,
          // symbol: "circle",
          symbolSize: 6,
          // itemStyle: {
          //   symbol: {
          //     // color: "white",
          //     lineStyle: {
          //       color: "rgba(0,255,0,1)",
          //     },
          //   },
          // },
          // smooth: true,
          areaStyle: {
            color: new echarts.graphic.LinearGradient(0, 0, 0, 0.75, [
              {
                offset: 0,
                color: "rgba(0,255,0,1)",
              },
              {
                offset: 1,
                color: "rgba(0,255,0,0)",
              },
            ]),
          },
          data: this.randomArr(7),
        },
        {
          name: "检测人数",
          type: "line",
          yAxisIndex: 0,
          // symbol: "circle",
          symbolSize: 6,
          // // smooth: true,
          // itemStyle: {
          //   normal: {
          //     // color: "white",
          //     lineStyle: {
          //       color: "rgba(22,255,255,1)",
          //     },
          //   },
          // },
          areaStyle: {
            color: new echarts.graphic.LinearGradient(0, 0, 0, 0.75, [
              {
                offset: 0,
                color: "rgba(22,255,255,1)",
              },
              {
                offset: 1,
                color: "rgba(22,255,255, 0)",
              },
            ]),
          },
          data: this.randomArr(7),
        },
        {
          name: "阳性人数",
          type: "line",
          yAxisIndex: 0,
          // symbol: "circle",
          symbolSize: 6,
          // // smooth: true,
          // itemStyle: {
          //   normal: {
          //     color: "rgba(245,196,88,1)",
          //     borderColor: "white",
          //     borderWidth: 3,
          //     lineStyle: {
          //       color: "rgba(245,196,88,1)",
          //     },
          //   },
          // },
          areaStyle: {
            color: new echarts.graphic.LinearGradient(0, 0, 0, 0.75, [
              {
                offset: 0,
                color: "rgba(245,196,88,1)",
              },
              {
                offset: 1,
                color: "rgba(245,196,88, 0)",
              },
            ]),
          },
          data: new Array(7).fill(0),
        },
      ];

      var option = this.myChart.getOption();
      option.series = _series;
      this.myChart.setOption(option, false);
    },
  },
  mounted: function () {
    let _series = [];
    //生成测试数据
    let _xAxis = new Array(7).fill(0);
    _xAxis = _xAxis.map((item, index) => {
      return this.addDate(-1 * index);
    });
    _xAxis.reverse();
    // 基于准备好的dom，初始化echarts实例
    this.myChart = echarts.init(document.getElementById("main"));
    let option = {
      title: {
        text: "",
      },
      tooltip: {
        backgroundColor: "rgba(0,0,0,0.8)",
        axisPointer: {
          type: "cross",
          crossStyle: {
            color: "#999",
          },
        },
        color: "white",
        trigger: "axis",
        textStyle: {
          color: "#FFF", // 文字的颜色
          fontStyle: "normal", // 文字字体的风格（'normal'，无样式；'italic'，斜体；'oblique'，倾斜字体）
          fontWeight: "normal", // 文字字体的粗细（'normal'，无样式；'bold'，加粗；'bolder'，加粗的基础上再加粗；'lighter'，变细；数字定义粗细也可以，取值范围100至700）
          fontSize: "14", // 文字字体大小
          lineHeight: "24", // 行高
        },
      },
      color: ["#00FF00", "#16FFFF", "#F5C458"],
      legend: {
        data: ["采样人数", "检测人数", "阳性人数"],
        x: "center", //可设定图例在左、右、居中
        y: "top", //可设定图例在上、下、居中
        textStyle: {
          color: "white", //更改坐标轴文字颜色
        },
      },
      grid: {
        left: "3%",
        right: "4%",
        bottom: "3%",
        containLabel: true,
      },
      toolbox: {
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
        data: _xAxis,
        axisLabel: {
          show: true,
          textStyle: {
            color: "white", //更改坐标轴文字颜色
          },
        },
      },
      yAxis: {
        type: "value",
      },
      series: _series,
    };
    // 绘制图表
    this.myChart.setOption(option);
    // 绘制图表
    this.updateData();
    //随窗口大小变化重置echarts大小
    window.onresize = this.myChart.resize;
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
  height: 250px;
  overflow: hidden;
}
</style>