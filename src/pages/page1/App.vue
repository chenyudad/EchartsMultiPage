<template>
  <div id="app">
    <div class="Per_Status_header"></div>
    <div class="Per_Status_title">人口现状</div>

    <div class="Per_Count">
      <div class="totalMonthNum cellCount">
        <div class="cellCount_info">
          <div class="cellCount_img"></div>
          <div class="cellCount_font">{{ totalMonthNum }}</div>
          <div class="clear"></div>
        </div>
        <div class="cellCount_title">当月总人数</div>
      </div>
      <div class="month_growthRate cellCount" :class="{ upArrow: isUp }">
        <div class="cellCount_info">
          <div class="cellCount_img"></div>
          <div class="cellCount_font">{{ month_growthRate }}</div>
          <div class="clear"></div>
        </div>
        <div class="cellCount_title">环比增长率</div>
      </div>
      <div class="sumPerCount cellCount">
        <div class="cellCount_info">
          <div class="cellCount_img"></div>
          <div class="cellCount_font">{{ sumPerCount }}</div>
          <div class="clear"></div>
        </div>
        <div class="cellCount_title">当月人数</div>
      </div>
      <div class="growthRate cellCount" :class="{ downArrow: isDown }">
        <div class="cellCount_info">
          <div class="cellCount_img"></div>
          <div class="cellCount_font">{{ growthRate }}</div>
          <div class="clear"></div>
        </div>
        <div class="cellCount_title">同比增长率</div>
      </div>

      <div class="Per_Status_vertical_title">实有人口</div>
    </div>

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

      <div class="Per_Status_vertical_title">户籍人口</div>
    </div>
    <div class="clear"></div>
    <div class="clear"></div>
    <div class="Per_Status_title">人口变化趋势</div>
    <div>
      <Test01 msg="echarts" ref="Test01" />
    </div>
    <div>
      <div class="timeline_container">
        <div style="display: flex">
          <div style="flex: 1; display: flex; position: relative">
            <div style="flex: 1"></div>
            <div class="timeline_item"></div>
          </div>
          <div
            style="flex: 1; display: flex; position: relative"
            v-bind:class="{ timeline_actived: 2014 == isActive }"
          >
            <div class="timeline_item"></div>
            <div class="timeline_dot" @click="handleClick(this, 2014)"></div>
            <div class="timeline_text" @click="handleClick(this, 2014)">
              2014
            </div>
            <div class="timeline_item"></div>
          </div>
          <div
            style="flex: 1; display: flex; position: relative"
            v-bind:class="{ timeline_actived: 2015 == isActive }"
          >
            <div class="timeline_item"></div>
            <div class="timeline_dot" @click="handleClick(this, 2015)"></div>
            <div class="timeline_text" @click="handleClick(this, 2015)">
              2015
            </div>
            <div class="timeline_item"></div>
          </div>
          <div
            style="flex: 1; display: flex; position: relative"
            v-bind:class="{ timeline_actived: 2016 == isActive }"
          >
            <div class="timeline_item"></div>
            <div class="timeline_dot" @click="handleClick(this, 2016)"></div>
            <div class="timeline_text" @click="handleClick(this, 2016)">
              2016
            </div>
            <div class="timeline_item"></div>
          </div>
          <div
            style="flex: 1; display: flex; position: relative"
            v-bind:class="{ timeline_actived: 2017 == isActive }"
          >
            <div class="timeline_item"></div>
            <div class="timeline_dot" @click="handleClick(this, 2017)"></div>
            <div class="timeline_text" @click="handleClick(this, 2017)">
              2017
            </div>
            <div class="timeline_item"></div>
          </div>
          <div
            style="flex: 1; display: flex; position: relative"
            v-bind:class="{ timeline_actived: 2018 == isActive }"
          >
            <div class="timeline_item"></div>
            <div class="timeline_dot" @click="handleClick(this, 2018)"></div>
            <div class="timeline_text" @click="handleClick(this, 2018)">
              2018
            </div>
            <div class="timeline_item"></div>
          </div>
          <div
            style="flex: 1; display: flex; position: relative"
            v-bind:class="{ timeline_actived: 2019 == isActive }"
          >
            <div class="timeline_item"></div>
            <div class="timeline_dot" @click="handleClick(this, 2019)"></div>
            <div class="timeline_text" @click="handleClick(this, 2019)">
              2019
            </div>
            <div class="timeline_item"></div>
          </div>
          <div
            style="flex: 1; display: flex; position: relative"
            v-bind:class="{ timeline_actived: 2020 == isActive }"
          >
            <div class="timeline_item"></div>
            <div class="timeline_dot" @click="handleClick(this, 2020)"></div>
            <div class="timeline_text" @click="handleClick(this, 2020)">
              2020
            </div>
            <div class="timeline_item"></div>
          </div>
          <div
            style="flex: 1; display: flex; position: relative"
            v-bind:class="{ timeline_actived: 2021 == isActive }"
          >
            <div class="timeline_item"></div>
            <div class="timeline_dot" @click="handleClick(this, 2021)"></div>
            <div class="timeline_text" @click="handleClick(this, 2021)">
              2021
            </div>
            <div class="timeline_item"></div>
          </div>
          <div style="flex: 1; display: flex; position: relative">
            <div class="timeline_item"></div>
            <div style="flex: 1"></div>
          </div>
        </div>
      </div>
      <!-- <div class="yearList">2017</div>
      <div class="yearList">2017</div>
      <div class="yearList">2018</div>
      <div class="yearList">2019</div>
      <div class="yearList">
        <Button @click="handleClick(2020)">2020</Button>
      </div>
      <div class="yearList">
        <Button @click="handleClick(2021)">2021</Button>
      </div> -->
    </div>
    <div class="clear"></div>
    <div class="Per_Status_title">人口年龄构成</div>

    <div class="perAgeInfo">
      <ul class="ul_pageInfo">
        <li v-for="item in ageData" :key="ageData">
          <div class="pageInfo_font">
            <div class="pageInfo_font_font">{{ item.val }}</div>
          </div>
          <div class="pageInfo_title">{{ item.name }}</div>
        </li>
      </ul>
    </div>
    <div class="clear"></div>

    <!-- </div> -->
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
      isActive: 2021,
      totalMonthNum: 606053,
      month_growthRate: "0.61%",
      sumPerCount: 3214,
      growthRate: "-0.22%",
      isUp: true,
      isDown: true,
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
    handleClick(e, _year) {
      this.isActive = _year;
      this.$refs["Test01"].updateYear(_year);
      if (_year == 2020) {
        this.Per_Status_oneLabel = 192265;
        this.Per_Status_twoLabel = 224871;
        this.Per_Status_threeLabel = 253872;
        this.Per_Status_fourLabel = 81648;
        this.totalMonthNum = 606053;
        this.month_growthRate = "0.61%";
        this.sumPerCount = 3214;
        this.growthRate = "-0.22%";
        this.isUp = true;
        this.isDown = true;
        this.ageData = [
          { name: "0~6岁", val: "10%" },
          { name: "7~12岁", val: "15%" },
          { name: "13~15岁", val: "15%" },
          { name: "16~18岁", val: "20%" },
          { name: "19~35岁", val: "10%" },
          { name: "36~55岁", val: "15%" },
          { name: "56岁以上", val: "15%" },
        ];
      } else if (_year == 2021) {
        this.Per_Status_oneLabel = 791215;
        this.Per_Status_twoLabel = 254876;
        this.Per_Status_threeLabel = 254875;
        this.Per_Status_fourLabel = 81653;
        this.totalMonthNum = 606053;
        this.month_growthRate = "0.61%";
        this.sumPerCount = 3214;
        this.growthRate = "-0.22%";
        this.isUp = true;
        this.isDown = true;
        this.ageData = [
          { name: "0~6岁", val: "10%" },
          { name: "7~12岁", val: "20%" },
          { name: "13~15岁", val: "15%" },
          { name: "16~18岁", val: "10%" },
          { name: "19~35岁", val: "10%" },
          { name: "36~55岁", val: "25%" },
          { name: "56岁以上", val: "10%" },
        ];
      } else {
        this.Per_Status_oneLabel = Math.floor(Math.random() * 1000000);
        this.Per_Status_twoLabel = Math.floor(Math.random() * 1000000);
        this.Per_Status_threeLabel = Math.floor(Math.random() * 1000000);
        this.Per_Status_fourLabel = Math.floor(Math.random() * 1000000);
        this.totalMonthNum = Math.floor(Math.random() * 1000000);
        this.month_growthRate = Math.round(Math.random() * 100, 2) / 100 + "%";
        this.sumPerCount = Math.floor(Math.random() * 1000);
        this.growthRate = Math.round(Math.random() * 100, 2) / 100 + "%";
        this.isUp = true;
        this.isDown = true;
        this.ageData = [
          { name: "0~6岁", val: "5%" },
          { name: "7~12岁", val: "25%" },
          { name: "13~15岁", val: "5%" },
          { name: "16~18岁", val: "15%" },
          { name: "19~35岁", val: "10%" },
          { name: "36~55岁", val: "30%" },
          { name: "56岁以上", val: "10%" },
        ];
      }
    },
  },
};
</script>

