Vue.component('comp-board', {
  template: '<div>Message Board</div>',
})

Vue.component('comp-form', {
  template: '<div>Form<textarea v-model="message"></textarea></div>',
  data() {
    return { message: '' }
  }
})

new Vue({
  el: '#app',
  data: {
    current: 'comp-board',
  },
})
