<template>
  <div class="common-layout">
    <el-container style="height:100vh">
      <el-header class="header">
        <tabheader></tabheader>
      </el-header>
      <el-container>
        <el-aside :width="`${width}vw`" class="nav-side">
          <el-menu active-text-color="#ffd04b" background-color="rgb(48,49,53)" text-color="#fff" class="menu"
            :collapse="isCollapse" default-active="1">
            <!-- Dashboard -->
            <el-menu-item index="1">
              <el-icon>
                <odometer />
              </el-icon>
              <router-link to="/dashboard">Dashboard</router-link>
            </el-menu-item>
            <!-- 统计 -->
            <el-sub-menu index="2">
              <template #title>
                <el-icon>
                  <data-analysis />
                </el-icon>
                <span>数据统计</span>
              </template>
              <el-menu-item-group>
                <el-menu-item index="2-1">
                  <el-icon>
                    <trend-charts />
                  </el-icon>
                  <router-link to="/useranalysis">用户行为</router-link>
                </el-menu-item>
                <el-menu-item index="2-2">
                  <el-icon>
                    <list />
                  </el-icon>
                  <router-link to="/newsanalysis">新闻数据</router-link>
                </el-menu-item>
              </el-menu-item-group>
            </el-sub-menu>
            <!-- 管理 -->
            <el-sub-menu index="3">
              <template #title>
                <el-icon>
                  <setting />
                </el-icon>
                <span>系统管理</span>
              </template>
              <el-menu-item index="3-1">
                <el-icon>
                  <user-filled />
                </el-icon>
                <router-link to="/usermanagement">用户管理</router-link>
              </el-menu-item>
              <el-menu-item index="3-2">
                <el-icon>
                  <edit />
                </el-icon>
                <router-link to="/newsmanagement">新闻管理</router-link>
              </el-menu-item>
            </el-sub-menu>
          </el-menu>
        </el-aside>
        <el-main class="main-wrapper">
          <el-container style="height:100%">
            <el-header class="bread" height="5vh">
              <bread-list></bread-list>
            </el-header>
            <el-main class="content">
              <router-view></router-view>
            </el-main>
          </el-container>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script setup>
import Tabheader from '@/components/Tabheader.vue'
import BreadList from '@/components/BreadList.vue'
import {
  Odometer,
  DataAnalysis,
  List,
  UserFilled,
  Edit,
  Setting,
  TrendCharts,
} from '@element-plus/icons-vue'
import bus from '@/utils/mitt.js'
import { ref, onMounted } from 'vue'

onMounted(() => {
  bus.on('changeWidth', changeWidth)
})

let isCollapse = ref(false)
let width = ref(12)

const changeWidth = () => {
  isCollapse.value = !isCollapse.value
  width.value = isCollapse.value === true ? 0 : 12
}

</script>

<style lang="scss" scoped>
.header {
  background: rgb(46, 50, 53);
  padding: 0;
}

.menu:not(.el-menu--collapse) {
  width: 12.1vw;
}

.nav-side {
  background: rgb(48, 49, 53);
  overflow-x: hidden;
  transition: width .5s;
}

.main-wrapper {
  padding: 0;
}

.bread {
  border-bottom: 1px solid rgb(228, 229, 230);
  display: flex;
  align-items: center;
}

.content {
  background: rgb(228, 229, 230);
}
</style>