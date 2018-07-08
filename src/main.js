const scroll = new SmoothScroll()
new Vue({
  el: '#app',
  methods: {
    scrollTop() {
      scroll.animateScroll(0)
    }
  }
})
