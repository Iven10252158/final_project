import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    component: Home,
    children: [
      {
        path: 'index',
        component: () => import('@/views/Index.vue')
      },
      {
        path: 'about',
        component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
      }
    ]
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
    path: '/cart',
    component: () => import('@/views/Cart.vue')
  },
  {
    path: '/order',
    component: () => import('@/views/Order.vue')
  },
  {
    path: '/ordercheckout/:order_Id',
    component: () => import('@/views/OrderCheckout.vue')
  },
  {
    path: '/login',
    component: () => import('@/views/Login.vue')
  },
  {
    path: '/admin',
    component: () => import('@/views/admin/Admin.vue'),
    children: [
      {
        path: 'admin_products',
        component: () => import('@/views/admin/Admin_products.vue')
      },
      {
        path: 'admin_coupons',
        component: () => import('@/views/admin/Admin_coupons.vue')
      },
      {
        path: 'admin_orders',
        component: () => import('@/views/admin/Admin_orders.vue')
      }
    ]
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
  linkActiveClass: 'text-Lightgreen'
})

export default router
