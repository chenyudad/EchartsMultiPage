<template>
  <div>
    <div id="mainpie"></div>
    <div>
      <div class="cjinfo">
        <div>采集量</div>
        <div>
          <span class="blue">{{ cjCount }}</span
          >例
        </div>
      </div>
      <div class="cjinfo">
        <div>已采完成率</div>
        <div>
          <span class="purple">{{ ycPercent }}</span
          >%
        </div>
      </div>
      <div class="cjinfo">
        <div>已检完成率</div>
        <div>
          <span class="cyan">{{ yjPercent }}</span
          >%
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import * as echarts from "echarts";

export default {
  name: "Echartspie",
  data() {
    return {
      cjCount: 29246,
      ycPercent: 93,
      yjPercent: 84,
    };
  },
  methods: {
    //生成一个指定长度的数组
    randomArr(len) {
      //生成测试数据
      let arr = new Array(len).fill(0);
      arr = arr.map((item, index) => {
        return Math.floor(Math.random() * 100);
      });
      return arr;
    },

    updateData(flag) {
      if (flag === "银河街道") {
        this.cjCount = 29246;
        this.ycPercent = 93;
        this.yjPercent = 84;
      } else if (flag === "和谐家园社区") {
        this.cjCount = 13432;
        this.ycPercent = 89;
        this.yjPercent = 90;
      }
      this.updateCharts(flag);
    },
    updateCharts(flag) {
      let _series = [];
      if (flag === "银河街道") {
        _series = [
          {
            name: "",
            type: "pie",
            selectedMode: "single",
            radius: [0, "35%"],
            labelLine: {
              show: true,
              length: 60,
            },
            label: {
              position: "outer",
              fontSize: 14,
            },
            startAngle: 30,
            percentPrecision: 0,
            label: {
              // formatter: "{a|{a}}{abg|}\n{hr|}\n  {b|{b}：}{c}  {per|{d}%}  ",
              formatter: " {b|{b}:}{per|{d}%}\n{hr|}\n {c|{c}} ",

              rich: {
                hr: {
                  borderColor: "#fff",
                  width: "100%",
                  borderWidth: 1,
                  height: 1,
                },
                b: {
                  color: "#fff",
                  fontSize: 16,
                  padding: [5, 5, 5, 5],
                },
                c: {
                  color: "#fff",
                  fontSize: 16,
                  padding: [5, 5, 5, 5],
                },
                per: {
                  color: "#fff",
                  fontSize: 16,
                },
              },
            },
            data: [
              { value: 250, name: "未采集", selected: true },
              { value: 450, name: "已采集" },
            ],
          },
          {
            name: "",
            type: "pie",
            radius: ["55%", "80%"],
            labelLine: {
              length: 30,
            },
            startAngle: -30,
            percentPrecision: 0,
            label: {
              // formatter: "{a|{a}}{abg|}\n{hr|}\n  {b|{b}：}{c}  {per|{d}%}  ",
              formatter: " {b|{b}:}{per|{d}%}\n{hr|}\n {c|{c}} ",

              rich: {
                hr: {
                  borderColor: "#fff",
                  width: "100%",
                  borderWidth: 1,
                  height: 0,
                },
                b: {
                  color: "#fff",
                  fontSize: 16,
                  padding: [5, 5, 5, 5],
                },
                c: {
                  color: "#fff",
                  fontSize: 16,
                  padding: [5, 5, 5, 5],
                },
                per: {
                  color: "#fff",
                  fontSize: 16,
                  borderRadius: 4,
                },
              },
            },
            data: [
              { value: 50, name: "已检测" },
              { value: 25, name: "未检测", selected: true },
            ],
          },
        ];
      } else if (flag === "和谐家园社区") {
        _series = [
          {
            name: "",
            type: "pie",
            selectedMode: "single",
            radius: [0, "35%"],
            labelLine: {
              show: true,
              length: 60,
            },
            label: {
              position: "outer",
              fontSize: 14,
            },
            startAngle: 0,
            percentPrecision: 0,
            label: {
              // formatter: "{a|{a}}{abg|}\n{hr|}\n  {b|{b}：}{c}  {per|{d}%}  ",
              formatter: " {b|{b}:}{per|{d}%}\n{hr|}\n {c|{c}} ",

              rich: {
                hr: {
                  borderColor: "#fff",
                  width: "100%",
                  borderWidth: 1,
                  height: 1,
                },
                b: {
                  color: "#fff",
                  fontSize: 16,
                  padding: [5, 5, 5, 5],
                },
                c: {
                  color: "#fff",
                  fontSize: 16,
                  padding: [5, 5, 5, 5],
                },
                per: {
                  color: "#fff",
                  fontSize: 16,
                },
              },
            },
            data: [
              { value: 120, name: "未采集", selected: true },
              { value: 810, name: "已采集" },
            ],
          },
          {
            name: "",
            type: "pie",
            radius: ["55%", "80%"],
            labelLine: {
              length: 30,
            },
            startAngle: -10,
            percentPrecision: 0,
            label: {
              // formatter: "{a|{a}}{abg|}\n{hr|}\n  {b|{b}：}{c}  {per|{d}%}  ",
              formatter: " {b|{b}:}{per|{d}%}\n{hr|}\n {c|{c}} ",

              rich: {
                hr: {
                  borderColor: "#fff",
                  width: "100%",
                  borderWidth: 1,
                  height: 0,
                },
                b: {
                  color: "#fff",
                  fontSize: 16,
                  padding: [5, 5, 5, 5],
                },
                c: {
                  color: "#fff",
                  fontSize: 16,
                  padding: [5, 5, 5, 5],
                },
                per: {
                  color: "#fff",
                  fontSize: 16,
                  borderRadius: 4,
                },
              },
            },
            data: [
              { value: 75, name: "已检测" },
              { value: 25, name: "未检测", selected: true },
            ],
          },
        ];
      } else if (flag === "克拉玛伊市") {
        _series = [
          {
            name: "",
            type: "pie",
            selectedMode: "single",
            radius: [0, "35%"],
            labelLine: {
              show: true,
              length: 60,
            },
            label: {
              position: "outer",
              fontSize: 14,
            },
            startAngle: 0,
            percentPrecision: 0,
            label: {
              // formatter: "{a|{a}}{abg|}\n{hr|}\n  {b|{b}：}{c}  {per|{d}%}  ",
              formatter: " {b|{b}:}{per|{d}%}\n{hr|}\n {c|{c}} ",

              rich: {
                hr: {
                  borderColor: "#fff",
                  width: "100%",
                  borderWidth: 1,
                  height: 1,
                },
                b: {
                  color: "#fff",
                  fontSize: 16,
                  padding: [5, 5, 5, 5],
                },
                c: {
                  color: "#fff",
                  fontSize: 16,
                  padding: [5, 5, 5, 5],
                },
                per: {
                  color: "#fff",
                  fontSize: 16,
                },
              },
            },
            data: [
              { value: 110, name: "未采集", selected: true },
              { value: 800, name: "已采集" },
            ],
          },
          {
            name: "",
            type: "pie",
            radius: ["55%", "80%"],
            labelLine: {
              length: 30,
            },
            startAngle: -10,
            percentPrecision: 0,
            label: {
              // formatter: "{a|{a}}{abg|}\n{hr|}\n  {b|{b}：}{c}  {per|{d}%}  ",
              formatter: " {b|{b}:}{per|{d}%}\n{hr|}\n {c|{c}} ",

              rich: {
                hr: {
                  borderColor: "#fff",
                  width: "100%",
                  borderWidth: 1,
                  height: 0,
                },
                b: {
                  color: "#fff",
                  fontSize: 16,
                  padding: [5, 5, 5, 5],
                },
                c: {
                  color: "#fff",
                  fontSize: 16,
                  padding: [5, 5, 5, 5],
                },
                per: {
                  color: "#fff",
                  fontSize: 16,
                  borderRadius: 4,
                },
              },
            },
            data: [
              { value: 73, name: "已检测" },
              { value: 27, name: "未检测", selected: true },
            ],
          },
        ];
      }

      var option = this.myChart.getOption();
      option.series = _series;
      this.myChart.setOption(option, false);
    },
  },
  mounted: function () {
    let _series = [];

    // 基于准备好的dom，初始化echarts实例
    this.myChart = echarts.init(document.getElementById("mainpie"));
    let option = {
      tooltip: {
        trigger: "item",
        formatter: "{a} <br/>{b}: {c} ({d}%)",
      },

      color: ["#FA905D", "#8E49EC", "#81F1BB", "#1871FE"],
      series: _series,
    };
    // 绘制图表
    this.myChart.setOption(option);
    // 绘制图表
    this.updateCharts("银河街道");
    //随窗口大小变化重置echarts大小
    window.onresize = this.myChart.resize;
  },
};
</script>
<style scoped>
html,
body,
#mainpie {
  margin: 0;
  padding: 0;
  width: 100%;
  height: 170px;
  overflow: hidden;
}
.cjinfo {
  width: 126px;
  height: 62px;
  float: left;
  margin-right: 8px;
  margin-top: 30px;
  background-size: 100%;
  background-repeat: none;
  color: white;
}
.cjinfo > div {
  margin-top: 5px;
  margin-bottom: 0px;
  margin-left: 15px;
}
.cjinfo:nth-child(1) {
  border: 1px solid #1871fe;
  /* background: url("./../../../../public/img/0009.png") no-repeat; */
}
.cjinfo:nth-child(2) {
  border: 1px solid #8e49ec;
}
.cjinfo:nth-child(3) {
  border: 1px solid #81f1bb;
}
.blue {
  width: 100px;
  height: 24px;
  line-height: 24px;
  font-size: 26px;
  font-family: Source Han Sans SC;
  font-weight: bold;
  color: #1871fe;
}
.purple {
  width: 100px;
  height: 24px;
  line-height: 24px;
  font-size: 26px;
  font-family: Source Han Sans SC;
  font-weight: bold;
  color: #8e49ec;
}
.cyan {
  width: 100px;
  font-size: 26px;
  font-family: Source Han Sans SC;
  font-weight: bold;
  color: #81f1bb;
  height: 24px;
  line-height: 24px;
}
</style>

<style>
.cjinfo {
  animation: cjinfo_Ani 3s;
  animation-fill-mode: forwards;
}

@keyframes cjinfo_Ani {
  from {
    height: 0px;
    opacity: 0;
  }
  to {
    height: 62px;
    opacity: 1;
  }
}

/* .cjinfo { 
  display: inline-block;
  position: relative;
  z-index: 3;
}
.cjinfo::after {
  content: "";
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  right: 0;
  border: 1px solid rgba(222, 222, 222, 0.2);
  margin: 0px;
  z-index: -1;
}
.cjinfo::before {
  -webkit-animation: cjinfo_Ani 2s linear infinite;
  animation: cjinfo_Ani 2s linear infinite;
}
.cjinfo::after {
  -webkit-animation: cjinfo_Ani2s linear infinite;
  animation: cjinfo_Ani 2s linear infinite;
}
@keyframes cjinfo_Ani {
  0%,
  100% {
    clip: rect(98px, 125px, 125px, 0);
  }
  25% {
    clip: rect(0, 45px, 45px, 31px);
  }
  50% {
    clip: rect(0, 125px, 1px, 0);
  }
  75% {
    clip: rect(0, 1px, 125px, 0);
  }
} */
</style>