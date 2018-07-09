Vue.component('comp-child', {
  template: `
<section class="comp-child">
  <header>
    <slot name="header">デフォルトタイトル</slot> 
  </header>  
  <div class="content">
    <slot>デフォルトコンテンツ</slot>
  </div>
  <slot name="footer">
     <!-- なければ何も表示しない -->
  </slot>
</section>
  `
})

new Vue({
  el: '#app',
})
