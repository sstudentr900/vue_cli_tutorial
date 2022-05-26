import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import i18n from './i18n' //多國
import '@/mock/mockServe'; //引入mock
import * as api from '@/api'; //全域API
// reqCategoryList()
// createApp(App).use(i18n).use(store).use(router).mount('#app')
const app = createApp(App);

// app.config.globalProperties.$api = api; //全域寫法globalProperties
app.provide('$api', api);
app.use(i18n).use(store).use(router).mount('#app')