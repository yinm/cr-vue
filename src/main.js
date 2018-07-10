const mixin = {
  created() {
    this.hello()
  },
  methods: {
    hello() {
      console.log('hello from mixin!')
    }
  }
}

Vue.component('my-component-a', {
  mixins: [mixin],
  template: '<p>MyComponentA</p>',
})

Vue.component('my-component-b', {
  mixins: [mixin],
  template: '<p>MyComponentB</p>'
})

new Vue({
  el: '#app',
})
