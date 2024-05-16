import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import FirstView from '../views/FirstView.vue'
import SecondView from '../views/SecondView.vue'
import ThridView from '../views/ThridView.vue'
import FourthView from '../views/FourthView.vue'
import FivethView from '../views/FivethView.vue'
import SixthView from '../views/SixthView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/industrial-electric-motors',
      name: 'first',
      component: FirstView
    },
    {
      path: '/elevator-motors',
      name: 'second',
      component: SecondView
    },
    {
      path: '/heating-unit-motors',
      name: 'third',
      component: ThridView
    },
    {
      path: '/ventilation-motors',
      name: 'five',
      component: FivethView
    },
    {
      path: '/burder-motors',
      name: 'six',
      component: SixthView
    },
    {
      path: '/water-pumps',
      name: 'fourth',
      component: FourthView
    },
    {
      path: '/about',
      name: 'about',

      component: () => import('../views/AboutView.vue')
    }
  ]
})

export default router
