import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'login',
      // component: () => import('../views/LoginView.vue'),
      component: () => import('../views/ListView.vue'),
      // component: () => import('../views/DetailView.vue'),
      // component: () => import('../views/PostView.vue'),
    },
  ],
})

export default router
