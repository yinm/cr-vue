import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

const moduleA = {
  state: {
    count: 1,
  },
  mutations: {
    update(state) {
      state.count += 100
    }
  }
}

const moduleB = {
  state: {
    count: 2,
  },
  mutations: {
    update(state) {
      state.count += 200
    }
  }
}

const store = new Vuex.Store({
  modules: {
    moduleA,
    moduleB,
  }
})

export default store
