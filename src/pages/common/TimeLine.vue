<template>
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
        <div class="timeline_dot" @click="handleClick(2014)"></div>
        <div class="timeline_text" @click="handleClick(2014)">2014</div>
        <div class="timeline_item"></div>
      </div>
      <div
        style="flex: 1; display: flex; position: relative"
        v-bind:class="{ timeline_actived: 2015 == isActive }"
      >
        <div class="timeline_item"></div>
        <div class="timeline_dot" @click="handleClick(2015)"></div>
        <div class="timeline_text" @click="handleClick(2015)">2015</div>
        <div class="timeline_item"></div>
      </div>
      <div
        style="flex: 1; display: flex; position: relative"
        v-bind:class="{ timeline_actived: 2016 == isActive }"
      >
        <div class="timeline_item"></div>
        <div class="timeline_dot" @click="handleClick(2016)"></div>
        <div class="timeline_text" @click="handleClick(2016)">2016</div>
        <div class="timeline_item"></div>
      </div>
      <div
        style="flex: 1; display: flex; position: relative"
        v-bind:class="{ timeline_actived: 2017 == isActive }"
      >
        <div class="timeline_item"></div>
        <div class="timeline_dot" @click="handleClick(2017)"></div>
        <div class="timeline_text" @click="handleClick(2017)">2017</div>
        <div class="timeline_item"></div>
      </div>
      <div
        style="flex: 1; display: flex; position: relative"
        v-bind:class="{ timeline_actived: 2018 == isActive }"
      >
        <div class="timeline_item"></div>
        <div class="timeline_dot" @click="handleClick(2018)"></div>
        <div class="timeline_text" @click="handleClick(2018)">2018</div>
        <div class="timeline_item"></div>
      </div>
      <div
        style="flex: 1; display: flex; position: relative"
        v-bind:class="{ timeline_actived: 2019 == isActive }"
      >
        <div class="timeline_item"></div>
        <div class="timeline_dot" @click="handleClick(2019)"></div>
        <div class="timeline_text" @click="handleClick(2019)">2019</div>
        <div class="timeline_item"></div>
      </div>
      <div
        style="flex: 1; display: flex; position: relative"
        v-bind:class="{ timeline_actived: 2020 == isActive }"
      >
        <div class="timeline_item"></div>
        <div class="timeline_dot" @click="handleClick(2020)"></div>
        <div class="timeline_text" @click="handleClick(2020)">2020</div>
        <div class="timeline_item"></div>
      </div>
      <div
        style="flex: 1; display: flex; position: relative"
        v-bind:class="{ timeline_actived: 2021 == isActive }"
      >
        <div class="timeline_item"></div>
        <div class="timeline_dot" @click="handleClick(2021)"></div>
        <div class="timeline_text" @click="handleClick(2021)">2021</div>
        <div class="timeline_item"></div>
      </div>
      <div style="flex: 1; display: flex; position: relative">
        <div class="timeline_item"></div>
        <div style="flex: 1"></div>
      </div>
    </div>
  </div>
</template>
 
 
 <script>
export default {
  name: "TimeLine",
  data() {
    return {
      isActive: 2021,
    };
  },
  methods: {
    handleClick(_year) {
      this.isActive = _year;
      ///通知父级组件
      this.$emit("yearChange", _year);
    },
    ///父组件更新选中
    updateActive(_year) {
      this.isActive = _year;
    },
  },
};
</script>

<style>
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
</style>