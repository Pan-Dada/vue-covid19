import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

//引入css初始化
import  '@/assets/css/base.css'

//引入js移动端的适配
import './assets/js/rem.js'

createApp(App).use(store).use(router).mount('#app')
