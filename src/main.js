new Vue({
  el: '#app',
  directives: {
    focus: {
      inserted(el) {
        el.focus()
      }
    }
  }
})
