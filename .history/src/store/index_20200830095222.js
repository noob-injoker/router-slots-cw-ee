import Vue from 'vue'
import Vuex from 'vuex'
import user from './user/user'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    some:""
  },
  mutations: {
    setSome(state,data){
      state.some = data
    }
  },
  actions: {
  },
  modules: {
    user
  }
})
