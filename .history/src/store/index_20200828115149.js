import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    some:""
  },
  mutations: {
    setSome(state,data){
      state.data = some
    }
  },
  actions: {
  },
  modules: {
  }
})
