import { createRouter, createWebHistory } from 'vue-router';
import { useUserStore } from './stores/user';
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'loginn',
      component: () => import('./components/LoginPage.vue'),
    },
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
      path: '/requesttracking/:id',
      name: 'RequestTracking',
      component: () => import('./components/Request/RequestTracking.vue'),
    },
    {
      path: '/requestsadd',
      name: 'RequestAdd',
      component: () => import('./components/Request/RequestAdd.vue'),
    },
    {
      path: '/notification',
      name: 'notification',
      component: () => import('./components/otherSections/notificationPage.vue'),
    },
    {
      path: '/notificationtracking/:id',
      name: 'notificationtracking',
      component: () => import('./components/Request/notificationTracking.vue'),
    },
    {
      path: '/usertypeadd/:id',
      name: 'usertypeadd',
      component: () => import('./components/User/UserTypeAdd.vue'),
    },
    {
      path: '/usertype',
      name: 'usertype',
      component: () => import('./components/User/UserTypesSection.vue'),
    },
    {
      path: '/users',
      name: 'users',
      component: () => import('./components/User/UsersSection.vue'),
    },
    {
      path: '/userprofile/:id',
      name: 'userprofile',
      component: () => import('./components/User/UserProfile.vue'),
    },
    {
      path: '/userupdate/:id',
      name: 'userupdate',
      component: () => import('./components/User/UserUpdate.vue'),
    },
    {
      path: '/settings',
      name: 'settings',
      component: () => import('./components/Settings/SettingsSection.vue'),
    },
    {
      path: '/analysis',
      name: 'analysis',
      component: () => import('./components/otherSections/analysisSection.vue'),
    },
    /* 
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
