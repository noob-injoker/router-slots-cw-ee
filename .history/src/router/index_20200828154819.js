import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

  const routes = [
    {
      path: '/',
      name: 'Layout',
      component: layout,
      children: [
  
        {
          path: '',
          name: 'home',
          component: home
        },
        {
          path: 'cata',
          name: 'cata',
          component: () => import('../views/cata.vue')
        },
        {
          path: 'mine',
          name: 'mine',
          component: () => import('../views/mine.vue')
        },
        {
          path: 'shop',
          name: 'shop',
          component: () => import('../views/shop.vue')
        },
      ]
  
    },
    {
      path:'/login',
      name:"login",
      component: () => import('../views/login.vue'),
      meta:{
        title:'登录'
      }
    },
  // ,
  // {
  //   path: '/about',
  //   name: 'About',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }
  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
