import { createApp } from 'vue'
import App from './App.vue'
import router from './router';
import { createPinia } from 'pinia';
import { createPersistedState } from 'pinia-plugin-persistedstate'
import { VueQueryPlugin } from "vue-query";
import Notifications from '@kyvg/vue3-notification'
import './style.css'
import './assets/tailwind.css'
import 'primeicons/primeicons.css'
import PrimeVue from 'primevue/config';
import DataTable from 'primevue/datatable';
import Column from 'primevue/column';
import ProgressSpinner from 'primevue/progressspinner';
import Button from 'primevue/button';
import Calendar from 'primevue/calendar';
import IconField from 'primevue/iconfield';
import InputText from 'primevue/inputtext';
import FloatLabel from 'primevue/floatlabel';
import MultiSelect from 'primevue/multiselect';
import Tag from 'primevue/tag';
import Dropdown from 'primevue/dropdown';
import Sidebar from 'primevue/sidebar';
import Inplace from 'primevue/inplace';
import Chip from 'primevue/chip';
import FileUpload from 'primevue/fileupload';
import InlineMessage from 'primevue/inlinemessage';
import Password from 'primevue/password';
import ConfirmationService from 'primevue/confirmationservice';
import ConfirmPopup from 'primevue/confirmpopup';
import Skeleton from 'primevue/skeleton';
import Panel from 'primevue/panel';

import Lara from './presets/lara';      //import preset        
import Echo from 'laravel-echo';
import Pusher from 'pusher-js';
import axios from 'axios';

window.Pusher = Pusher;
/* 

 window.Echo = new Echo({
     broadcaster: 'pusher',
     //key: process.env.VUE_APP_WEBSOCKETS_KEY,
     key: 'local',
     //cluster: import.meta.env.VITE_PUSHER_APP_CLUSTER ?? 'mt1',
     wsHost: import.meta.env.VUE_APP_WEBSOCKETS_SERVER,
     wsPort: 6001,
     //wssPort: import.meta.env.VITE_PUSHER_PORT ?? 443,
     forceTLS: false,
     disableStats: true,
     //enabledTransports: ['ws', 'wss'],
 });
 */

 
const pinia = createPinia()
pinia.use(createPersistedState())
 const app = createApp(App);
app.use(pinia);
app.use(router);
app.use(VueQueryPlugin);
app.use(Notifications)
app.use(ConfirmationService);
app.component("DataTable", DataTable);
app.component("ConfirmPopup", ConfirmPopup);
app.component("Column", Column);
app.component("ProgressSpinner", ProgressSpinner);
app.component("Button", Button);
app.component("Calendar", Calendar);
app.component("IconField", IconField);
app.component("InputText", InputText);
app.component("FloatLabel", FloatLabel);
app.component("MultiSelect", MultiSelect);
app.component("Dropdown", Dropdown);
app.component("Sidebar", Sidebar);
app.component("Tag", Tag);
app.component("Inplace", Inplace);
app.component("Chip", Chip);
app.component("FileUpload", FileUpload);
app.component("InlineMessage", InlineMessage);
app.component("Password", Password);
app.component("Skeleton", Skeleton);
app.component("Panel", Panel);
app.use(PrimeVue, {
    unstyled: true,
    pt: Lara                            //apply preset        
});

import { useUserStore } from './stores/user'

window.Echo = new Echo({
     broadcaster: 'pusher',
     key: 'local',
     wsHost: '127.0.0.1',
     wsPort: 6001,
     cluster: 'mt1',
     forceTLS: false,
     disableStats: true,
    authEndpoint: 'http://127.0.0.1:8000/api/broadcasting/auth',
    auth: {

      headers: {
        Authorization: `Bearer `+ useUserStore().userToken,
      }
    }
  })
app.mount('#app')