<style >
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
  background: url("./../../../public/img/header.png") center center;
  background-repeat: no-repeat;
}
.Per_Status_title {
  margin-top: 10px;
  padding-left: 20px;
  width: 100%;
  height: 28px;
  line-height: 6px;
  background: url("./../../../public/img/title.png");
  background-repeat: no-repeat;
  padding: ;
  font-size: 20px;
  font-family: Microsoft YaHei;
  font-weight: bold;
  color: #ffffff;
  vertical-align: top;
}
.Per_Status_vertical_title {
  background: url("./../../../public/img/titletype.png");
  background-repeat: no-repeat;
  background-size: cover;
  position: absolute;

  top: calc((100% - 134px) / 2);
  right: -65px;
  text-align: center;
  padding-right: 15px;
  width: 35px;
  height: 134px;
  vertical-align: center;
  font-size: 22px;
  font-family: Source Han Sans SC;
  font-weight: 400;
  color: #f8faff;
  line-height: 24px;

  writing-mode: tb-rl;
}
.Per_Count {
  position: relative;
  height: 240px;
  margin: 0px 80px 0px 80px;
  background-image: url("./../../../public/img/Per_CountBg.png");
  background-repeat: no-repeat;
  background-position: 0 0;
  background-size: 100% 100%;
}
.cellCount_info {
  margin-top: 0px;
  margin: 10px auto;
}
.cellCount_font {
  font-size: 30px;
  font-family: Source Han Sans SC;
  font-weight: 400;
  color: #ffff00;
  line-height: 20px;
  text-shadow: 0px 0px 0px #ffff00;
}
.cellCount_title {
  font-size: 16px;
  font-family: Source Han Sans SC;
  font-weight: 400;
  margin-left: 10px;
  color: #ffffff;
  line-height: 12px;
}
.totalMonthNum {
  position: absolute;
  top: 14px;
  left: 0px;
  animation: totalMonthNum_Ani 3s;
  animation-fill-mode: forwards;
}

