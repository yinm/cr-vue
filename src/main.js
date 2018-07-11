const MyPlugin = {
  install(Vue, options) {
    console.log(options)
  }
}

Vue.use(MyPlugin, { lang: 'ja' })
