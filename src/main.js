const app = new Vue({
  el: '#app',
  data: {
    message: 'Hello Vue.js',
  },
  methods: {
    handleInput(event) {
      this.message = event.target.value
      console.log(this.message)
    }
  }
})
