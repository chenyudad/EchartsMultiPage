<template>
  <img alt="Vue logo" src="./assets/logo.png" />
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
#app {
}
</style>
