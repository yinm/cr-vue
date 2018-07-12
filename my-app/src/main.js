import Vue from 'vue'
import App from './App.vue'
import store from './store'

store.dispatch('moduleA/load', '/path/a.json')
store.dispatch('moduleB/load', '/path/b.json')
