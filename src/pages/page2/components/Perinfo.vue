<template>
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
</template>

<script>
export default {
  name: "Perinfo",
  data() {
    return {
      sumCount: 18181,
      detaliInfoCount: [12728, 8952, 12728, 2580],
      detaliInfoPercent: ["5453", "5453", "18.62%", "14.19%"],
    };
  },
  methods: {
    updateYear(_year) {
      if (_year == 2021) {
        this.sumCount = 18181;
        this.detaliInfoCount = [12728, 8952, 12728, 2580];
        this.detaliInfoPercent = ["5453", "5453", "18.62%", "14.19%"];
      } else {
        this.sumCount = Math.floor(Math.random() * 10000);
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
      }
    },
  },
};
</script>
<style>
ul {
  list-style: none;
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
  background-image: url("./../../../../public/img/sumCount_bg.png");
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
  background-image: url("./../../../../public/img/hjrk.png");
  background-size: 100%;
  background-repeat: no-repeat;
  background-position-y: center;
}
.li_xb .detailInfo_font_img {
  background-image: url("./../../../../public/img/nanxing.png");
  background-size: 100%;
  background-repeat: no-repeat;
  background-position-y: center;
}
.li_elderly .detailInfo_font_img {
  background-image: url("./../../../../public/img/eldly.png");
  background-size: 100%;
  background-repeat: no-repeat;
  background-position-y: center;
}
.li_child .detailInfo_font_img {
  background-image: url("./../../../../public/img/child.png");
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
  background-image: url("./../../../../public/img/img0-6.png");
  background-size: 100%;
  background-repeat: no-repeat;
}
.stati_sub_one {
  background-image: url("./../../../../public/img/img0-6.png");
}
.stati_sub_two {
  background-image: url("./../../../../public/img/img7-12.png");
}
.stati_sub_three {
  background-image: url("./../../../../public/img/img13-15.png");
}
.stati_sub_four {
  background-image: url("./../../../../public/img/img16-18.png");
}

.stati_sub_five {
  background-image: url("./../../../../public/img/img19-35.png");
}

.stati_sub_six {
  background-image: url("./../../../../public/img/img36-55.png");
}

.stati_sub_seven {
  background-image: url("./../../../../public/img/img56up.png");
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
  margin-top: 20px;
}

.detailInfo_line {
  float: left;
  width: 1px;
  margin-left: -20px;
}
.detailInfo_line li {
  width: 1px;
  height: 70px;
  background-image: url("./../../../../public/img/seperateLine.png");
  background-size: 100%;
  background-repeat: no-repeat;
  background-position: center;
}
</style>