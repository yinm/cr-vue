Vue.component('comp-child', {
  template: '<div class="comp-child"><slot></slot></div>',
})

new Vue({
  el: '#app'
})
