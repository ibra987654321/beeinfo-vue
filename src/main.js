import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './css/materialize.css'
import './css/slider.css'
import './js/script'
import VueSplide from '@splidejs/vue-splide';


createApp(App).use(store).use(VueSplide).use(router).mount('#app')
