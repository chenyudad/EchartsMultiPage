<template>
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
</template>

<script>
export default {
  name: "Perchoice",
  data() {
    return {
      choiceSelected: 3,
    };
  },
  methods: {
    choiceClick(e, index) {
      this.choiceSelected = index;

      this.$emit("yearChange", 2018 + index);
    },
  },
};
</script>

<style scoped>
.choice {
  margin: auto 100px;
  height: 41px;
}
.choice li {
  float: left;
  width: 132px;
  height: 41px;
  background: url("./../../../../public/img/choice.png") center center;
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
  background: url("./../../../../public/img/choiceSelected.png") center center;
  background-size: 100%;
  background-repeat: none;
}
</style>