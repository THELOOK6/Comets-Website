import { createRouter, createWebHistory , RouterView} from 'vue-router'
// import HomeView from '../views/HomeView.vue'
// import HomeViewResp from '../views/HomeViewResp.vue'
import HomeViewResp from '../views/HomeViewResp.vue'
// import ParallaxHome from '../views/ParallaxHome.vue'


import { useRoute } from 'vue-router';


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeViewResp
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/NotFoundView.vue')
    },
    {
      path: '/:catchAll(.*)',
      name: 'not-found',
      component: () => import('../views/NotFoundView.vue')
    },
    {
      path: '/contact',
      name: 'contact',
      component: () => import('../views/ContactView.vue')
    },
    {
      path: '/sponsors',
      name: 'sponsors',
      component: () => import('../views/SponsorsView24.vue') // Keep the page with 2023-2024 sponsors until we get the confirmed 2024-2025 sponsors
    },
    {
      path: '/sponsors24',
      name: 'sponsors 2024',
      component: () => import('../views/SponsorsView24.vue')
    },
    {
      path: '/sponsors25',
      name: 'sponsors 2025',
      component: () => import('../views/sponsorsRoutingView.vue')
    },
    {
      path: '/team',
      name: 'team',
      component: () => import('../views/NotFoundView.vue') //Need to be implemented in the future
    },
    {
      path: '/halley',
      name: 'halley',
      component: () => import('../views/HalleyView.vue')
    },
    {
      path: '/atlas',
      name: 'atlas',
      component: () => import('../views/AtlasView.vue')
    },
    {
      path: '/prototypes',
      name: 'prototype',
      component: () => import('../views/prototypeRoutingView.vue')
    },
  ]
})

export default router
