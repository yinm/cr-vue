Vue.component('comp-child', {
  template: '<li>{{ name }} HP.{{ hp }}\
  <button @click="doAttack">攻撃する</button></li>',
  props: {
    id: Number,
    name: String,
    hp: Number,
  },
  methods: {
    doAttack() {
      this.$emit('attack', this.id)
    }
  }
})

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
    handleAttack(id) {
      let item = this.list.find((el) => {
        return el.id === id
      })

      if (item !== undefined && item.hp > 0) item.hp -= 10
    }
  }
})
