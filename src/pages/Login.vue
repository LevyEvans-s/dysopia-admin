<template>
  <Guard :appId="appId" @login="handleLogin" />
</template>

<script>
import { Guard } from "@authing/vue-ui-components";
import "@authing/vue-ui-components/lib/index.min.css";
import {useStore} from '@/store';
import storage from "../utils/storage";

export default {
  components: {
    Guard,
  },
  inject:['$router'],
  data() {
    return {
      appId: "62752a2f22494fc572206eb7",
    };
  },
  methods: {
    handleLogin(userInfo) {
      const store=useStore()
      store.token=userInfo.token
      storage.setItem('token',store.token)
      this.$router.push({
        name:'Home'
      })
    },
  },
};
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
