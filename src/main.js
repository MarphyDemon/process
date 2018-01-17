// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import VueRouter from 'vue-router'
import VueResource from 'vue-resource'

// import Mint from 'mint-ui';
// import 'mint-ui/lib/style.css'
// Vue.use(Mint);

import { PopupPicker, Group } from 'vux'
// Vue.use(PopupPicker)
// Vue.use(Group)

Vue.config.productionTip = false
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
// 此处需要use后，this.$http.get或者this.$http.post才可以
Vue.use(VueRouter)
Vue.use(VueResource)