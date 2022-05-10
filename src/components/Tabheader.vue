<template>
  <el-row class="wrapper">
    <el-col :span="3" class="logo">
      <i class="iconfont" href="#">&#xec84;</i>
      <span>MicroTorch</span>
    </el-col>
    <el-col :span="17" class="expand">
      <el-icon @click="changeExpand" class="icon-expand">
        <template v-if="isExpend">
          <expand />
        </template>
        <template v-else>
          <fold />
        </template>
      </el-icon>
    </el-col>
    <el-col :span="4" class="right">
      <div class="avatar">
        <el-avatar src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png" />
      </div>
      <el-dropdown trigger="click">
        <span class="el-dropdown-link">
          {{ mynickname ? mynickname : myemail }}
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
              <span @click="handleLogout">退出登录</span>
            </el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
    </el-col>
  </el-row>
</template>

<script setup>
import { ArrowDown, SwitchButton, Expand, Fold } from '@element-plus/icons-vue'
import { ref } from 'vue';
import { onMounted } from 'vue';
import { useStore } from '@/store';
import { useRouter } from 'vue-router'
import bus from '@/utils/mitt'

let isExpend = ref(false)
let mynickname = ref('')
let myemail = ref('')
const store = useStore()
const router=useRouter()

onMounted(() => {
  //解析id_token并展示
  mynickname.value = sessionStorage.getItem('nickname')
  myemail.value = sessionStorage.getItem('email')
})

const changeExpand = () => {
  bus.emit('changeWidth')
  isExpend.value = !isExpend.value
}

const handleLogout = () => {
  window.sessionStorage.clear()
  store.user.nickname = ''
  store.user.email = ''
  router.push('/login')
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
    margin-right: 15px;
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