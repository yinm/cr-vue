new Vue({
  el: '#app',
  data: {
    price: 19800,
  },
  filters: {
    localeNum(val) {
      return val.toLocaleString()
    }
  }
})
