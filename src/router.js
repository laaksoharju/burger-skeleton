import Vue from 'vue'
import Router from 'vue-router'
import Welcome from './views/welcome.vue'
import Title from './views/Title.vue'
import Second from './views/tab.vue'
import Ordering from './views/Ordering.vue'
import Summary from './views/Order_summary.vue'

Vue.use(Router)

let router = new Router({
    routes: [
        //    {
        //      path: '/',
        //      meta: {
        //        title: 'Welcome',
        //      },
        //      name: 'welcome',
        //      component: Welcome
        //    },
        {
            path: '/',
            meta: {
                title: 'First',
            },
            name: 'first',
            component: Title
        },
        {
            path: '/second',
            meta: {
                title: 'Second',
            },
            name: 'second',
            component: Second
        },
        {
            path: '/third',
            meta: {
                title: 'Order Summary'
            },
            name: 'third',
            component: Summary
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

// let router = new Router({
//   routes: [
//     {
//       path: '/',
//       meta: {
//         title: 'Kraft Burgers',
//       },
//       name: 'ordering',
//       component: Ordering
//     },
//     {
//       path: '/kitchen',
//       meta: {
//         title: 'Kitchen',
//       },
//       name: 'kitchen',
//       // route level code-splitting
//       // this generates a separate chunk (read.[hash].js) for this route
//       // which is lazy-loaded when the route is visited.
//       component: () => import(/* webpackChunkName: "read" */ './views/Kitchen.vue')
//     }
//   ]
// })


router.beforeEach((to, from, next) => {
    document.title = to.meta.title
    next()
})

export default router;