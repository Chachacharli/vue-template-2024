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

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')
