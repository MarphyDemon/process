import Vue from 'vue'
import Router from 'vue-router'
import login from '@/views/login'
import index from '@/views/index'
import join from '@/views/join'
import forgot from '@/views/forgot'
import createTask from '@/views/create-task'
import task from '@/views/task'
import shopBuy from '@/views/shop-buy'
import userCenter from '@/views/user-center'
import addressList from '@/views/address-list'
import address from '@/views/address'
import createBuyTask from '@/views/createBuyTask'


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
    {
      path: '/createTask',
      name: 'createTask',
      component: createTask
    },
    {
      path: '/createBuyTask',
      name: 'createBuyTask',
      component: createBuyTask
    },
    {
      path: '/task',
      name: 'task',
      component: task
    },
    {
      path: '/shopBuy',
      name: 'shopBuy',
      component: shopBuy
    },
    {
      path: '/userCenter',
      name: 'userCenter',
      component: userCenter
    },
    {
      path: '/addressList',
      name: 'addressList',
      component: addressList
    },
    {
      path: '/address',
      name: 'address',
      component: address
    },
  ]
})
