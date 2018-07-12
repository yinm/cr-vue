import Vue from 'vue'
import App from './App.vue'
import store from './store'

console.log(store.state.moduleA.count)
console.log(store.state.moduleB.count)

store.commit('moduleA/update')
console.log(store.state.moduleA.count)
console.log(store.state.moduleB.count)

store.commit('moduleB/update')
console.log(store.state.moduleA.count)
console.log(store.state.moduleB.count)
