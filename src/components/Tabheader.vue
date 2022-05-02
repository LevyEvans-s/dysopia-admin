<template>
  <el-row class="wrapper">
    <el-col :span="3" class="logo">
      <i class="iconfont" href="#">&#xec84;</i>
      <span>MicroTorch</span>
    </el-col>
    <el-col :span="17" class="expand">
      <el-icon @click="changeExpand" class="icon-expand">
        <expand />
      </el-icon>
    </el-col>
    <el-col :span="4" class="right">
      <div class="avatar">
        <el-avatar src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png" />
      </div>
      <el-dropdown trigger="click">
        <span class="el-dropdown-link">
          koto
          <el-icon class="el-icon--right">
            <arrow-down />
          </el-icon>
        </span>
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item>
              <el-icon>
                <switch-button />
              </el-icon>
              <span>退出登录</span>
            </el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
    </el-col>
  </el-row>
</template>

<script setup>
import { UserFilled, ArrowDown, SwitchButton, Expand } from '@element-plus/icons-vue'
import bus from '@/utils/mitt.js'

const changeExpand = () => {
  bus.emit('changeWidth')
}
</script>

<style lang="scss" scoped>
@font-face {
  font-family: yesteryear;
  src: url('@/assets/fonts/Yesteryear-Regular.ttf');
}

.wrapper {
  height: 100%;
}

.logo {
  display: flex;
  font-family: yesteryear;
  color: #ffd04b;
  font-size: 32px;
  justify-content: center;
  align-items: center;

  .iconfont {
    font-size: 32px;
    margin-right: 6px;
  }
}

.expand {
  display: flex;
  align-items: center;
  font-size: 26px;
  color: #fff;

  .icon-expand:hover {
    cursor: pointer;

  }
}

.right {
  display: flex;
  align-items: center;
  justify-content: center;

  .avatar {
    margin-right: 20px;
  }

  .el-dropdown-link {
    cursor: pointer;
    color: var(--el-color-primary);
    display: flex;
    align-items: center;
    color: #fff;
  }
}
</style>