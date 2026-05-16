import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
import TabsPage from '../views/TabsPage.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '',
    redirect: '/azeris/home'
  },
  {
    path: '/azeris/home',
    name: 'home',
    component: () => import('@/views/HomeView.vue')
  },
  {
    path: '/azeris/',
    component: TabsPage,
    children: [
      {
        path: 'points',
        name: 'points',
        component: () => import('@/views/PointsView.vue')
      },
      {
        path: 'kills',
        name: 'kills',
        component: () => import('@/views/KillsView.vue')
      },
      {
        path: 'time',
        name: 'time',
        component: () => import('@/views/TimeView.vue')
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
