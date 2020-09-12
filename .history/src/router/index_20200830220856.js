import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Layout from '../views/Layout.vue'

Vue.use(VueRouter)

  const routes = [
    
    {
      path: '/',
      name: 'Layout',
      component: Layout,
      children: [
  
        {
          path: '',
          name: 'Home',
          component: Home
        }
        // ,
        // {
        //   path: 'cata',
        //   name: 'cata',
        //   component: () => import('../views/cata.vue')
        // }
      ]
  
    },
    {
      path:'/Login',
      name:"Login",
      component: () => import('../views/Login.vue'),
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

let whitePath = ['/login']
let whitePathCommon = ['/register', '/managerList']

router.beforeEach( (to, from, next) => {
  let user =  cache.getItem("user")

  document.title = to.meta.title
  if (whitePath.includes(to.path)) {
    next()
  } else {

    if (user) {
      let isAdmin =  localStorage.getItem('isAdmin')
      if (isAdmin) {
        next()
      } else {
        if (whitePathCommon.includes(to.path)) {
          next('/err')
        } else {
          next()
        }
      }
    } else {
      next('/login')
    }
  }
})


export default router
