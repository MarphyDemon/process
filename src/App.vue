<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'app',
}
</script>

<style lang="less">
    #app {
      font-family: 'Avenir', Helvetica, Arial, sans-serif;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      text-align: left;
      color: #2c3e50;
    }
    // @import "./assets/css/common";
    @import '~vux/src/styles/reset';
    @import './assets/css/theme';
    .address{
      width: 80%;
    }
</style>
