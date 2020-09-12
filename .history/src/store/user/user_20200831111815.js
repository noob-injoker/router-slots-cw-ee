import api from '../../http/api'
import router from '../../router'
import { Message } from 'element-ui'
import Vue from 'vue'

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
      console.log(router);
      let res = await api.getMenus()


      if (res.meta.status === 200) {
        let obj = {
          authName: "首页",
          path: ""
        }
        res.data.unshift(obj)
        res.data.map((item, index) => {
          console.log(index);
          router.options.routes[8].children.map((item1, index1) => {
            if(item1.name===item.path){
              Vue.set(item, 'icon', item1.meta.icon)
            }
            item.children.map((item2,index2)=>{
             if(item2.path===item.){

             }
            })
           
          })
        })

        // 提交mutation
        commit('setMenus', res.data);

        console.log(res.data);

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
        router.push('/')
        // 提示用户
        Message.success('登录成功')
      } else {
        Message.error(res.meta.msg)
      }
    }

  },
}