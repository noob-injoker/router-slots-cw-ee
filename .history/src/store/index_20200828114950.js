import Vue from 'vue'
import Vuex from 'vuex'
import { some } from 'core-js/fn/array'

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

  }
})
