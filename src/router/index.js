import { createRouter, createWebHashHistory } from 'vue-router'
import Admin from '../views/admin/Admin.vue'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/index',
    component: () => import('@/views/Index.vue')
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/products',
    component: () => import('@/views/Products.vue')
  },
  {
    path: '/product/:id',
    component: () => import('@/views/Product.vue')
  },
  {
    path: '/login',
    component: () => import('@/views/Login.vue')
  },
  {
    path: '/cart',
    component: () => import('@/views/Cart.vue')
  },
  {
    path: '/admin',
    component: Admin,
    children: [
      {
        path: 'admin_products',
        component: () => import('@/views/admin/Admin_products.vue')
      }
    ]
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
