import Vue from 'vue'
import Router from 'vue-router'
import Title from './views/Title.vue'
import Second from './views/Second.vue'
import Ordering from './views/Ordering.vue'

Vue.use(Router)

let router = new Router({
  routes: [
          {
      path: '/first',
      meta: {
        title: 'Choose your order',
      },
      name: 'First',
      component: Title
    },
          {
      path: '/second',
      meta: {
        title: 'Your order',
      },
      name: 'Second',
      component: Second
    },

    {
      path: '/ordering',
      meta: {
        title: 'Kraft Burgers',
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
      // route level code-splitting
      // this generates a separate chunk (read.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "read" */ './views/Kitchen.vue')
    }
  ]
})

router.beforeEach((to, from, next) => {
  document.title = to.meta.title
  next()
})

export default router;