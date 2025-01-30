import { createApp } from 'vue'
import './style.css'

import App from './App.vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.js'
import 'bootstrap-icons/font/bootstrap-icons.css'

import 'sass'
import router from './routes/route'
import 'swiper/css'



createApp(App).use(router).mount('#app')
