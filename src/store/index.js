import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    menu:'1'
  },
  mutations: {
    changeActiveMenu(state,data){
      state.menu = data
    }
  },
  actions: {
  },
  modules: {
  }
})
