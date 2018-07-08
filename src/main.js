new Vue({
  el: '#app',
  data: {
    value: 'check',
  },
  watch: {
    value: _.debounce(newVal => {
      console.log(newVal)
    }, 500)
  }
})
