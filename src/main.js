const app = new Vue({
  el: '#app',
  data: {
    list: [],
  },
  watch: {
    list() {
      console.log(`通常:${this.$refs.list.offsetHeight}`)

      this.$nextTick(() => {
        console.log(`nextTick:${this.$refs.list.offsetHeight}`)
      })
    }
  }
})
