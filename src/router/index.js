import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import productView from '../views/productView.vue'
import adminView from '../views/adminView.vue'
import contactView from '../views/contactView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/products',
    name: 'products',
    component: productView
  },
  {
    path: '/admin',
    name: 'admin',
    component: adminView
  },
  {
    path: '/contact',
    name: 'contact',
    component: contactView
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
