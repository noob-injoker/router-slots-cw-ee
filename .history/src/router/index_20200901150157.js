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
        component: Home,
        meta: {

          icon: 'el-icon-s-home',

        }
      },
      {
        path: 'users/users',
        name: 'users',
        component: () => import('../views/users.vue'),
        meta: {
          icon: 'el-icon-user',
          childIconList: [{
            childIconListIcon: 'el-icon-folder-opened'
          }]
        }
      },
      {
        path: 'rights/roles',
        name: 'roles',
        component: () => import('../views/roles.vue'),
        meta: {
          icon: 'el-icon-folder',
          childIconList: [{

            childIconListIcon: 'el-icon-setting'

          }

          ]
        }
      },
      {
        path: 'rights/rights',
        name: 'rights',
        component: () => import('../views/rights.vue'),
        meta: {
          icon: 'el-icon-folder',
          childIconList: [
            {
              childIconListIcon: 'el-icon-c-scale-to-original'
            },

          ]
        }
      },
      {
        path: 'goods/params',
        name: 'params',
        component: () => import('../views/params.vue'),
        meta: {
          icon: 'el-icon-goods',
          childIconList: [

            {
              childIconListIcon: 'el-icon-bell'
            }

          ]
        }

      },
      {
        path: 'goods/goods',
        name: 'goods',
        component: () => import('../views/goods.vue'),
        meta: {
          icon: 'el-icon-goods',
          childIconList: [{
            childIconListIcon: 'el-icon-help'
          }]
        }
      },
      {
        path: 'goods/categories',
        name: 'categories',
        component: () => import('../views/categories.vue'),
        meta: {
          icon: 'el-icon-s-order',
          childIconList: [{
            childIconListIcon: 'el-icon-date'
          }]
        }
      },
      {
        path: 'orders/orders',
        name: 'orders',
        component: () => import('../views/orders.vue'),
        meta: {
          icon: 'el-icon-s-order',
          childIconList: [{
            childIconListIcon: 'el-icon-folder-add'
          }]
        }
      },
      {
        path: 'reports/reports',
        name: 'reports',
        component: () => import('../views/reports.vue'),
        meta: {
          icon: 'el-icon-message',
          childIconList: [{
            childIconListIcon: 'el-icon-folder-add'
          }]
        }
      },
      {
        path: 'reports/reports',
        name: 'reports',
        component: () => import('../components/dd.vue'),
        meta: {
          icon: 'el-icon-message',
          childIconList: [{
            childIconListIcon: 'el-icon-folder-add'
          }]
        }
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
  {
    path: '/dd',
    name: "dd",
    component: () => import('../components/dd.vue'),
    meta: {
      title: 'dd'
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