@keyframes totalMonthNum_Ani {
  from {
    top: 0px;
    opacity: 0.4;
  }
  to {
    top: 14px;
    opacity: 1;
  }
}
.cellCount_info .cellCount_img {
  float: left;
}
.cellCount_info .cellCount_font {
  float: left;
}
.month_growthRate {
  position: absolute;
  top: 14px;
  right: 0px;
  animation: month_growthRate_Ani 3s;
  animation-fill-mode: forwards;
}

@keyframes month_growthRate_Ani {
  from {
    top: 0px;
    opacity: 0.4;
  }
  to {
    top: 14px;
    opacity: 1;
  }
}
.month_growthRate .cellCount_img {
  margin: -5px 5px auto auto;
  width: 15px;
  height: 20px;
}
.sumPerCount {
  position: absolute;
  top: 124px;
  left: 20px;
  animation: sumPerCount_Ani 3s;
  animation-fill-mode: forwards;
}

@keyframes sumPerCount_Ani {
  from {
    top: 138px;
    opacity: 0.4;
  }
  to {
    top: 124px;
    opacity: 1;
  }
}
.growthRate {
  position: absolute;
  top: 124px;
  right: 10px;
  animation: growthRate_Ani 3s;
  animation-fill-mode: forwards;
}

@keyframes growthRate_Ani {
  from {
    top: 138px;
    opacity: 0.4;
  }
  to {
    top: 124px;
    opacity: 1;
  }
}
.growthRate .cellCount_img {
  margin: -5px 5px auto auto;
  width: 15px;
  height: 25px;
}

