<template>
  <div id="EnvironmentInfo">
    <div class="topleft">
      <div class="WcjInfo">
        <div class="title">专项行动</div>
        <div class="count">{{ zxxdCount }}</div>
      </div>
    </div>
    <div class="topright">
      <div class="WjcInfo">
        <div class="title">已消杀</div>
        <div class="count">{{ yxsCount }}</div>
      </div>
    </div>
    <div class="clear"></div>
    <div class="bottomleft">
      <div class="WcjInfo">
        <div class="title">未消杀</div>
        <div class="count yellow">{{ wxsCount }}</div>
      </div>
    </div>
    <div class="bottomright">
      <div class="WjcInfo">
        <div class="title">完成率</div>
        <div class="count">{{ wclCount }}%</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Environment",
  data() {
    return {
      zxxdCount: 328,
      yxsCount: 328,
      wxsCount: 0,
      wclCount: 100,
    };
  },
  methods: {},
};
</script>


<style scoped>
html,
body,
#EnvironmentInfo {
  margin: 0 auto;
  padding: 0;
  width: 100%;
  height: 280px;
  overflow: hidden;
  padding-top: 10px;
  text-align: center;
}
.title {
  font-size: 16px;
  font-family: Source Han Sans SC;
  font-weight: 400;
  float: left;
  position: absolute;
  margin-top: 32px;
  margin-left: 30px;
  color: #ffffff;
}
.count {
  float: left;
  position: absolute;
  margin-top: 22px;
  margin-left: 98px;
  width: 50px;
  height: 22px;
  font-size: 30px;
  font-family: Source Han Sans SC;
  font-weight: 500;
  color: #01dcef;
}
.WjcInfo {
  position: relative;
}
.yellow {
  color: #f2e511;
}
.topleft,
.topright,
.bottomleft,
.bottomright {
  width: 190px;
  height: 91px;
  float: left;
  padding: 8px;
  margin: 0;
}

.topleft {
  background: url("./../../../../public/img/0004.png") no-repeat !important;
  background-size: 100%;
}
.topright {
  background: url("./../../../../public/img/0004.png") no-repeat !important;
  background-size: 100%;
}
.bottomleft {
  background: url("./../../../../public/img/0005.png") no-repeat !important ;
  background-size: 100%;
}
.bottomright {
  background: url("./../../../../public/img/0004.png") no-repeat !important;
  background-size: 100%;
}

.clear {
  clear: both;
}
</style>
