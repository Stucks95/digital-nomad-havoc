import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import PrimeVue from 'primevue/config';
import 'primeicons/primeicons.css'

// PRIMEVUE COMPS
import getPrimeComps from '@/composables/getPrimeComps'

const app = createApp(App)
app.use(PrimeVue)

const PrimeComps = getPrimeComps()
PrimeComps.forEach(comp => {
  app.component(comp.name, comp)
})

app.use(router)

app.mount('#app')
