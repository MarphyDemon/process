import Vue from 'vue'
import Router from 'vue-router'
import login from '@/views/login'
import index from '@/views/index'
import join from '@/views/join'
import forgot from '@/views/forgot'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'login',
      component: login
    },
    {
      path: '/index',
      name: 'index',
      component: index
    },
    {
      path: '/join',
      name: 'join',
      component: join
    },
    {
      path: '/forgot',
      name: 'forgot',
      component: forgot
    },
  ]
})
