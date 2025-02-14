//import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
// import '@ntohq/buefy-next/dist/buefy.css'
// import { ConfigProgrammatic} from '@ntohq/buefy-next'
// import BuefyNext from '@ntohq/buefy-next'
// import BootstrapVue3 from 'bootstrap-vue-3'
// import 'bootstrap/dist/css/bootstrap.css'
// import 'bootstrap-vue-3/dist/bootstrap-vue-3.css'
// import bootstrap from 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap'

import { createI18n } from 'vue-i18n';
import en from './locales/en.json';
import fr from './locales/fr.json';

const i18n = createI18n({
    locale: 'en', // default locale
    fallbackLocale: 'en', // fallback locale if translation is missing
    messages: {
      en,
      fr
    }
  });


const app = createApp(App)


app.use(i18n);
// app.use(bootstrap)
app.use(router)
app.mount('#app')
