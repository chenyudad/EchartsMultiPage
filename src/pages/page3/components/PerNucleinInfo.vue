<template>
  <div id="NucleinInfo">
    <div class="Nucleintopleft">
      <div class="WcjInfo">
        <div class="title">未采集人数</div>
        <div class="count">{{ wcjCount }}</div>
      </div>
    </div>
    <div class="Nucleintopright">
      <div class="WjcInfo">
        <div class="title">未检测人数</div>
        <div class="count">{{ wjcCount }}</div>
      </div>
    </div>
    <div class="clear"></div>
    <div>
      <div class="Nucleinperinfo">
        <div class="preCountTitle">已采集人数</div>
        <div>
          <span class="preCount">{{ ycjPerCount }}</span>
        </div>
      </div>
      <div class="Nucleinperinfo">
        <div class="preCountTitle">已检测人数</div>
        <div>
          <span class="preCount">{{ yjcPerCount }}</span>
        </div>
      </div>
      <div class="Nucleinperinfo">
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
  methods: {
    updateData(flag) {
      if (flag === "银河街道") {
        this.wcjCount = 29246;
        this.wjcCount = 2168;
        this.ycjPerCount = 29246;
        this.yjcPerCount = 29246;
        this.ycjPerCount = 29246;
      } else if (flag === "和谐家园社区") {
        this.wcjCount = 32114;
        this.wjcCount = 1341;
        this.ycjPerCount = 32114;
        this.yjcPerCount = 32114;
        this.ycjPerCount = 32114;
      }
    },
  },
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
.Nucleintopleft,
.Nucleintopright {
  width: 198px;
  height: 79px;
  float: left;
  margin: 0;
  padding: 0;
}

.Nucleintopleft {
  background: url("./../../../../public/img/0001.png") !important;
  background-size: 100%;
  background-repeat: none;
}
.Nucleintopright {
  background: url("./../../../../public/img/0002.png") !important;
  background-size: 100%;
  background-repeat: none;
}
.Nucleinperinfo {
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


<style  >
.Nucleintopleft,
.Nucleintopright,
.Nucleinbottomleft,
.Nucleinbottomright {
  animation: Nuclein_Ani 3s;
  animation-fill-mode: forwards;
}
@keyframes Nuclein_Ani {
  from {
    width: 0px;
    opacity: 0;
  }
  to {
    width: 198px;
    opacity: 1;
  }
}

.Nucleinperinfo {
  animation: Nucleinperinfo_Ani 3s;
  animation-fill-mode: forwards;
}
@keyframes Nucleinperinfo_Ani {
  from {
    width: 0px;
    opacity: 0;
  }
  to {
    width: 131px;
    opacity: 1;
  }
}
</style>