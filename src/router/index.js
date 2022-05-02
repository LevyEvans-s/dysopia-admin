import { createRouter, createWebHashHistory } from "vue-router"
import Home from '@/pages/Home.vue'
import Dashboard from '@/pages/Dashboard.vue'
import NewsAnalysis from '@/pages/NewsAnalysis.vue'
import UserAnalysis from '@/pages/UserAnalysis.vue'
import UserManagement from '@/pages/Usermanagement.vue'
import NewsManagement from '@/pages/NewsManagement.vue'

const routes = [
  {
    name: 'Home',
    component: Home,
    path: "/",
    meta: {
      alias:'首页'
    },
    children: [
      {
        name: 'Dashboard',
        component: Dashboard,
        path: 'dashboard',
        meta: {
          alias:'Dashboard'
        }
      },
      {
        name: 'NewsAnalysis',
        component: NewsAnalysis,
        path: 'newsanalysis',
        meta: {
          alias:'新闻数据信息统计',
        }
      },
      {
        name: 'UserAnalysis',
        component: UserAnalysis,
        path: 'useranalysis',
        meta: {
          alias:'用户行为信息统计'
        }
      },
      {
        name: 'UserManagement',
        component: UserManagement,
        path: 'usermanagement',
        meta: {
          alias:'用户管理'
        }
      },
      {
        name: 'NewsManagement',
        component: NewsManagement,
        path: 'newsmanagement',
        meta: {
          alias:'新闻管理'
        }
      }
    ]
  }
]

const router = createRouter({
  history:createWebHashHistory(),
  routes
})

export default router