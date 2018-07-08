$(document).on('click', '[data-update]', function() {
  console.log('before update:', $('#message').val())
  $('#message').val($(this).attr('data-update'))
  console.log('after update:', $('#message').val())
  $('#message')[0].dispatchEvent(new Event('input'))
})

new Vue({
  el: '#app',
  methods: {
    handleInput(event) {
      console.log(event.target.value)
    }
  }
})
