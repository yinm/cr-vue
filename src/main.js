Vue.component('comp-child', {
  template: '<p>{{ val }}</p>',
  props: ['val'],
})

new Vue({
  el: '#app',
  data: {
    valueA: 'これはA',
    valueB: 'こればB',
  }
})
