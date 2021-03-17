<template>
  <Test01 msg="Welcome to Your Vue.js App" />
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
body {
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
}
</style>
