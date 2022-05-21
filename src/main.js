import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'


//引入css初始化
import  '@/assets/css/base.css'

//引入js移动端的适配
import './assets/js/rem.js'

// 引入vant
import { Swipe, SwipeItem,Image as VanImage,NavBar,Tabbar, TabbarItem,ConfigProvider,Tab, Tabs, Popup,Picker,Loading,Toast} from 'vant'

// 引入iconfont.css样式
import './assets/font/iconfont.css'


createApp(App).use(store).use(router).use(Swipe).use(SwipeItem).use(VanImage).use(NavBar).use(Tabbar).use(TabbarItem).use(ConfigProvider).use(Tab).use(Tabs).use(Loading).use(Picker).use(Popup).use(Toast).mount('#app')
