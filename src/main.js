import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import './assets/styles/main.css'; // optional: your global styles
import PrimeVue from 'primevue/config';
import ToastService from 'primevue/toastservice';
import 'primeicons/primeicons.css'; 

import Aura from '@primevue/themes/aura'; 

const app = createApp(App);

app.use(router);
app.use(PrimeVue, {
    theme: {
        preset: Aura, // This applies the Aura theme
        // You can also configure options like prefix, darkModeSelector, etc.
        // options: {
        //     prefix: 'p',
        //     darkModeSelector: 'system',
        //     cssLayer: false
        // }
    }
});
app.use(ToastService);
app.mount('#app');
