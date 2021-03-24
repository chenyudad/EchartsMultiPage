<template>
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
</template>

<script>
export default {
  name: "PerStatus",
  data() {
    return {
      Per_Status_oneLabel: 791215,
      Per_Status_twoLabel: 254876,
      Per_Status_threeLabel: 254875,
      Per_Status_fourLabel: 81653,
    };
  },
  methods: {
    updateYear(_year) {
      if (_year == 2020) {
        this.Per_Status_oneLabel = 192265;
        this.Per_Status_twoLabel = 224871;
        this.Per_Status_threeLabel = 253872;
        this.Per_Status_fourLabel = 81648;
      } else if (_year == 2021) {
        this.Per_Status_oneLabel = 791215;
        this.Per_Status_twoLabel = 254876;
        this.Per_Status_threeLabel = 254875;
        this.Per_Status_fourLabel = 81653;
      } else {
        this.Per_Status_oneLabel = Math.floor(Math.random() * 1000000);
        this.Per_Status_twoLabel = Math.floor(Math.random() * 1000000);
        this.Per_Status_threeLabel = Math.floor(Math.random() * 1000000);
        this.Per_Status_fourLabel = Math.floor(Math.random() * 1000000);
      }
    },
  },
};
</script>
<style>

.Per_Status {
  position: relative;
  height: 148px;
  margin: 0px 80px 0px 40px;
  background-image: url("./../../../../public/img/per_Status_bg1.png"),
    url("./../../../../public/img/per_Status_bg2.png");
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

  background: url("./../../../../public/img/per_Status.png");
  background-repeat: no-repeat;
}
.Per_Status_one {
  width: 212px;
  margin-top: 0px;
  background: url("./../../../../public/img/per_Status_first.png");
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
</style>