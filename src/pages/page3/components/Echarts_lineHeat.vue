<template>
  <div id="mainHeat"></div>
</template>

<script>
import * as echarts from "echarts";

export default {
  name: "EchartslineHeat",
  data() {
    return {};
  },
  methods: {
    //日期增减方法
    addDate(_day) {
      let d = new Date();
      d.setDate(d.getDate() + _day);
      let nd = d.getMonth() + 1 + "-" + d.getDate();
      return nd;
    }, //生成一个指定长度的数组
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
          name: "第二人民医院",
          type: "line",
          yAxisIndex: 0,
          symbol: "none", // 不显示小圆点
          // smooth: true, // true为曲线  false为直线
          data: this.randomArr(15),
        },
        {
          name: "独山子人民医院",
          type: "line",
          yAxisIndex: 0,
          symbol: "none", // 不显示小圆点
          // smooth: true, // true为曲线  false为直线
          data: this.randomArr(15),
        },
        {
          name: "人民医院",
          type: "line",
          yAxisIndex: 0,
          symbol: "none", // 不显示小圆点
          // smooth: true, // true为曲线  false为直线
          data: this.randomArr(15),
        },
        {
          name: "市中心医院",
          type: "line",
          yAxisIndex: 0,
          symbol: "none", // 不显示小圆点
          // smooth: true, // true为曲线  false为直线
          data: this.randomArr(15),
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
    let _xAxis = new Array(15).fill(0);
    _xAxis = _xAxis.map((item, index) => {
      return this.addDate(-1 * index);
    });
    _xAxis.reverse();
    // 基于准备好的dom，初始化echarts实例
    this.myChart = echarts.init(document.getElementById("mainHeat"));
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
      color: ["#FF5907", "#FFD200", "#00FF00", "#00EBFF"],
      legend: {
        data: ["第二人民医院", "独山子人民医院", "人民医院", "市中心医院"],
        x: "center", //可设定图例在左、右、居中
        y: "top", //可设定图例在上、下、居中
        textStyle: {
          color: "white", //更改坐标轴文字颜色
        },
      },
      grid: {
        // 控制图的大小，调整下面这些值就可以，
        x: 64, //左侧边距
        x2: 64, //右侧边距
        y: 44,
        y2: 48,
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
        splitLine: { show: false }, //去除网格线
        type: "value",
        // splitArea: { show: true }, //保留网格区域
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
#mainHeat {
  margin: 0;
  padding: 0;
  width: 100%;
  height: 270px;
  overflow: hidden;
}
</style>