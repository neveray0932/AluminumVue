<template>
  <div id="app">
    <!-- <router-view v-if="isShow"></router-view> -->
    <container> </container>
  </div>
</template>

<script>
import container from "./components/container.vue";
// import test from "./components/test.vue";

export default {
  name: "app",
  data() {
    return {
      isShow: true, //控制視圖是否顯示的變量
    };
  },
  provide() {
    //父組件中通過provide來提供變量，在子組件中通過inject來註入變量。
    return {
      reload: this.reload,
    };
  },

  components: {
    container,
  },
  methods: {
    reload() {
      this.isShow = false; //先關閉，
      this.$nextTick(function () {
        this.isShow = true; //再打開
      });
    },
  },
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
