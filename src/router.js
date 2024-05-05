import { createRouter, createWebHistory } from 'vue-router';
import { useUserStore } from './stores/user';
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/login',
      name: 'login',
      component: () => import('./components/LoginPage.vue'),
    },
    {
      path: '/signup',
      name: 'signup',
      component: () => import('./components/SignupPage.vue'),
    },
    {
      path: '/requestssection',
      name: 'RequestsSection',
      component: () => import('./components/Request/RequestsSection.vue'),
    },
    {
      path: '/requestdetailes/:id',
      name: 'RequestDetailes',
      component: () => import('./components/Request/RequestDetailes.vue'),
    },
    {
      path: '/requestsadd',
      name: 'RequestAdd',
      component: () => import('./components/Request/RequestAdd.vue'),
    },
    /* {
      path: '/',
      name: 'home',
      component: () => import('./pages/feedback.vue'),
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'Error',
      component: () => import('./pages/error.vue'),
    }, */
  ],
});

/* router.beforeEach((to, from, next) => {
  const user = useUserStore()
  if(to.matched.some((record)=> record.meta.requiresAuth)){
    if(user.token){
      next()
      return
    }
    next("login")
  } else if(to.matched.some((record)=> record.meta.admin)){
    if(user.token && user.userType == 1){
      next()
      return
    }
    next("login")
  }
   else if(to.matched.some((record)=> record.meta.doctor)){
    if(user.token && user.userType == 2){
      next()
      return
    }
    next("login")
  }
   else if(to.matched.some((record)=> record.meta.superadmin)){
    if(user.token && user.userType == 3){
      next()
      return
    }
    next("login")
  }
   else if(to.matched.some((record)=> record.meta.adminAndSuper)){
    if(user.token && user.userType == 3 || user.userType == 1 ){
      next()
      return
    }
    next("login")
  }
   else if(to.matched.some((record)=> record.meta.notsigned)){
    if(!user.token){
      next()
      return
    }
    next("/")
  }
  else{
    next()
  }
}) */
export default router;
