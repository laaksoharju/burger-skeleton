import Vue from 'vue'
import Router from 'vue-router'
import Startingpage from './views/Startingpage.vue'
import Ordering from './views/Ordering.vue'
import Kitchen from './views/Kitchen.vue'

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
      path: '/kitchen',
      meta: {
        title: 'Kitchen',
      },
      name: 'kitchen',
      component: Kitchen
    }
  ]
})

router.beforeEach((to, from, next) => {
  document.title = to.meta.title
  next()
})

export default router;
