<template>
  <div id="app">
    <div class="Per_Status_header"></div>
    <div class="Per_Status_title">人口现状</div>
    <PerCount msg="" ref="PerCount" />
    <PerStatus msg="" ref="PerStatus" />
    <div class="clear"></div>
    <div class="Per_Status_title">人口变化趋势</div>
    <div>
      <Test01 msg="echarts" ref="Test01" />
    </div>
    <div>
      <TimeLine msg="" ref="TimeLine" @yearChange="getYearValue" />
    </div>
    <div class="clear"></div>
    <div class="Per_Status_title">人口年龄构成</div>
    <PerAgeInfo msg="" ref="PerAgeInfo" />
    <div class="clear"></div>
  </div>
</template>

<script>
import Test01 from "./components/Test01.vue";
import TimeLine from "./../common/TimeLine";
import PerCount from "./components/Per_Count";
import PerStatus from "./components/Per_Status";
import PerAgeInfo from "./components/Per_AgeInfo";
export default {
  name: "App",
  components: {
    Test01,
    TimeLine,
    PerCount,
    PerStatus,
    PerAgeInfo,
  },
  data() {
    return {
      ageData: [
        { name: "0~6岁", val: "15%" },
        { name: "7~12岁", val: "15%" },
        { name: "13~15岁", val: "15%" },
        { name: "16~18岁", val: "15%" },
        { name: "19~35岁", val: "15%" },
        { name: "36~55岁", val: "15%" },
        { name: "56岁以上", val: "15%" },
      ],
    };
  },
  methods: {
    getYearValue(_year) {
      this.$refs["Test01"].updateYear(_year);
      this.$refs["PerCount"].updateYear(_year);
      this.$refs["PerStatus"].updateYear(_year);
      this.$refs["PerAgeInfo"].updateYear(_year);
    },
  },
};
</script>

<style scoped>
html,
body,
#mainContainer,
#app {
  margin: 0;
  padding: 0;
  width: 930px;
  height: 900px;
}
.clear {
  clear: both;
}
</style>
