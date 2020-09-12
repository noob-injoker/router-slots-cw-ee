import Vue from 'vue'
import Vuex from 'vuex'
import user from './user/user'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    menus:""
  },
  mutations: {
    setSome(state,data){
      state.menus = data
    }
  },
  actions: {
  },
  modules: {
    user
  }
})
