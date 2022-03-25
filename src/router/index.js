import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [{
        path: '/',
        name: 'home',
        component: HomeView
    },
    {
        path: '/create',
        name: 'create',
        component: () =>
            import ('../views/createView.vue')
    },
    {
        path: '/axios',
        name: 'axios',
        component: () =>
            import ('../views/axiosView.vue')
    },
    {
        path: '/lifecycle',
        name: 'lifecycle',
        component: () =>
            import ('../views/lifecycleView.vue')
    },
    {
        path: '/von',
        name: 'von',
        component: () =>
            import ('../views/vonView.vue')
    },
    {
        path: '/for',
        name: 'for',
        component: () =>
            import ('../views/forView.vue')
    },
    {
        path: '/store',
        name: 'store',
        component: () =>
            import ('../views/storeView.vue')
    },
    {
        path: '/prop',
        name: 'prop',
        component: () =>
            import ('../views/propView.vue')
    },
    {
        path: '/emit',
        name: 'emit',
        component: () =>
            import ('../views/emitView.vue')
    },
    {
        path: '/routquery',
        name: 'routquery',
        component: () =>
            import ('../views/routqueryView.vue')
    },
    {
        path: '/scrollToTop',
        name: 'scrollToTop',
        component: () =>
            import ('../views/scrollToTopView.vue')
    },
    {
        path: '/model',
        name: 'model',
        component: () =>
            import ('../views/modelView.vue')
    },
    {
        path: '/i18n',
        name: 'i18n',
        component: () =>
            import ('../views/i18nView.vue')
    }
]

const router = createRouter({
        history: createWebHistory(process.env.BASE_URL),
        routes,
        // scrollBehavior() {
        //     return { x: 0, y: 0, behavior: "smooth" };
        // },
    })
    // 全域設置進入路由之前的時間點
router.beforeEach((to, from, next) => {
    // 當路由物件的 meta 設有 requiresAuth 時
    if (to.matched.some(record => record.meta.requiresAuth)) {
        // 尚未登入
        // if (!Token) {
        //     next({ path: '/login' }) // 導向登入頁面
        // } else {
        //     next() // 登入成功，則可繼續往下執行
        // }
        next() // 登入成功，則可繼續往下執行
    } else {
        next() // 確保一定要使用 next()
    }
})
export default router