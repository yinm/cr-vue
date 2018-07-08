new Vue({
  el: '#app',
  filters: {
    round(val) {
      return Math.round(val * 100) / 100
    },

    radian(val) {
      return val * Math.PI / 100
    },
  }
})
