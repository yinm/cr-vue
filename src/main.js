const app = new Vue({
  el: '#app',
  data: {
    width: 800,
  },
  computed: {
    halfWidth() {
      return this.width / 2
    }
  },
  methods: {
    getHalfWidth() {
      console.log(this.halfWidth)
    }
  }
})
