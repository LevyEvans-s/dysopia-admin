<template>
  <!-- 面包屑导航 -->
  <el-breadcrumb separator="/">
    <template v-for="(item, index) in BreadList.arr" :key="index">
      <el-breadcrumb-item :to="{ path: `${item.path}` }">
        {{ item.meta.alias }}
      </el-breadcrumb-item>
    </template>
  </el-breadcrumb>
</template>

<script setup>
import { reactive, watch } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
let BreadList = reactive({ arr: [] })

const getBreadcrumb = () => {
  if (route.matched.length > 0) {
    BreadList.arr = route.matched
  } else {
    BreadList.arr = []
  }
}

watch(() => route.matched, () => {
  getBreadcrumb()
},
  { deep: true, immediate: true }
)
</script>

<style lang="scss" scoped>
</style>