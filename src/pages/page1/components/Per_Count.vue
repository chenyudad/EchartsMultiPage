<template>
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
</template>
<script>
export default {
  name: "PerCount",
  data() {
    return {
      totalMonthNum: 606053,
      month_growthRate: "0.61%",
      sumPerCount: 3214,
      growthRate: "-0.22%",
      isUp: true,
      isDown: true,
    };
  },
  methods: {
    updateYear(_year) {
      if (_year == 2020) {
        this.totalMonthNum = 606053;
        this.month_growthRate = "0.61%";
        this.sumPerCount = 3214;
        this.growthRate = "-0.22%";
        this.isUp = true;
        this.isDown = true;
      } else if (_year == 2021) {
        this.totalMonthNum = 606053;
        this.month_growthRate = "0.61%";
        this.sumPerCount = 3214;
        this.growthRate = "-0.22%";
      } else {
        this.totalMonthNum = Math.floor(Math.random() * 1000000);
        this.month_growthRate = Math.round(Math.random() * 100, 2) / 100 + "%";
        this.sumPerCount = Math.floor(Math.random() * 1000);
        this.growthRate = Math.round(Math.random() * 100, 2) / 100 + "%";
      }
    },
  },
  mounted: function () {},
};
</script>

<style scoped>
.Per_Count {
  position: relative;
  height: 240px;
  margin: 0px 80px 0px 80px;
  background-image: url("./../../../../public/img/Per_CountBg.png");
  background-repeat: no-repeat;
  background-position: 0 0;
  background-size: 100% 100%;
}

.Per_Status_vertical_title {
  background: url("./../../../../public/img/titletype.png");
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
  background-image: url("./../../../../public/img/growthArrow.png");
  background-size: 100%;
  background-repeat: no-repeat;
}
.upArrow .cellCount_title {
  margin-left: 20px;
}
.downArrow .cellCount_img {
  background-image: url("./../../../../public/img/decreaseArrow.png");
  background-size: 100%;
  background-repeat: no-repeat;
}
.downArrow .cellCount_title {
  margin-left: 25px;
}

.clear {
  clear: both;
}
</style>