import api from '../../http/api'
import router from '../../router'
import { Message } from 'element-ui'

export default {
  // 开启命名空间 这个文件就是单独的一个vuex的模块
  namespaced: true,
  state: {
    menus: []
  },
  mutations: {
    setMenus(state, data) {
      state.menus = data
    }
  },
  actions: {
    // 所有的请求都写在actions里面
    // action里面的方法可以传两个参数 第一个参数是整个store(vuex对象) 第二个参数是请求的参数
    async getMenus({ commit }) {
      let res = await api.getMenus()
      console.log(777);
      console.log(res);
      if (res.meta.status === 200) {
        // 提交mutation
        commit('setMenus', res.data);
        console.log(666);
      }
    },
    // async getMenus({commit}){
    //   let res = await api.getMenus()
    // },
    async login({ commit }, { username, password }) {
      console.log(commit);
      let res = await api.login({
        username,
        password
      })
      if (res.meta.status === 200) {
        // 存储信息
        localStorage.setItem('adminToken', res.data.token)
        localStorage.setItem('adminUser', JSON.stringify(res.data))
        // 跳转路由
        router.push('')
        // 提示用户
        Message.success('登录成功')
      } else {
        Message.error(res.meta.msg)
      }
    }
    // getMenus() {
    //   api.getMenus().then().catch()
    // }
  },
}