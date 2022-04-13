import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import i18n from './i18n' //多國
import { reqCategoryList } from '@/api';
reqCategoryList()
createApp(App).use(i18n).use(store).use(router).mount('#app')