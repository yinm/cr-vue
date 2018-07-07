new Vue({
  el: '#app',
  data: {
    list: [
      { id: 1, name: 'スライム', hp: 100 },
      { id: 2, name: 'ゴブリン', hp: 200 },
      { id: 3, name: 'ドラゴン', hp: 500 },
    ],
  },
  methods: {
    powerup(index) {
      this.$set(this.list, index, { id: index + 1, name: `キング${this.list[index].name}`, hp: this.list[index].hp * 2 })
    }
  }
})
