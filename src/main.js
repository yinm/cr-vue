const app = new Vue({
  el: '#app',
  data: {
    scrollY: 0,
    timer: null,
  },
  created() {
    window.addEventListener('scroll', this.handleScroll)
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.handleScroll)
  },
  methods: {
    handleScroll() {
      if (this.timer === null) {
        this.timer = setTimeout(() => {
          this.scrollY = window.scrollY
          clearTimeout(this.timer)
          this.timer = null
        }, 200)
      }
    }
  }
})
