import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
import TabsPage from '../views/TabsPage.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/azeris/points'
  },
  {
    path: '/azeris/',
    component: TabsPage,
    children: [
      {
        path: '',
        redirect: '/azeris/points'
      },
      {
        path: 'points',
        component: () => import('@/views/PointsView.vue')
      },
      {
        path: 'kills',
        component: () => import('@/views/KillsView.vue')
      },
      {
        path: 'time',
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
