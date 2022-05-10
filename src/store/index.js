import { defineStore } from 'pinia'

export const useStore = defineStore('store', {
  state: () => {
    return {
      token: '',
      user: {
        nickname: '',
        email:''
      }
    }
  }
})