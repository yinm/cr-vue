Vue.component('functional-component', {
  functional: true,
  render(createElement, context) {
    return createElement('div', context.props.message)
  },
  props: {
    message: String
  },
})

new Vue({
  el: '#app',
})
