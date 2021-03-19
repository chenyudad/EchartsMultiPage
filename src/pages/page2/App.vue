<template>
  <div id="app">
    <div class="Per_Status_header"></div>
    <div class="choice">
      <ul class="ul_choice">
        <li
          class="li_choice"
          :class="{ selected: 0 == choiceSelected }"
          @click="choiceClick(this, 0)"
        >
          <span>人口结构</span>
        </li>
        <li
          class="li_choice"
          :class="{ selected: 1 == choiceSelected }"
          @click="choiceClick(this, 1)"
        >
          <span>人房关联</span>
        </li>
        <li
          class="li_choice"
          :class="{ selected: 2 == choiceSelected }"
          @click="choiceClick(this, 2)"
        >
          <span>流动人口</span>
        </li>
        <li
          class="li_choice"
          :class="{ selected: 3 == choiceSelected }"
          @click="choiceClick(this, 3)"
        >
          <span>少数民族</span>
        </li>
      </ul>
    </div>
    <div class="clear"></div>
    <div class="info">
      <div class="sumCount">
        <div class="sumCount_bg"></div>
        <div class="sumCount_count">{{ sumCount }}</div>
        <div class="sumCount_font">少数民族人口</div>
      </div>
      <div class="detailInfo">
        <div class="detailInfo_font detailInfo_cell">
          <ul class="ul_detailInfo_font">
            <li class="li_hjrk">
              <div class="detailInfo_font_img"></div>
              <div class="detailInfo_font_font">户籍人口</div>
              <div class="clear"></div>
            </li>
            <li class="li_xb">
              <div class="detailInfo_font_img"></div>
              <div class="detailInfo_font_font">男性</div>
              <div class="clear"></div>
            </li>
            <li class="li_elderly">
              <div class="detailInfo_font_img"></div>
              <div class="detailInfo_font_font">60岁以上老年人</div>
              <div class="clear"></div>
            </li>
            <li class="li_child">
              <div class="detailInfo_font_img"></div>
              <div class="detailInfo_font_font">14岁以上儿童</div>
              <div class="clear"></div>
            </li>
          </ul>
        </div>
        <div class="detailInfo_count detailInfo_cell">
          <ul class="ul_detailInfo_count">
            <li>
              <div class="detailInfo_cell_title">
                <div class="detailInfo_cell_count">
                  {{ detaliInfoCount[0] }}
                </div>
                <div class="detailInfo_cell_font">人</div>
              </div>
            </li>
            <li>
              <div class="detailInfo_cell_title">
                <div class="detailInfo_cell_count">
                  {{ detaliInfoCount[1] }}
                </div>
                <div class="detailInfo_cell_font">人</div>
              </div>
            </li>
            <li>
              <div class="detailInfo_cell_title">
                <div class="detailInfo_cell_count">
                  {{ detaliInfoCount[2] }}
                </div>
                <div class="detailInfo_cell_font">人</div>
              </div>
            </li>
            <li>
              <div class="detailInfo_cell_title">
                <div class="detailInfo_cell_count">
                  {{ detaliInfoCount[3] }}
                </div>
                <div class="detailInfo_cell_font">人</div>
              </div>
            </li>
          </ul>
        </div>
        <div class="detailInfo_line">
          <ul>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
          </ul>
        </div>
        <div class="detailInfo_series detailInfo_cell">
          <ul class="ul_detailInfo_series">
            <li><span>来市人口</span></li>
            <li><span>女性</span></li>
            <li><span>占比</span></li>
            <li><span>来市人口</span></li>
          </ul>
        </div>
        <div class="detailInfo_line"></div>
        <div class="detailInfo_percent detailInfo_cell">
          <ul class="ul_detailInfo_percent">
            <li>
              <div class="detailInfo_cell_title">
                <div class="detailInfo_cell_count">
                  {{ detaliInfoPercent[0] }}
                </div>
                <div class="detailInfo_cell_font">人</div>
              </div>
            </li>
            <li>
              <div class="detailInfo_cell_title">
                <div class="detailInfo_cell_count">
                  {{ detaliInfoPercent[1] }}
                </div>
                <div class="detailInfo_cell_font">人</div>
              </div>
            </li>
            <li>
              <div class="detailInfo_cell_title">
                <div class="detailInfo_cell_count">
                  {{ detaliInfoPercent[2] }}
                </div>
                <!-- <div class="detailInfo_cell_font">人</div> -->
              </div>
            </li>
            <li>
              <div class="detailInfo_cell_title">
                <div class="detailInfo_cell_count">
                  {{ detaliInfoPercent[3] }}
                </div>
                <!-- <div class="detailInfo_cell_font">人</div> -->
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="clear"></div>
    <div class="Per_Status_title">少数民族人口街道分布</div>
    <Test02 msg="echarts " ref="Test02" />
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
    </div>

    <div class="Per_Status_title thirdSection">少数民族人口年龄统计</div>
    <div class="Per_Status_statistics">
      <div class="Per_Status_stati_sub">
        <div
          class="Per_Status_stati Per_Status_stati_sub_img stati_sub_one"
        ></div>
        <div class="Per_Status_stati">
          <div class="Per_Status_stati_sub_top">0~6岁</div>
          <div class="Per_Status_stati_sub_buttom">{{ statisticsData[0] }}</div>
        </div>
      </div>
      <div class="Per_Status_stati_sub">
        <div
          class="Per_Status_stati Per_Status_stati_sub_img stati_sub_two"
        ></div>
        <div class="Per_Status_stati">
          <div class="Per_Status_stati_sub_top">7~12岁</div>
          <div class="Per_Status_stati_sub_buttom">{{ statisticsData[1] }}</div>
        </div>
      </div>
      <div class="Per_Status_stati_sub">
        <div
          class="Per_Status_stati Per_Status_stati_sub_img stati_sub_three"
        ></div>
        <div class="Per_Status_stati">
          <div class="Per_Status_stati_sub_top">13~15岁</div>
          <div class="Per_Status_stati_sub_buttom">{{ statisticsData[2] }}</div>
        </div>
      </div>
    </div>
    <div class="clear"></div>
    <div class="Per_Status_statistics">
      <div class="Per_Status_stati_sub">
        <div
          class="Per_Status_stati Per_Status_stati_sub_img stati_sub_four"
        ></div>
        <div class="Per_Status_stati">
          <div class="Per_Status_stati_sub_top">16~18岁</div>
          <div class="Per_Status_stati_sub_buttom">{{ statisticsData[3] }}</div>
        </div>
      </div>
      <div class="Per_Status_stati_sub">
        <div
          class="Per_Status_stati Per_Status_stati_sub_img stati_sub_five"
        ></div>
        <div class="Per_Status_stati">
          <div class="Per_Status_stati_sub_top">19~35岁</div>
          <div class="Per_Status_stati_sub_buttom">{{ statisticsData[4] }}</div>
        </div>
      </div>
      <div class="Per_Status_stati_sub">
        <div
          class="Per_Status_stati Per_Status_stati_sub_img stati_sub_six"
        ></div>
        <div class="Per_Status_stati">
          <div class="Per_Status_stati_sub_top">36~55岁</div>
          <div class="Per_Status_stati_sub_buttom">{{ statisticsData[5] }}</div>
        </div>
      </div>
      <div class="Per_Status_stati_sub">
        <div
          class="Per_Status_stati Per_Status_stati_sub_img stati_sub_seven"
        ></div>
        <div class="Per_Status_stati">
          <div class="Per_Status_stati_sub_top">56岁以上</div>
          <div class="Per_Status_stati_sub_buttom">{{ statisticsData[6] }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Test02 from "./components/Test02.vue";

export default {
  name: "App",
  components: {
    Test02,
  },
  data() {
    return {
      choiceSelected: 3,
      sumCount: 18181,
      isActive: 2021,
      detaliInfoCount: [12728, 8952, 12728, 2580],
      detaliInfoPercent: ["5453", "5453", "18.62%", "14.19%"],
      statisticsData: ["21%", "21%", "21%", "21%", "21%", "21%", "21%"],
    };
  },
  methods: {
    choiceClick(e, index) {
      this.choiceSelected = index;
      this.updateData(2018 + index);
    },
    handleClick(e, _year) {
      this.updateData(_year);
    },
    updateData(_year) {
      this.isActive = _year;
      this.$refs["Test02"].updateYear(_year);
      if (_year == 2020) {
        this.detaliInfoCount = [
          Math.round(Math.random() * 10000, 5),
          Math.round(Math.random() * 10000, 5),
          Math.round(Math.random() * 10000, 5),
          Math.round(Math.random() * 10000, 5),
        ];
        this.detaliInfoPercent = [
          Math.round(Math.random() * 10000, 5).toString(),
          Math.round(Math.random() * 10000, 5).toString(),
          Math.round(Math.random() * 100, 2) + "%",
          Math.round(Math.random() * 100, 2) + "%",
        ];
        this.statisticsData = [
          Math.round(Math.random() * 100, 2) + "%",
          Math.round(Math.random() * 100, 2) + "%",
          Math.round(Math.random() * 100, 2) + "%",
          Math.round(Math.random() * 100, 2) + "%",
          Math.round(Math.random() * 100, 2) + "%",
          Math.round(Math.random() * 100, 2) + "%",
          Math.round(Math.random() * 100, 2) + "%",
        ];
      } else if (_year == 2021) {
        this.detaliInfoCount = [12728, 8952, 12728, 2580];
        this.detaliInfoPercent = ["5453", "5453", "18.62%", "14.19%"];
        this.statisticsData = ["21%", "21%", "21%", "21%", "21%", "21%", "21%"];
      } else {
      }
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
timeline_container {
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
ul {
  list-style: none;
}
.choice {
  margin: auto 100px;
  height: 41px;
}
.choice li {
  float: left;
  width: 132px;
  height: 41px;
  /* border: 2px solid #156AAB; */
  background: url("./../../../public/img/choice.png") center center;
  background-size: 100%;
  background-repeat: none;
  font-size: 20px;
  font-family: Source Han Sans SC;
  font-weight: bold;
  color: #eff7ff;
  line-height: 41px;
  text-align: center;
  margin-left: 30px;
  cursor: pointer;
  letter-spacing: 2px;
}
.choice li:nth-child(1) {
  margin-left: 0;
}
.choice li.selected {
  background: url("./../../../public/img/choiceSelected.png") center center;
  background-size: 100%;
  background-repeat: none;
}
.info {
  margin: auto 10px;
  animation: info_Ani 4s;
  animation-fill-mode: forwards;
}

@keyframes info_Ani {
  from {
    opacity: 0.1;
  }
  to {
    opacity: 1;
  }
}

.sumCount {
  float: left;
  height: 320px;
}
.sumCount .sumCount_bg {
  width: 224px;
  height: 320px;
  background-image: url("./../../../public/img/sumCount_bg.png");
  background-size: 100%;
  background-repeat: no-repeat;
  background-position: center;
}
.sumCount .sumCount_count {
  font-size: 30px;
  font-family: HuXiaoBo-NanShen;
  font-weight: bold;
  color: #ffff00;
  position: relative;
  top: -140px;
  left: 70px;
}
.sumCount .sumCount_font {
  position: relative;
  font-size: 20px;
  font-family: Source Han Sans SC;
  font-weight: 400;
  color: #ffffff;
  line-height: 141px;
  top: -175px;
  left: 55px;
}
.detailInfo {
  color: wheat;
}

.detailInfo_cell {
  float: left;
}
.ul_detailInfo_font {
  margin-left: -40px;
}
.ul_detailInfo_font li {
  width: 220px;
  height: 70px;
  font-size: 18px;
  font-family: Source Han Sans SC;
  font-weight: 400;
  color: #ffffff;
  line-height: 22px;
  line-height: 70px;
}
.ul_detailInfo_font li .detailInfo_font_img {
  width: 80px;
  height: 60px;
  margin: 0 auto;
  float: left;
}
.li_hjrk .detailInfo_font_img {
  background-image: url("./../../../public/img/hjrk.png");
  background-size: 100%;
  background-repeat: no-repeat;
  background-position-y: center;
}
.li_xb .detailInfo_font_img {
  background-image: url("./../../../public/img/nanxing.png");
  background-size: 100%;
  background-repeat: no-repeat;
  background-position-y: center;
}
.li_elderly .detailInfo_font_img {
  background-image: url("./../../../public/img/eldly.png");
  background-size: 100%;
  background-repeat: no-repeat;
  background-position-y: center;
}
.li_child .detailInfo_font_img {
  background-image: url("./../../../public/img/child.png");
  background-size: 100%;
  background-repeat: no-repeat;
  background-position-y: center;
}
.detailInfo_count ul {
  margin-left: -20px;
}
.ul_detailInfo_font li .detailInfo_font_font {
  float: left;
}
.ul_detailInfo_count li {
  width: 125px;
  height: 70px;
}
.detailInfo_cell_title {
  width: 100%;
  height: 40px;
  background: #0a3b76;
  border-radius: 4px;
}
.detailInfo_cell_count {
  float: left;
  width: 80px;
  height: 40px;
  font-size: 22px;
  font-family: Microsoft YaHei;
  font-weight: 400;
  color: #ffe65c;
  line-height: 40px;
  text-align: center;
}
.detailInfo_cell_font {
  float: left;
  width: 21px;
  height: 40px;
  font-size: 21px;
  font-family: Microsoft YaHei;
  font-weight: 400;
  color: #ffffff;
  line-height: 40px;
}
.ul_detailInfo_count li:nth-child(1) .detailInfo_cell_title {
  margin-top: 30px;
}
.ul_detailInfo_percent li {
  width: 125px;
  height: 70px;
}
.ul_detailInfo_percent li:nth-child(1) .detailInfo_cell_title {
  margin-top: 30px;
}
.ul_detailInfo_series li {
  font-size: 18px;
  font-family: Source Han Sans SC;
  font-weight: 400;
  color: #ffffff;
  line-height: 22px;
  line-height: 70px;
}

.Per_Status_statistics {
  width: 740px;
  margin: 0 auto;
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  align-items: center;
}
.Per_Status_stati {
  float: left;
  height: 62px;
  height: 78px;
  animation: stati_sub_Ani 3s;
  animation-fill-mode: forwards;
}

.Per_Status_stati_sub_img {
  width: 62px;
  height: 72px;
  margin: 8px 12px 10px 8px;
  background-image: url("./../../../public/img/img0-6.png");
  background-size: 100%;
  background-repeat: no-repeat;
}
.stati_sub_one {
  background-image: url("./../../../public/img/img0-6.png");
}
.stati_sub_two {
  background-image: url("./../../../public/img/img7-12.png");
}
.stati_sub_three {
  background-image: url("./../../../public/img/img13-15.png");
}
.stati_sub_four {
  background-image: url("./../../../public/img/img16-18.png");
}

.stati_sub_five {
  background-image: url("./../../../public/img/img19-35.png");
}

.stati_sub_six {
  background-image: url("./../../../public/img/img36-55.png");
}

.stati_sub_seven {
  background-image: url("./../../../public/img/img56up.png");
}

@keyframes stati_sub_Ani {
  from {
    height: 1px;
    opacity: 0.1;
  }
  to {
    height: 72px;
    opacity: 1;
  }
}
.Per_Status_stati_sub_top {
  margin-top: 16px;
  width: 80px;
  font-size: 19px;
  font-family: Source Han Sans SC;
  font-weight: 400;
  color: #ffffff;
  line-height: 16px;
}
.Per_Status_stati_sub_buttom {
  margin-top: 12px;
  width: 51px;
  height: 27px;
  font-size: 34px;
  font-family: HuXiaoBo-NanShen;
  font-weight: 400;
  color: #fedc85;
  line-height: 16px;
}
.thirdSection {
  margin-top: 50px;
}

.detailInfo_line {
  float: left;
  width: 1px;
  margin-left: -20px;
}
.detailInfo_line li {
  width: 1px;
  height: 70px;
  background-image: url("./../../../public/img/seperateLine.png");
  background-size: 100%;
  background-repeat: no-repeat;
  background-position: center;
}
</style>
