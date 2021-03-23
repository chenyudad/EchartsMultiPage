<template>
  <div id="NucleinInfo">
    <div class="topleft">
      <div class="WcjInfo">
        <div class="title">未采集人数</div>
        <div class="count">{{ wcjCount }}</div>
      </div>
    </div>
    <div class="topright">
      <div class="WjcInfo">
        <div class="title">未检测人数</div>
        <div class="count">{{ wjcCount }}</div>
      </div>
    </div>
    <div class="clear"></div>
    <div>
      <div class="perinfo">
        <div class="preCountTitle">已采集人数</div>
        <div>
          <span class="preCount">{{ ycjPerCount }}</span>
        </div>
      </div>
      <div class="perinfo">
        <div class="preCountTitle">已检测人数</div>
        <div>
          <span class="preCount">{{ yjcPerCount }}</span>
        </div>
      </div>
      <div class="perinfo">
        <div class="preCountTitle">应采集人数</div>
        <div>
          <span class="preCount">{{ ycjPerCount }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "PerNucleinInfo",
  data() {
    return {
      wcjCount: 29246,
      wjcCount: 2168,
      ycjPerCount: 29246,
      yjcPerCount: 29246,
      ycjPerCount: 29246,
    };
  },
  methods: {},
};
</script>


<style scoped>
html,
body,
#NucleinInfo {
  margin: 0;
  padding: 0;
  width: 100%;
  height: 280px;
  overflow: hidden;
  padding-top: 10px;
}
.title {
  width: 94px;
  height: 18px;
  font-size: 16px;
  font-family: Source Han Sans SC;
  font-weight: 400;
  color: #ffffff;
  padding-left: 96px;
}
.count {
  width: 81px;
  height: 21px;
  font-size: 26px;
  font-family: Microsoft YaHei;
  font-weight: 400;
  color: #f2e511;
  padding-top: 12px;
  padding-left: 96px;
}
.topleft,
.topright {
  width: 198px;
  height: 79px;
  float: left;
  margin: 0;
  padding: 0;
}

.topleft {
  background: url("./../../../../public/img/0001.png") !important;
  background-size: 100%;
  background-repeat: none;
}
.topright {
  background: url("./../../../../public/img/0002.png") !important;
  background-size: 100%;
  background-repeat: none;
}
.perinfo {
  position: relative;
  float: left;
  width: 131px;
  height: 71px;
  margin-right: 9px;
  background: url("./../../../../public/img/0003.png") !important;
  background-size: 100%;
  background-repeat: none;
  margin-top: 20px;
}
.preCountTitle {
  width: 131px;
  font-size: 18px;
  font-family: Source Han Sans CN;
  font-weight: 400;
  color: #ffffff;
  position: absolute;
  text-align: center;
  top: 56px;
}
.preCount {
  width: 131px;
  height: 18px;
  font-size: 24px;
  font-family: Source Han Sans SC;
  font-weight: 400;
  color: #ffffff;
  position: absolute;
  text-align: center;
  top: 8px;
}

.clear {
  clear: both;
}
</style>
