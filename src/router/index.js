import { createRouter, createWebHashHistory } from "vue-router"
import Home from '@/pages/Home.vue'
import Dashboard from '@/pages/Welcome.vue'
import NewsAnalysis from '@/pages/NewsAnalysis.vue'
import UserAnalysis from '@/pages/UserAnalysis.vue'
import UserManagement from '@/pages/Usermanagement.vue'
import NewsManagement from '@/pages/NewsManagement.vue'
import NewsPost from '@/pages/NewsPost.vue'
import storage from "../utils/storage"

const routes = [
  {
    path: '/',
    redirect:'/home/welcome'
  },
  {
    path: '/home',
    redirect:'/home/welcome'
  },
  {
    name: 'Home',
    component: Home,
    path: "/home",
    meta: {
      alias: '首页',
      requiresAuth: true
    },
    children: [
      {
        name: 'Welcome',
        component: Dashboard,
        path: 'welcome',
        meta: {
          alias: 'Welcome',
          requiresAuth: true
        }
      },
      {
        name: 'NewsAnalysis',
        component: NewsAnalysis,
        path: 'newsanalysis',
        meta: {
          alias: '新闻数据信息统计',
          requiresAuth: true
        }
      },
      {
        name: 'UserAnalysis',
        component: UserAnalysis,
        path: 'useranalysis',
        meta: {
          alias: '用户行为信息统计',
          requiresAuth: true
        }
      },
      {
        name: 'UserManagement',
        component: UserManagement,
        path: 'usermanagement',
        meta: {
          alias: '用户管理',
          requiresAuth: true
        }
      },
      {
        name: 'NewsManagement',
        component: NewsManagement,
        path: 'newsmanagement',
        meta: {
          alias: '新闻管理',
          requiresAuth: true
        }
      },
      {
        name: 'NewsPost',
        component: NewsPost,
        path: 'newspost',
        meta: {
          alias: '新闻发布',
          requiresAuth: true
        }
      },
      {
        name: '404',
        component: () => import('@/pages/404.vue'),
        path:'404'
      },
      {
        path: '/:pathMatch(.*)',
        redirect:'404'
      }
    ]
  },
  {
    name: 'Login',
    component: () => import('@/pages/Login.vue'),
    path: '/login'
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

//路由守卫
router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    let token = storage.getItem('token')
    if (!token) {
      next({ name: 'Login' })
    } else {
      next()
    }
  } else {
    next()
  }
})

export default router