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
        path: '/lodash',
        name: 'lodash',
        component: () =>
            import ('../views/lodashView.vue')
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
        path: '/compositionAPI',
        name: 'compositionAPI',
        component: () =>
            import ('../views/compositionAPIView.vue')
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
        path: '/propAndEmit',
        name: 'propAndEmit',
        component: () =>
            import ('../views/propAndEmitView.vue')
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
        path: '/nprogress',
        name: 'nprogress',
        component: () =>
            import ('../views/nprogressView.vue')
    },
    {
        path: '/input',
        name: 'input',
        component: () =>
            import ('../views/inputView.vue')
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
        path: '/slide4',
        name: 'slide4',
        component: () =>
            import ('../views/slide4View.vue')
    },
    {
        path: '/swiper',
        name: 'swiper',
        component: () =>
            import ('../views/swiperView.vue')
    },
    {
        path: '/watch',
        name: 'watch',
        component: () =>
            import ('../views/watchView.vue')
    },
    {
        path: '/i18n',
        name: 'i18n',
        component: () =>
            import ('../views/i18nView.vue')
    },
    {
        path: '/lazyload',
        name: 'lazyload',
        component: () =>
            import ('../views/lazyload.vue')
    },
    {
        path: '/element',
        name: 'element',
        component: () =>
            import ('../views/element.vue')
    },
    {
        path: '/music',
        name: 'music',
        component: () =>
            import ('../views/musicView.vue')
    },
    {
        path: '/nginx',
        name: 'nginx',
        component: () =>
            import ('../views/nginx.vue')
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
    //????????????
    // scrollBehavior() {
    //     return { x: 0, y: 0, behavior: "smooth" };
    // },
});
// ??????????????????????????????????????????
router.beforeEach((to, from, next) => {
    // ?????????????????? meta ?????? requiresAuth ???
    if (to.matched.some(record => record.meta.requiresAuth)) {
        // ????????????
        // if (!Token) {
        //     next({ path: '/login' }) // ??????????????????
        // } else {
        //     next() // ???????????????????????????????????????
        // }
        next() // ???????????????????????????????????????
    } else {
        next() // ????????????????????? next()
    }
})
export default router