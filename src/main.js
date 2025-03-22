

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router/index.js'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'
import "@/styles/common.scss"

import {lazyPlugin} from '@/directives/index.js'
import { components } from '@/components/index.js'

const pinia = createPinia()
pinia.use(piniaPluginPersistedstate)


const app = createApp(App)
app.use(router)
app.use(lazyPlugin)
app.use(components)
app.use(pinia)
app.mount('#app')


