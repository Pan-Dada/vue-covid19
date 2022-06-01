import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'


//引入css初始化
import  '@/assets/css/base.css'

//引入js移动端的适配
import './assets/js/rem.js'

// 引入vant
import { SubmitBar,Form,Stepper,DropdownMenu, DropdownItem,Rate,NoticeBar,ConfigProvider,Button,Search,Cascader,Swipe, SwipeItem,Image as VanImage,NavBar,Tabbar, TabbarItem,Tab, Tabs, Popup,Picker,Loading,Toast,Field, CellGroup,Card,Divider} from 'vant'

// 引入iconfont.css样式
import './assets/font/iconfont.css'

createApp(App).use(store).use(Form).use(SubmitBar).use(Stepper).use(DropdownMenu).use(DropdownItem).use(Rate).use(NoticeBar).use(router).use(Swipe).use(SwipeItem).use(VanImage).use(NavBar).use(Tabbar).use(TabbarItem).use(Tab).use(Tabs).use(Loading).use(Picker).use(Popup).use(Toast).use(Cascader).use(Field).use(CellGroup).use(Search).use(Card).use(Button).use(Divider).use(ConfigProvider).mount('#app')
