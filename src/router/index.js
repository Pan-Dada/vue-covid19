import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/newsinfo',
    name: 'newsinfo',
    component: () => import('../views/NewsInfo/NewsInfo.vue')
  },
  {
    path: '/newsexample',
    name: 'newsexample',
    component: () => import('../views/NewsInfo/NewsExample.vue')
  },
  {
    path: '/domesticinfo',
    name: 'domesticinfo',
    component: () => import('../views/DomesticInfo/DomesticInfo.vue')
  },
  {
    path: '/worldwide',
    name: 'worldwide',
    component: () => import('../views/WorldWide/WorldWide.vue')
  },
  {
    path: '/measures',
    name: 'measures',
    component: () => import('../views/MeaSures/MeaSures.vue')
  },
  {
    path: '/goods',
    name: 'goods',
    component: () => import('../views/GoodS/GoodS.vue')
  },
  {
    path: '/cart',
    name: 'cart',
    component: () => import('../views/GoodS/GoodCart.vue')
  },
  {
    path: '/buygoods',
    name: 'buygoods',
    component: () => import('../views/GoodS/BuyGoods.vue')
  },
  {
    path: '/travelpolicy',
    name: 'travelpolicy',
    component: () => import('../views/TravelPolicy/TravelPolicy.vue')
  },
  {
    path: '/vaccination',
    name: 'vaccination',
    component: () => import('../views/VacciNation/VacciNation.vue')
  },
  {
    path: '/nucleicacidtest',
    name: 'nucleicacidtest',
    component: () => import('../views/NucleicAcidTest/NucleicAcidTest.vue')
  }
  
]

const router = createRouter({
  history: createWebHashHistory(process.env.BASE_URL),
  routes
})

export default router
