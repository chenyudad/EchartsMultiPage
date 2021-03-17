<template>
  <div id="app">
    <Test02 msg="echarts " />
  </div>
</template>

<script>
import Test02 from "./components/Test02.vue";

export default {
  name: "App",
  components: {
    Test02,
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
  width: 100%;
  height: 100%;
}
</style>
