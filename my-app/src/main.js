import Vue from 'vue'
import App from './App.vue'
import store from './store'

store.dispatch('moduleA/test')
console.log(store.getters['moduleA/test'])
