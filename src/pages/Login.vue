<template>
  <Guard :appId="appId" @login="handleLogin" />
</template>

<script>
import { ref } from "vue";
import { Guard } from "@authing/vue-ui-components";
import "@authing/vue-ui-components/lib/index.min.css";
import { useStore } from '@/store';
import { useRouter } from "vue-router";
import storage from "@/utils/storage";
import request from "@/utils/request";
import config from '@/config';

const store = useStore()
const appId = ref(config.appId)

const handleToken = async () => {
  await request.get(config.verifyApi, {
    params: {
      id_token: store.token
    }
  }).then(res => {
    const { nickname, email } = res
    //用户信息存储到store并配合sessionStorage
    store.user.nickname = nickname
    store.user.email = email
    window.sessionStorage.setItem('nickname', store.user.nickname)
    window.sessionStorage.setItem('email', store.user.email)
  })
}

const useLogin = () => {
  const router = useRouter()
  const handleLogin = async (userInfo) => {
    store.token = userInfo.token
    storage.setItem('token', store.token)
    await handleToken()
    router.push({ name: 'Welcome' })
  }
  return { handleLogin }
}

export default {
  components: {
    Guard
  },
  setup() {
    const { handleLogin } = useLogin()
    return {
      appId,
      handleLogin
    }
  }
}
</script>

<style lang="scss" scoped>
#authing_guard_container {
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: url('@/assets/img/background.png');
}
</style>
