Vue.directive('example', {
  bind(el, binding) {
    console.log('v-example bind')
  },

  inserted(el, binding) {
    console.log('v-example inserted')
  },

  update(el, binding) {
    console.log('v-example update')
  },

  componentUpdated(el, binding) {
    console.log('v-example componentedUpdated')
  },

  unbind(el, binding) {
    console.log('v-example unbind')
  },
})

const app = new Vue({
  el: '#app',
})
