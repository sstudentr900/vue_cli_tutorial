import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
    {
        path: '/',
        name: 'home',
        component: HomeView
    },
    {
        path: '/store',
        name: 'store',
        component: () => import('../views/storeView.vue')
    },
    {
        path: '/prop',
        name: 'prop',
        component: () => import('../views/propView.vue')
    },
    {
        path: '/emit',
        name: 'emit',
        component: () => import('../views/emitView.vue')
    },
    {
        path: '/routquery',
        name: 'routquery',
        component: () => import('../views/routqueryView.vue')
    },
    {
        path: '/scrollToTop',
        name: 'scrollToTop',
        component: () => import('../views/scrollToTopView.vue')
    },
    {
        path: '/model',
        name: 'model',
        component: () => import('../views/modelView.vue')
    },
    {
        path: '/i18n',
        name: 'i18n',
        component: () => import('../views/i18nView.vue')
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
    // scrollBehavior() {
    //     return { x: 0, y: 0, behavior: "smooth" };
    // },
})

export default router
