import store from '@/store.js'
import Vue from 'vue'
import App from './App'

console.log(store.getters.count)
console.log(store.getters.max)
console.log(store.getters.item(1))
console.log(store.getters.name(1))

new Vue({
  el: '#app',
  components: { App },
  template: '<App />',
})
