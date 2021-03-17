<template>
  <div id="app">
    <Test01 msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
import Test01 from "./components/Test01.vue";

export default {
  name: "App",
  components: {
    Test01,
  },
};
</script>

<style>
html,
body,
#app {
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
}
</style>
