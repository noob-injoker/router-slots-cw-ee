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
    path: '/goods',
    redirect: '/goods/goods'
  },
  {
    path: '/params',
    redirect: '/goods/params'
  },
  {
    path: '/categories',
    redirect: '/goods/categories'
  },
  {
    path: '/orders',
    redirect: '/orders/orders'
  },
  {
    path: '/reports',
    redirect: 'reports/reports'
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
      },
      {
        path: '/rights/roles',
        name: 'roles',
        component: () => import('../views/roles.vue')
      },
      {
        path: '/rights/rights',
        name: 'rights',
        component: () => import('../views/rights.vue')
      },
      {
        path: '/goods/params',
        name: 'params',
        component: () => import('../views/params.vue')
      },
      {
        path: '/goods/goods',
        name: 'goods',
        component: () => import('../views/goods.vue')
      },
      {
        path: '/goods/categories',
        name: 'categories',
        component: () => import('../views/categories.vue')
      },
      {
        path: '/orders/orders',
        name: 'orders',
        component: () => import('../views/orders.vue')
      },
      {
        path: 'reports/reports',
        name: 'reports',
        component: () => import('../views/reports.vue')
      }
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
