import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component:  r => require.ensure([], () => r(require('@/views/Home')), 'Home'),
    meta: {
      title: "主页",    
      show: true               
    }
  },
  {
    path:'/technology',
    name:'technology',
    component:  r => require.ensure([], () => r(require('@/views/Technology')), 'Technology'),
    meta: {
      title: "技术杂谈",    
      show: true               
    }
  },
  {
    path:'/life',
    name:'life',
    component:  r => require.ensure([], () => r(require('@/views/Life')), 'Life'),
    meta: {
      title: "生活随笔",    
      show: true               
    }
  },
  {
    path:'/msgboard',
    name:'msgboard',
    component:  r => require.ensure([], () => r(require('@/views/MsgBoard')), 'MsgBoard'),
    meta: {
      title: "留言板",    
      show: true               
    }
  },
  {
    path:'/about',
    name:'about',
    component:  r => require.ensure([], () => r(require('@/views/About')), 'About'),
    meta: {
      title: "关于",    
      show: true               
    }
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
