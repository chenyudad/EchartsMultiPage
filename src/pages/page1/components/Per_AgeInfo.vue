<template>
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
</template>


<script>
export default {
  name: "PerAgeInfo",
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
    updateYear(_year) {
      if (_year == 2020) {
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

.perAgeInfo {
  position: relative;
  height: 260px;
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
  background-image: url("./../../../../public/img/ageBg.png");
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
  background-image: url("./../../../../public/img/ageBottomBg.png");
  background-size: 100%;
  background-position-y: 12px;
  background-repeat: no-repeat;
}
</style>
