import { createApp } from 'vue'
import App from './App.vue'
import router from './router';
import { VueQueryPlugin } from "vue-query";
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
import MultiSelect from 'primevue/multiselect';
import Tag from 'primevue/tag';
import Dropdown from 'primevue/dropdown';
import Sidebar from 'primevue/sidebar';
import Lara from './presets/lara';      //import preset        

const app = createApp(App);

app.use(router);
app.use(VueQueryPlugin);
app.component("DataTable", DataTable);
app.component("Column", Column);
app.component("ProgressSpinner", ProgressSpinner);
app.component("Button", Button);
app.component("Calendar", Calendar);
app.component("IconField", IconField);
app.component("InputText", InputText);
app.component("MultiSelect", MultiSelect);
app.component("Dropdown", Dropdown);
app.component("Sidebar", Sidebar);
app.component("Tag", Tag);
app.use(PrimeVue, {
    unstyled: true,
    pt: Lara                            //apply preset        
});

app.mount('#app')
