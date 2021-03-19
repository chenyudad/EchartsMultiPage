<template>
  <div id="main"></div>
</template>

<script>
import * as echarts from "echarts";

export default {
  name: "Test02",
  data() {
    return {};
  },
  methods: {
    updateYear(_year) {
      let data = {
        nodes: [
          { name: "总少数人口数" },
          { name: "维吾尔族" },
          { name: "哈萨克族" },
          { name: "回族" },
          { name: "柯尔克孜族" },
          { name: "蒙古族" },
          { name: "其他" },
          { name: "天山路街道" },
          { name: "胜利路街道" },
          { name: "昆仑路街道" },
          { name: "银河路街道" },
          { name: "金龙镇街道" },
          { name: "五五新镇街道" },
          { name: "小拐乡" },
        ],
        links: [
          {
            source: "总少数人口数",
            target: "维吾尔族",
            value: 364300,
          },
          {
            source: "总少数人口数",
            target: "哈萨克族",
            value: 50010,
          },
          {
            source: "总少数人口数",
            target: "回族",
            value: 62110,
          },
          {
            source: "总少数人口数",
            target: "柯尔克孜族",
            value: 101350,
          },
          {
            source: "总少数人口数",
            target: "蒙古族",
            value: 154210,
          },
          {
            source: "总少数人口数",
            target: "其他",
            value: 111150,
          },

          {
            source: "维吾尔族",
            target: "天山路街道",
            value: 31115,
          },
          {
            source: "维吾尔族",
            target: "胜利路街道",
            value: 12311,
          },
          {
            source: "维吾尔族",
            target: "昆仑路街道",
            value: 9876,
          },
          {
            source: "维吾尔族",
            target: "银河路街道",
            value: 8687,
          },
          {
            source: "维吾尔族",
            target: "金龙镇街道",
            value: 7865,
          },
          {
            source: "维吾尔族",
            target: "五五新镇街道",
            value: 6109,
          },
          {
            source: "维吾尔族",
            target: "小拐乡",
            value: 5802,
          },

          {
            source: "哈萨克族",
            target: "天山路街道",
            value: 32123,
          },
          {
            source: "哈萨克族",
            target: "胜利路街道",
            value: 10981,
          },
          {
            source: "哈萨克族",
            target: "昆仑路街道",
            value: 9087,
          },
          {
            source: "哈萨克族",
            target: "银河路街道",
            value: 8965,
          },
          {
            source: "哈萨克族",
            target: "金龙镇街道",
            value: 6658,
          },
          {
            source: "哈萨克族",
            target: "五五新镇街道",
            value: 5583,
          },
          {
            source: "哈萨克族",
            target: "小拐乡",
            value: 4123,
          },

          {
            source: "回族",
            target: "天山路街道",
            value: 20987,
          },
          {
            source: "回族",
            target: "胜利路街道",
            value: 10754,
          },
          {
            source: "回族",
            target: "昆仑路街道",
            value: 6709,
          },
          {
            source: "回族",
            target: "银河路街道",
            value: 5342,
          },
          {
            source: "回族",
            target: "金龙镇街道",
            value: 5210,
          },
          {
            source: "回族",
            target: "五五新镇街道",
            value: 1903,
          },
          {
            source: "回族",
            target: "小拐乡",
            value: 988,
          },

          {
            source: "柯尔克孜族",
            target: "天山路街道",
            value: 21002,
          },
          {
            source: "柯尔克孜族",
            target: "胜利路街道",
            value: 10901,
          },
          {
            source: "柯尔克孜族",
            target: "昆仑路街道",
            value: 8901,
          },
          {
            source: "柯尔克孜族",
            target: "银河路街道",
            value: 7583,
          },
          {
            source: "柯尔克孜族",
            target: "金龙镇街道",
            value: 6573,
          },
          {
            source: "柯尔克孜族",
            target: "五五新镇街道",
            value: 5671,
          },
          {
            source: "柯尔克孜族",
            target: "小拐乡",
            value: 4310,
          },
          {
            source: "蒙古族",
            target: "天山路街道",
            value: 26548,
          },
          {
            source: "蒙古族",
            target: "胜利路街道",
            value: 20101,
          },
          {
            source: "蒙古族",
            target: "昆仑路街道",
            value: 9803,
          },
          {
            source: "蒙古族",
            target: "银河路街道",
            value: 7646,
          },
          {
            source: "蒙古族",
            target: "金龙镇街道",
            value: 6571,
          },
          {
            source: "蒙古族",
            target: "五五新镇街道",
            value: 5732,
          },
          {
            source: "蒙古族",
            target: "小拐乡",
            value: 4371,
          },

          {
            source: "其他",
            target: "天山路街道",
            value: 21098,
          },
          {
            source: "其他",
            target: "胜利路街道",
            value: 10876,
          },
          {
            source: "其他",
            target: "昆仑路街道",
            value: 9786,
          },
          {
            source: "其他",
            target: "银河路街道",
            value: 8564,
          },
          {
            source: "其他",
            target: "金龙镇街道",
            value: 5673,
          },
          {
            source: "其他",
            target: "五五新镇街道",
            value: 4367,
          },
          {
            source: "其他",
            target: "小拐乡",
            value: 3596,
          },
        ],
      };

      if (_year !== 2021) {
        data.links.forEach((item, index) => {
          if (data.links[index].source === "总少数人口数")
            data.links[index].value = Math.floor(Math.random() * 50000);
          else data.links[index].value = Math.floor(Math.random() * 10000);
        });
      }

      let _series = [];
      var option = this.myChart.getOption();
      option.series = [
        {
          type: "sankey",
          data: data.nodes,
          links: data.links,
          emphasis: {
            focus: "adjacency",
          },

          levels: [
            {
              depth: 0,
              itemStyle: {
                color: "#fbb4ae",
              },
              lineStyle: {
                color: "source",
                opacity: 0.6,
              },
            },
          ],
          // levels: [
          //   {
          //     depth: 0,
          //     itemStyle: {
          //       color: "#fbb4ae",
          //     },
          //     lineStyle: {
          //       color: "source",
          //       opacity: 0.6,
          //     },
          //   },
          //   {
          //     depth: 1,
          //     itemStyle: {
          //       color: "#b3cde3",
          //     },
          //     lineStyle: {
          //       color: "source",
          //       opacity: 0.6,
          //     },
          //   },
          //   {
          //     depth: 2,
          //     itemStyle: {
          //       color: "#ccebc5",
          //     },
          //     lineStyle: {
          //       color: "source",
          //       opacity: 0.6,
          //     },
          //   },
          //   {
          //     depth: 3,
          //     itemStyle: {
          //       color: "#decbe4",
          //     },
          //     lineStyle: {
          //       color: "source",
          //       opacity: 0.6,
          //     },
          //   },
          // ],
          lineStyle: {
            color: "gradient",
            curveness: 0.5,
          },
        },
      ];

      this.myChart.setOption(option, false);
    },
  },
  mounted: function () {
    let _series = [];
    // 基于准备好的dom，初始化echarts实例
    this.myChart = echarts.init(document.getElementById("main"));
    let option = {
      title: {
        text: " ",
      },
      tooltip: {
        trigger: "item",
        triggerOn: "mousemove",
      },
      grid: {
        // 控制图的大小，调整下面这些值就可以，
        // x: 64,  //左侧边距
        // x2: 64, //右侧边距
        y: 24,
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
  height: 180px;
  overflow: hidden;
}
</style>