const windowPlugin = {
  install(Vue) {
    let store = new Vue({
      data: {
        scrollY: 0,
      },
    })

    let timer = null
    window.addEventListener('scroll', function() {
      if (timer === null) {
        timer = setTimeout(function() {
          store.scrollY = window.scrollY
          clearTimeout(timer)
          timer = null
        }, 200)
      }
    })

    Vue.prototype.$window = store.$data
  }
}

Vue.use(windowPlugin)

Vue.component('my-component', {
  template: '<div>{{ scrollY }}</div>',
  computed: {
    scrollY() {
      return this.$window.scrollY
    },
  },
})
