import Vue from 'vue';
import Router from 'vue-router';

// page definitions
import StartPage from './views/StartPage.vue';
import OrderPage from './views/OrderPage.vue';
import OrderSummaryPage from './views/OrderSummaryPage.vue';
import OrderCompletedPage from './views/OrderCompletedPage.vue';

Vue.use(Router);

let router = new Router({
    routes: [
        {
            path: '/',
            meta: {
                title: 'Welcome to Burger Heaven',
            },
            name: 'Start',
            component: StartPage
        },
        {
            path: '/OrderPage',
            meta: {
                title: 'Order Screen',
            },
            name: 'OrderPage',
            component: OrderPage
        },
        {
            path: '/OrderSummary',
            meta: {
                title: 'Order Summary'
            },
            name: 'Summary',
            component: OrderSummaryPage
        },
        {
            path: '/OrderCompleted',
            meta: {
                title: 'Order Completed',
            },
            name: 'Completed',
            component: OrderCompletedPage
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
});

router.beforeEach((to, from, next) => {
    document.title = to.meta.title
    next()
});

export default router;