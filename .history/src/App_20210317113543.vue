<template>
  <div id="app">
    <Test msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
import Test from "./components/Test.vue";

export default {
  name: "App",
  components: {
    Test,
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
