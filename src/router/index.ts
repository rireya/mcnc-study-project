import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'dashboard',
      component: () => import('../views/DashboardView.vue'),
    },
    // 실습용 화면들
    {
      path: '/login',
      name: 'login',
      component: () => import('../views/practice/LoginView.vue'),
    },
    {
      path: '/list',
      name: 'list',
      component: () => import('../views/practice/ListView.vue'),
    },
    {
      path: '/detail',
      name: 'detail',
      component: () => import('../views/practice/DetailView.vue'),
    },
    {
      path: '/post',
      name: 'post',
      component: () => import('../views/practice/PostView.vue'),
    },
    {
      path: '/update',
      name: 'update',
      component: () => import('../views/practice/UpdateView.vue'),
    },
    
    // 개발 도구 및 가이드
    {
      path: '/api-guide',
      name: 'apiGuide',
      component: () => import('../views/tools/ApiGuideView.vue'),
    },
    {
      path: '/requirements',
      name: 'requirements',
      component: () => import('../views/tools/RequirementsView.vue'),
    },
    {
      path: '/learning-guide',
      name: 'learningGuide',
      component: () => import('../views/tools/LearningGuideView.vue'),
    },
  ],
})

export default router
