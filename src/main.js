import { createApp } from 'vue'


import { createPinia } from 'pinia'
//making refresh-proof
import piniaPersist from 'pinia-plugin-persist'

import App from './App.vue'
import router from './router'

import './assets/main.css'

const app = createApp(App)


const pinia = createPinia()
//making refresh-proof
pinia.use(piniaPersist)

app.use(router)
app.use(pinia)
app.mount('#app')
