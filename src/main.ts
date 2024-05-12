import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

// Boostrap configuratión
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.js'

//custom scss/css
import '@/assets/css/main.css'

import App from './App.vue'
import router from './router'

import i18n from './libs/i18n'

const app = createApp(App)

app.use(createPinia())
app.use(i18n)
app.use(router)

app.mount('#app')
