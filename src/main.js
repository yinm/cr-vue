new Vue({
  el: '#app',
  data: {
    show: true,
  },
  methods: {
    beforeEnter(el) {
      console.log('before-enter')
    },
    enter(el, done) {
      console.log('enter')
      setTimeout(done, 1000)
    },
    afterEnter(el) {
      console.log('after-enter')
    },
    enterCancelled(el) {
      console.log('enter-cancelled')
    },
    beforeLeave(el) {
      console.log('before-leave')
    },
    leave(el, done) {
      console.log('leave')
      setTimeout(done, 1000)
    },
    afterLeave(el) {
      console.log('after-leave')
    },
    leaveCancelled(el) {
      console.log('leave-cancelled')
    }
  }
})
