const myComponent = {
  template: '<p>MyComponent</p>',
}

new Vue({
  el: '#app',
  components: {
    'my-component': myComponent,
  }
})
