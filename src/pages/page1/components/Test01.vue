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
  methods: {
    updateYear(_year) { 
      let _series = [];
      if (_year === 2021) {
        _series = [
          {
            name: "实有人口",
            type: "line",
            data: [
              82030,
              234890,
              290340,
              104970,
              131744,
              130230,
              234890,
              310000,
              121594,
              134141,
              181807,
              182030,
            ],
            smooth: true,
            areaStyle: {
              color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                {
                  offset: 0,
                  color: "rgba(68,250,4,1)",
                },
                {
                  offset: 1,
                  color: "rgba(68,250,4, 0)",
                },
              ]),
            },
          },
          {
            name: "户籍人口",
            type: "line",
            data: [
              193250,
              234380,
              310000,
              121594,
              134141,
              181807,
              310000,
              193250,
              182030,
              290340,
              104970,
              131744,
            ],
            smooth: true,
            areaStyle: {
              color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                {
                  offset: 0,
                  color: "rgba(7,242,255,1)",
                },
                {
                  offset: 0.8,
                  color: "rgba(7,242,255,0.0)",
                },
              ]),
            },
          },
        ];
      } else if (_year === 2020) {
        _series = [
          {
            name: "实有人口",
            type: "line",
            data: [
              192030,
              292890,
              292340,
              192970,
              192744,
              192230,
              292890,
              392000,
              192594,
              192141,
              192807,
              192030,
            ],
            smooth: true,
            areaStyle: {
              color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                {
                  offset: 0,
                  color: "rgba(68,250,4,1)",
                },
                {
                  offset: 1,
                  color: "rgba(68,250,4, 0)",
                },
              ]),
            },
          },
          {
            name: "户籍人口",
            type: "line",
            data: [
              193150,
              234180,
              310100,
              121194,
              134141,
              181107,
              310100,
              193150,
              182130,
              290140,
              104170,
              131144,
            ],
            smooth: true,
            areaStyle: {
              color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                {
                  offset: 0,
                  color: "rgba(7,242,255,1)",
                },
                {
                  offset: 0.8,
                  color: "rgba(7,242,255,0.0)",
                },
              ]),
            },
          },
        ];
      }
      var option = this.myChart.getOption();
      option.series = _series;
      /// this.myChart.setSeries(_series, false);

      this.myChart.setOption(option, false);

      // 绘制图表
      // this.myChart.setOption(option);
    },
  },
  mounted: function () {
    let _series = [];
    // 基于准备好的dom，初始化echarts实例
    this.myChart = echarts.init(document.getElementById("main"));
    let option = {
      title: {
        text: "",
        subtext: "",
      },
      tooltip: {
        trigger: "axis",
      },
      legend: {
        data: ["实有人口", "户籍人口"],
        textStyle: {
          //图例文字的样式
          color: "#fff",
          fontSize: 12,
        },
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
        data: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"],
      },
      yAxis: {
        type: "value",
        axisLabel: {
          formatter: "{value}",
        },
      },
      grid: {
        // 控制图的大小，调整下面这些值就可以，
        // x: 64,  //左侧边距
        // x2: 64, //右侧边距
        y: 40,
        y2: 24,
      },
      series: _series,
    };
    // 绘制图表
    this.myChart.setOption(option);
    // 绘制图表
    this.updateYear(2021);
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
  height: 200px;
  overflow: hidden;
}
</style>