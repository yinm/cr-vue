new Vue({
  el: '#app',
  data: {
    list: [],
  },
  created() {
    axios.get('list.json')
      .then(response => this.list = response.data)
      .catch(e => console.e)
  }
})
