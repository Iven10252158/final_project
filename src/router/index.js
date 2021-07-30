import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    component: Home,
    children: [
      {
        path: '',
        component: () => import('@/views/front/Index.vue')
      },
      {
        path: '/index',
        component: () => import('@/views/front/Index.vue')
      },
      {
        path: 'about',
        component: () => import(/* webpackChunkName: "about" */ '../views/front/About.vue')
      },
      {
        path: 'products',
        component: () => import('@/views/front/Products.vue')
      },
      {
        path: 'product/:id',
        component: () => import('@/views/front/Product.vue')
      },
      {
        path: 'cart',
        component: () => import('@/views/front/Cart.vue')
      },
      {
        path: 'order',
        component: () => import('@/views/front/Order.vue')
      },
      {
        path: 'ordercheckout/:order_Id',
        component: () => import('@/views/front/OrderCheckout.vue')
      },
      {
        path: 'articles',
        component: () => import('@/views/front/Articles.vue')
      },
      {
        path: 'article/:id',
        component: () => import('@/views/front/Article.vue')
      }
    ]
  },
  {
    path: '/:pathMatch(.*)*',
    component: () => import('../views/NotFound.vue')
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
        path: '',
        component: () => import('@/views/admin/Admin_products.vue')
      },
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
      },
      {
        path: 'admin_article',
        component: () => import('@/views/admin/Admin_article.vue')
      }
    ]
  }

]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
  linkActiveClass: 'text-navActive'
})

export default router
