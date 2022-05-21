import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/regioninfo',
    name: 'regioninfo',
    component: () => import('../views/RegionInfo/RegionInfo.vue')
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
    path: '/travelpolicy',
    name: 'travelpolicy',
    component: () => import('../views/TravelPolicy/TravelPolicy.vue')
  }
  
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
