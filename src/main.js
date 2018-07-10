Vue.component('my-component', {
  template: `
    <div class="my-component">
      <p>名前.{{ name }} HP.{{ hp }}</p>
      <p>名前 <input v-model="localName"></p>
      <p>HP <input size="5" v-model.number="localHp"></p>
    </div>
  `,
  props: {
    name: String,
    hp: Number,
  },
  computed: {
    localName: {
      get() {
        return this.name
      },
      set(val) {
        this.$emit('update:name', val)
      },
    },
    localHp: {
      get() {
        return this.hp
      },
      set(val) {
        this.$emit('update:hp', val)
      },
    }
  }
})

new Vue({
  el: '#app',
  data: {
    name: 'スライム',
    hp: 100,
  },
})
