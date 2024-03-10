import { createApp } from 'vue'
import App from './App.vue'
import './style.css'
import './assets/tailwind.css'
import PrimeVue from 'primevue/config';
import DataTable from 'primevue/datatable';
import Column from 'primevue/column';

import Lara from './presets/lara';      //import preset        

const app = createApp(App);
app.component("DataTable", DataTable);
app.component("Column", Column);

app.use(PrimeVue, {
    unstyled: true,
    pt: Lara                            //apply preset        
});

app.mount('#app')
