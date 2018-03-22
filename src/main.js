// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import VueRouter from 'vue-router'
import VueResource from 'vue-resource'

// import 'lib-flexible/flexible'
// import Mint from 'mint-ui';
// import 'mint-ui/lib/style.css'
// Vue.use(Mint);

import * as filters from './util/filter'
Object.keys(filters).forEach(k => Vue.filter(k, filters[k])) //注册过滤器
import Coo from './assets/js/cookie.js'
import Common from './assets/js/common.js'
Vue.prototype.Coo = Coo
Vue.prototype.Common = Common
// import { PopupPicker, Group } from 'vux'
// Vue.use(PopupPicker)
// Vue.use(Group)
// import { Radio } from 'mint-ui';

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
// Vue.component(Radio.name, Radio);