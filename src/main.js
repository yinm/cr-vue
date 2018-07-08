new Vue({
  el: '#app',
  data: {
    message: 'hello',
    foo: 'bar',
  },
  filters: {
    filter(message, foo, num) {
      console.log(message, foo, num)
    }
  }
})
