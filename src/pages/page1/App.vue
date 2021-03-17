<template>
  <div id="app">
    <div class="Per_Status_header"></div>
    <div class="Per_Status_title">人口现状</div>
    <div class="Per_Status">
      <div class="Per_Status_sub Per_Status_one">
        <div class="Per_Status_oneLabel">{{ Per_Status_oneLabel }}</div>
        <div class="Per_Status_oneRemark">户籍人员</div>
      </div>
      <div class="Per_Status_sub Per_Status_two">
        <div class="Per_Status_Label Per_Status_twoLabel">
          {{ Per_Status_twoLabel }}
        </div>
        <div class="Per_Status_Remark">户在人在</div>
      </div>
      <div class="Per_Status_sub Per_Status_three">
        <div class="Per_Status_Label Per_Status_threeLabel">
          {{ Per_Status_threeLabel }}
        </div>
        <div class="Per_Status_Remark">户在人不在</div>
      </div>
      <div class="Per_Status_sub Per_Status_four">
        <div class="Per_Status_Label Per_Status_fourLabel">
          {{ Per_Status_fourLabel }}
        </div>
        <div class="Per_Status_Remark">去向不明</div>
      </div>
    </div>
    <div class="clear"></div>
    <div class="clear"></div>
    <div class="Per_Status_title">人口变化趋势</div>
    <div>
      <Test01 msg="echarts" ref="Test01" />
    </div>
    <div>
      <div class="yearList">2017</div>
      <div class="yearList">2017</div>
      <div class="yearList">2018</div>
      <div class="yearList">2019</div>
      <div class="yearList">
        <Button @click="handleClick(2020)">2020</Button>
      </div>
      <div class="yearList">
        <Button @click="handleClick(2021)">2021</Button>
      </div>
    </div>
    <div class="clear"></div>
    <div class="Per_Status_title">人口年龄构成</div>
    <div></div>
  </div>
</template>

<script>
import Test01 from "./components/Test01.vue";

// import { ref } from "vue";
export default {
  name: "App",
  components: {
    Test01,
  },
  data() {
    return {
      Per_Status_oneLabel: 791215,
      Per_Status_twoLabel: 254876,
      Per_Status_threeLabel: 254875,
      Per_Status_fourLabel: 81653,
    };
  },
  methods: {
    handleClick(_year) { 
      this.$refs["Test01"].updateYear(_year);  
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
  width: 100%;
  height: 100%;
}
.Per_Status_header {
  width: 100%;
  height: 38px;
  background: url(/img/header.png) center center;
  background-repeat: no-repeat;
}
.Per_Status_title {
  margin-top: 10px;
  padding-left: 20px;
  width: 100%;
  height: 28px;
  line-height: 6px;
  background: url(/img/title.png);
  background-repeat: no-repeat;
  padding: ;
  font-size: 20px;
  font-family: Microsoft YaHei;
  font-weight: bold;
  color: #ffffff;
  vertical-align: top;
}
.Per_Status {
  position: relative;
  height: 148px;
  margin: 20px 50px;
  background-image: url("/img/per_Status_bg1.png"),
    url("/img/per_Status_bg2.png");
  background-repeat: no-repeat, no-repeat;
  background-position: 0 0, 0 0;
  background-size: 100% 100%;
}
.Per_Status_sub {
  clear: both;
  width: 193px;
  height: 138px;
  margin-top: 26px;
  position: absolute;
  background: red;
  top: 0px;
  left: 0px;

  background: url(/img/per_Status.png);
  background-repeat: no-repeat;
}
.Per_Status_one {
  width: 212px;
  margin-top: 0px;
  background: url(/img/per_Status_first.png);
  background-repeat: no-repeat;
}
.Per_Status_two {
  animation: Per_Status_twoAni 3s;
  animation-fill-mode: forwards;
}
.Per_Status_three {
  animation: Per_Status_threeAni 3s;
  animation-fill-mode: forwards;
}
.Per_Status_four {
  animation: Per_Status_fourAni 3s;
  animation-fill-mode: forwards;
}

@keyframes Per_Status_twoAni {
  from {
    left: 0px;
  }
  to {
    left: 212px;
  }
}
@keyframes Per_Status_threeAni {
  from {
    left: 0px;
  }
  to {
    left: calc(212px + 193px * 1);
  }
}
@keyframes Per_Status_fourAni {
  from {
    left: 0px;
  }
  to {
    left: calc(212px + 193px * 2);
  }
}
.Per_Status_oneLabel {
  position: relative;
  top: 40px;
  left: 140px;
  width: 97px;
  height: 24px;
  font-size: 30px;
  font-family: Source Han Sans SC;
  font-weight: 400;
  color: #ffff00;
  line-height: 6px;
}

.Per_Status_Label {
  position: relative;
  top: 34px;
  left: 112px;
  width: 71px;
  height: 15px;
  font-size: 20px;
  font-family: Source Han Sans SC;
  font-weight: 400;
  color: #ffff00;
  line-height: 6px;
}
.Per_Status_oneRemark {
  position: relative;
  top: 62px;
  left: 152px;
  width: 200px;
  height: 19px;
  font-size: 20px;
  font-family: Source Han Sans SC;
  font-weight: 400;
  color: #ffffff;
  line-height: 6px;
}
.Per_Status_Remark {
  position: relative;
  top: 82px;
  left: 112px;
  width: 80px;
  height: 15px;
  font-size: 15px;
  font-family: Source Han Sans SC;
  font-weight: 400;
  color: #ffffff;
  line-height: 6px;
}
.yearList {
  float: left;
  width: 200px;
  height: 20px;
}
.clear {
  clear: both;
}
</style>
