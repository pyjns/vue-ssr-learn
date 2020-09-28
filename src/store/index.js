import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)


export function createStore() {
  return new Vuex.Store({
    state: {
      count: 0,
      list: []
    },
    mutations: {
      addCount(state) {
        state.count += 1
      },
      setList(state) {
        state.list = [1, 2, 3, 4, 5, 6, 7, 8, 9]
      }
    },
  })
}