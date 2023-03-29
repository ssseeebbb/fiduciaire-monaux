import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/fiduciaire-monaux/politique-de-cookies',
    name: 'cookies',
    component: () =>
    import(/* webpackChunkName: "cookies" */ "@/views/CookiesView.vue"),
    meta:{
      title: 'Politique de Cookies'
    }
  },
  {
    path: '/fiduciaire-monaux/politique-de-confidentialite',
    name: 'privacy',
    component: () =>
    import(/* webpackChunkName: "cookies" */ "@/views/PrivacyView.vue"),
    meta:{
      title: 'Politique de Cookies'
    }
  },
  {
    path: '/fiduciaire-monaux/conditions-generales',
    name: 'terms',
    component: () =>
    import(/* webpackChunkName: "cookies" */ "@/views/TermsView.vue"),
    meta:{
      title: 'Politique de Cookies'
    }
  },
  {
    path: '/:section?',
    name: 'home',
    component: HomeView
  },
  {
    path: "/:catchAll(.*)",
    redirect: '/'
  }
]

const router = createRouter({
  scrollBehavior(to, from, savedPosition) {
    // always scroll to top
    return { top: 0 };
  },
  history: createWebHistory(),
  routes
})

export default router
