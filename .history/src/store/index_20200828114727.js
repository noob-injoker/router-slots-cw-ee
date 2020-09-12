import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    city:""

  },
  mutations: {
    setCity(state,data){
      state.name = data
    }

  },
  actions: {

  },
  modules: {

  }
})
