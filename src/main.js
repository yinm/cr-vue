Vue.component('comp-child', {
  template: '<div><slot></slot></div>',
  data() {
    return {
      message: 'Vue.js',
    }
  },
})

new Vue({
  el: '#app',
  data: {
    message: 'Hello',
  },
})
