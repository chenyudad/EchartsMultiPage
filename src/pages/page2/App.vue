<template>
  <div id="app">
    <div class="Per_Status_header"></div>
    <Perchoice msg="" @yearChange="getYearValue" />
    <div class="clear"></div>
    <Perinfo msg="" ref="Perinfo" />
    <div class="clear"></div>
    <div class="Per_Status_title">少数民族人口街道分布</div>
    <Echartssankey msg="echarts " ref="Echartssankey" />
    <TimeLine msg="" ref="TimeLine" @yearChange="getYearValue" />

    <div class="Per_Status_title thirdSection">少数民族人口年龄统计</div>
    <Perstatistics msg="" ref="Perstatistics" />
  </div>
</template>

<script>
import Echartssankey from "./components/Echarts_sankey.vue";
import TimeLine from "./../common/TimeLine";
import Perchoice from "./components/Per_choice";
import Perinfo from "./components/Perinfo";
import Perstatistics from "./components/Per_statistics";

export default {
  name: "App",
  components: {
    Echartssankey,
    TimeLine,
    Perchoice,
    Perinfo,
    Perstatistics,
  },
  data() {
    return {};
  },
  methods: {
    handleClick(e, _year) {
      this.getYearValue(_year);
    },
    getYearValue(_year) {
      this.$refs["Echartssankey"].updateYear(_year);
      this.$refs["TimeLine"].updateActive(_year);
      this.$refs["Perinfo"].updateYear(_year);
      this.$refs["Perstatistics"].updateYear(_year);
    },
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
  background: url("./../../../public/img/page2title.png") center center;
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
.clear {
  clear: both;
}
</style>
