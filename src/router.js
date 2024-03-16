import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
  history: createWebHistory($GLOBAL_SHOP_DOMAIN),
  routes: [
    /* {
      path: '/',
      name: 'home',
      component: () => import('./pages/feedback.vue'),
    },
    {
      path: '/order/:id',
      name: 'order',
      component: () => import('./pages/order.vue'),
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'Error',
      component: () => import('./pages/error.vue'),
    }, */
  ],
});

export default router;
