<template>
  <div id="app">
    <UE4iframe id="mainContainer" msg="引用ue4视频流" />
    <CommandNav msg="引用菜单 " />
    <WGSConvertForm msg="坐标转换 " />
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
#mainContainer,
#app {
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100%;
}
</style>
