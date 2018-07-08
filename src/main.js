const app = new Vue({
  el: '#app',
  data: {
    preview: '',
  },
  methods: {
    handleChange(event) {
      let file = event.target.files[0]
      if (file && file.type.match(/^image\/(png|jpeg)$/)) {
        this.preview = window.URL.createObjectURL(file)
      }
    }
  }
})
