import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import ElementPlus from 'element-plus'
import {createPinia, PiniaVuePlugin } from 'pinia'
import 'element-plus/dist/index.css'
import { AuthenticationClient } from 'authing-js-sdk';

const authing = new AuthenticationClient({
	appId: '62752a2f22494fc572206eb7',
	appHost: 'https://dysopia-admin-auth.authing.cn',
	redirectUri: 'http://localhost:4000/callback',
	tokenEndPointAuthMethod: 'none'
})

const store=createPinia()
const app = createApp(App)

app.provide('$authing', authing)
app.provide('$router', router)

app.use(router).use(ElementPlus).use(PiniaVuePlugin).use(store).mount('#app')


