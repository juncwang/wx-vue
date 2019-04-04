import Vue from 'vue'
import Router from 'vue-router'

import Index from './views/Index'

Vue.use(Router)

const router =  new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    { 
      path: '*',
      redirect: '/index'
    },
    {
      path: '/',
      redirect: '/index'
    },
    {
      path: '/index',
      name: 'index',
      component: Index,
      redirect: '/chats',
      children: [
        {path: '/chats', name: 'chats', component: () => import('./views/Chats')},
        {path: '/contacts', name: 'contacts', component: () => import('./views/Contacts')},
        {path: '/discover', name: 'discover', component: () => import('./views/Discover')},
        {path: '/me', name: 'me', component: () => import('./views/Me')}
      ]
    },
    {
      path: '/moments',
      name: 'moments',
      component: () => import('./views/Moments')
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('./views/Login')
    },
    {
      path: '/register',
      name: 'register',
      component: () => import('./views/Register')
    },
    {
      path: '/publish',
      name: 'publish',
      component: () => import('./views/Publish')
    }
  ]
})

router.beforeEach((to, from, next) => {
  const isLogin = localStorage.wxToken ? true:false
  if(to.path == '/login' || to.path == '/register'){
    next()
  }else{
    isLogin ? next() : next('/login')
  }
})

export default router