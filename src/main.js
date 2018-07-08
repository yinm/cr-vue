Vue.component('comp-child', {
  template: '<button @click="handleClick">イベント発火</button>',
  methods: {
    handleClick() {
      this.$emit('childs-event')
    },
  },
})

new Vue({
  el: '#app',
  methods: {
    parentsMethod() {
      alert('イベントをキャッチ')
    }
  },
})
