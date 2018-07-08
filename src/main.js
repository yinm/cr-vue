const app = new Vue({
  el: '#app',
  data: {
    edited: false,
    list: [
      { id: 1, name: 'apple', price: 100 },
      { id: 2, name: 'banana', price: 200 },
    ],
  },
  created() {
    const unwatch = this.$watch('list', () => {
      this.edited = true
      unwatch()
    }, {
      deep: true
    })
  }
})
