import Vue from 'vue'
import Router from 'vue-router'
import Startingpage from './views/Startingpage.vue'
import Ordering from './views/Ordering.vue'
import Kitchen from './views/Kitchen.vue'
import KitchenStock from './views/KitchenStock.vue'
import Sides from './views/Sides.vue'


Vue.use(Router)

let router = new Router({
  routes: [
    {
      path: '/',
      meta: {
        title: 'Burger Bidness',
      },
      name: 'startingpage',
      component: Startingpage
    },

    {
      path: '/ordering',
      meta: {
        title: 'Kitchen Burger bidness',
      },
      name: 'ordering',
      component: Ordering
    },

    {
      path: '/ordering/sides',
      meta:{
        title: "Order your sides",
      },
      name: 'sides',
      component: Sides
    },

    {
      path: '/kitchen',
      meta: {
        title: 'Kitchen',
      },
      name: 'kitchen',
      component: Kitchen
    },
    {
      path: '/kitchenstock',
      meta: {
        title: 'Kitchen Stock',
      },
      name: 'kitchenstock',
      component: KitchenStock
    }
  ]
})

router.beforeEach((to, from, next) => {
  document.title = to.meta.title
  next()
})

export default router;
