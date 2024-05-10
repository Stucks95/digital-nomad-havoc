import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import PrimeVue from 'primevue/config';
import './main.css'
import 'material-icons/iconfont/material-icons.css';

// PRIMEVUE COMPS
import primeService from '@/service/primeService'

const app = createApp(App)
app.use(PrimeVue)

const PrimeComps = primeService()
PrimeComps.forEach(comp => {
  app.component(comp.name, comp)
})

app.use(router)

app.mount('#app')
