Vue.component('my-circle', {
  template: '<circle cx="80" cy="75" r="50" :fill="fill"/>',
  props: {
    fill: String,
  },
})

new Vue({
  el: '#app',
  data: {
    toggle: false,
  },
  computed: {
    fill() {
      return this.toggle ? 'lightpink' : 'skyblue'
    },
  },
})
