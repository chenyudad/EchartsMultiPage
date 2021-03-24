<template>
  <div id="app">
    <div class="Per_Status_header"></div>

    <div class="topleft">
      <div class="Per_Status_title">人员核酸监测情况</div>
      <PerNucleinInfo msg="" ref="PerNucleinInfo" />
    </div>
    <div class="topright">
      <div class="Per_Status_title">环境消杀情况</div>
      <Environment msg="" ref="Environment" />
    </div>
    <div class="clear"></div>
    <div class="centerleft">
      <div class="Per_Status_title thirdSection">冷链相关从业人员检测情况</div>
      <Echartsline msg="echarts " ref="Echartsline" />
    </div>
    <div class="centerright">
      <div class="Per_Status_title">环境检测情况</div>
      <Echartspie msg="echarts " ref="Echartspie" />
    </div>
    <div class="clear"></div>
    <div class="bottomAll">
      <div class="Per_Status_title">发热门诊检测</div>
      <EchartslineHeat msg="echarts " ref="EchartslineHeat" />
    </div>
  </div>
</template>

<script>
import Echartsline from "./../page3/components/Echarts_line.vue";
import EchartslineHeat from "./../page3/components/Echarts_lineHeat.vue";
import Echartspie from "./../page3/components/Echarts_pie.vue";
import PerNucleinInfo from "./../page3/components/PerNucleinInfo.vue";
import Environment from "./../page3/components/Environment";
export default {
  name: "App",
  components: {
    Echartsline,
    EchartslineHeat,
    Echartspie,
    PerNucleinInfo,
    Environment,
  },
  data() {
    return {};
  },
  methods: {
    init() {
      this.$refs["PerNucleinInfo"].updateData("和谐家园社区");
      this.$refs["Environment"].updateData("和谐家园社区");
      this.$refs["Echartspie"].updateData("和谐家园社区"); 
    },
  },

  mounted: function () {
    this.init();
  },
};
</script>


<style>
html,
body,
#mainContainer,
#app {
  margin: 0;
  padding: 0;
  width: 930px;
  height: 900px;
}

.Per_Status_header {
  width: 100%;
  height: 38px;
  background: url("./../../../public/img/0006.png") center center;
  background-repeat: no-repeat;
}

.Per_Status_title {
  margin-top: 10px;
  padding-left: 20px;
  width: 100%;
  height: 28px;
  line-height: 6px;
  background: url(./../../../public/img/title.png);
  background-repeat: no-repeat;

  font-size: 20px;
  font-family: Microsoft YaHei;
  font-weight: bold;
  color: #ffffff;
  vertical-align: top;
}
.topleft,
.topright,
.centerleft,
.centerright {
  float: left;
  height: 288px;
  width: 455px;
  margin: 0 auto;
  padding: 5px;
  /* border: 1px solid red; */
}

.topleft,
.topright {
  height: 258px;
}
.bottomAll {
  height: 318px;
  width: 100%;
  /* border: 1px solid red; */
}
.clear {
  clear: both;
}
</style>
