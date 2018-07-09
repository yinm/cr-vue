Vue.component('comp-child', {
  template: '<div class=comp-child"><slot text="Hello!"></slot></div>',
})

new Vue({
  el: '#app',
})
