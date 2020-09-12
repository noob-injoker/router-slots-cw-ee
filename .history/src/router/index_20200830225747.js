import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Layout from '../views/Layout.vue'

Vue.use(VueRouter)

const routes = [
  //here is redirect
  {
    path: '/users',
    redirect: '/users/users'
  },
  {
    path: '/roles',
    redirect: '/rights/roles'
  },
  {
    path: '/rights',
    redirect: '/rights/rights'
  },
  {
    path: '/rights',
    redirect: '/rights/rights'
  },
  {
    path: '/rights',
    redirect: '/rights/rights'
  },
  {
    path: '/rights',
    redirect: '/rights/rights'
  },
  {
    path: '/rights',
    redirect: '/rights/rights'
  },


  //========here is layout

  {
    path: '/',
    name: 'Layout',
    component: Layout,
    children: [

      {
        path: '',
        name: 'Home',
        component: Home
      },

      {
        path: '/users/users',
        name: 'users',
        component: () => import('../views/users.vue')
      }
      // ,
      // {
      //   path: 'Users',
      //   name: 'Users',
      //   component: () => import('../views/Users.vue')
      // }
    ]

  },
  {
    path: '/Login',
    name: "Login",
    component: () => import('../views/Login.vue'),
    meta: {
      title: '登录'
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

let whitePath = ['/Login']


router.beforeEach((to, from, next) => {
  let user = localStorage.getItem('adminUser')

  document.title = to.meta.title
  if (whitePath.includes(to.path)) {
    next()
  } else {

    if (user) {
      next()
    } else {
      next('/Login')
    }
  }
})


export default router