.upArrow .cellCount_img {
  background-image: url("./../../../public/img/growthArrow.png");
  background-size: 100%;
  background-repeat: no-repeat;
}
.upArrow .cellCount_title {
  margin-left: 20px;
}
.downArrow .cellCount_img {
  background-image: url("./../../../public/img/decreaseArrow.png");
  background-size: 100%;
  background-repeat: no-repeat;
}
.downArrow .cellCount_title {
  margin-left: 25px;
}

.Per_Status {
  position: relative;
  height: 148px;
  margin: 0px 80px 0px 40px;
  background-image: url("./../../../public/img/per_Status_bg1.png"),
    url("./../../../public/img/per_Status_bg2.png");
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

  background: url("./../../../public/img/per_Status.png");
  background-repeat: no-repeat;
}
.Per_Status_one {
  width: 212px;
  margin-top: 0px;
  background: url("./../../../public/img/per_Status_first.png");
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

.timeline_container {
  width: calc(100% - 100px);
  height: 30px;
  margin: 10px 50px 10px 50px;
}
.timeline_dot {
  border: 0px solid #9eaaaa;
  width: 9px;
  height: 9px;
  border-radius: 5px;
  background: #9eaaaa;
  margin: auto;
  margin-bottom: -4px;
  cursor: pointer;
}
.timeline_item {
  flex: 1;
  border-bottom: 1px solid #164e75;
  /* animation: timeline_load 1.5s infinite alternate; */
}
.timeline_actived > .timeline_item {
  margin-top: 5px;
  height: 0px;
  box-shadow: 0px 0px 4px 1px #00ffff;
  opacity: 0.9;
  border-bottom: 1px solid #00ffff;
  border-radius: 50%;
  animation: timeline_load 3s infinite alternate;
}
.timeline_actived > .timeline_dot {
  width: 10px;
  height: 10px;
  background: #00ffff;
  box-shadow: 0px 0px 4px 1px #00ffff;
  opacity: 0.8;
}
.timeline_text {
  position: absolute;
  top: 20px;
  text-align: center;
  width: 100%;
  height: 10px;
  font-size: 13px;
  font-family: Microsoft YaHei;
  font-weight: 400;
  color: #ffffff;
  line-height: 9px;
  cursor: pointer;
}
@keyframes timeline_load {
  0% {
    opacity: 0.6;
    box-shadow: -4px 0px 1px 0px #00ffff;
  }
  100% {
    opacity: 0.85;
    box-shadow: 0px 0px 4px 1px #00ffff;
  }
}
.clear {
  clear: both;
}

.perAgeInfo {
  position: relative;
  height: 260px;
  /* margin: 20px auto; */
}
.perAgeInfo ul {
  list-style: none;
  margin: 0;
}
.perAgeInfo ul li {
  float: left;
  width: 120px;
  height: 110px;
}
.perAgeInfo ul li .pageInfo_font {
  margin: auto 15px;
  width: 90px;
  height: 90px;
  font-size: 24px;
  font-family: HuXiaoBo-NanShen;
  font-weight: bold;
  color: #3dffef;
  background-image: url("./../../../public/img/ageBg.png");
  background-size: 100%;
  background-repeat: no-repeat;
}
.pageInfo_font_font {
  width: 100%;
  height: 30px;
  line-height: 30px;
  padding-top: 40px;
  text-align: center;
}
.perAgeInfo ul li .pageInfo_title {
  margin: 0px 5% auto 5%;
  width: 90%;
  height: 30px;
  font-size: 18px;
  font-family: Source Han Sans CN;
  font-weight: bold;
  color: #ffffff;
  line-height: 30px;
  text-align: center;
  background-image: url("./../../../public/img/ageBottomBg.png");
  background-size: 100%;
  background-position-y: 12px;
  background-repeat: no-repeat;
}
</style>
