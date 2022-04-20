import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [{
        path: '/',
        name: 'home',
        component: HomeView
    },
    {
        path: '/search/:key',
        name: 'search',
        component: () =>
            import ('../views/createView.vue')
    },
    {
        path: '/create',
        name: 'create',
        component: () =>
            import ('../views/createView.vue')
    },
    {
        path: '/shopping',
        name: 'shopping',
        component: () =>
            import ('../views/shoppingView.vue')
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
        path: '/vif',
        name: 'vif',
        component: () =>
            import ('../views/vifView.vue')
    },
    {
        path: '/components',
        name: 'components',
        component: () =>
            import ('../views/componentsView.vue')
    },
    {
        path: '/for',
        name: 'for',
        component: () =>
            import ('../views/forView.vue')
    },
    {
        path: '/vuex',
        name: 'vuex',
        component: () =>
            import ('../views/vuexView.vue')
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
        path: '/image',
        name: 'image',
        component: () =>
            import ('../views/imageView.vue')
    },
    {
        path: '/mockjs',
        name: 'mockjs',
        component: () =>
            import ('../views/mockjsView.vue')
    },
    {
        path: '/transition',
        name: 'transition',
        component: () =>
            import ('../views/transitionView.vue')
    },
    {
        path: '/slide',
        name: 'slide',
        component: () =>
            import ('../views/slideView.vue')
    },
    {
        path: '/slide2',
        name: 'slide2',
        component: () =>
            import ('../views/slide2View.vue')
    },
    {
        path: '/slide3',
        name: 'slide3',
        component: () =>
            import ('../views/slide3View.vue')
    },
    {
        path: '/swiper',
        name: 'swiper',
        component: () =>
            import ('../views/swiperView.vue')
    },
    {
        path: '/i18n',
        name: 'i18n',
        component: () =>
            import ('../views/i18nView.vue')
    },
    {
        path: '/music',
        name: 'music',
        component: () =>
            import ('../views/musicView.vue')
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