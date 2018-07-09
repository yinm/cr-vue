Vue.component('comp-child', {
  template: '<div>test</div>',
  created() {
    this.$on('open', () => {
      console.log('testttt')
    })
  }
})

new Vue({
  el: '#app',
  methods: {
    handleClick() {
      this.$refs.child.$emit('open')
    }
  }
})
