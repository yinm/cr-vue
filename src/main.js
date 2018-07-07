const app = new Vue({
  el: '#app',
  methods: {
    handleClick(event) {
      alert(event.target)
    }
  }
})
