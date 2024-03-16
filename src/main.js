import { createApp } from 'vue'
import App from './App.vue'
import router from './router';
import { VueQueryPlugin } from "vue-query";
import './style.css'
import './assets/tailwind.css'
import PrimeVue from 'primevue/config';
import DataTable from 'primevue/datatable';
import Column from 'primevue/column';
import ProgressSpinner from 'primevue/progressspinner';
import Lara from './presets/lara';      //import preset        

const app = createApp(App);

app.use(router);
app.use(VueQueryPlugin);
app.component("DataTable", DataTable);
app.component("Column", Column);
app.component("ProgressSpinner", ProgressSpinner);
app.use(PrimeVue, {
    unstyled: true,
    pt: Lara                            //apply preset        
});

app.mount('#app')
