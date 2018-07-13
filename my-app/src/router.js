import Vue from 'vue'
import VueRouter from 'vue-router'

import ProductList from '@/views/ProductList'
import Product from '@/views/Product'

Vue.use(VueRouter)

export default new VueRouter({
  routes: [
    {
      path: '/product',
      component: ProductList,
    },
    {
      path: '/product/:id(\\d+)',
      component: Product,
      props: route => ({ id: Number(route.params.id) }),
    },
  ]
})
