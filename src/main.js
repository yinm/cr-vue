Vue.filter('localeNum', val => {
  return val.toLocaleString()
})

new Vue({
  el: '#app',
  data: {
    price: 19800,
  },
})
