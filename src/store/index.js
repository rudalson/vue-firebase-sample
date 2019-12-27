import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    title: '원래 제목'
  },
  mutations: {
    setTitle (state, payload) {
      state.title = payload
    }
  },
  actions: {
  },
  modules: {
  }
})
