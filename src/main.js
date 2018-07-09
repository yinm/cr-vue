Vue.component('comp-child', {
  template: '<div><slot>何もないよ</slot></div>',
})

new Vue({
  el: '#app',
})
