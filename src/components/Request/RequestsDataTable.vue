<template>
    <div class="card" style="direction: rtl;">
        <DataTable v-model:filters="filters" :value="requests" paginator :rows="10" dataKey="id" filterDisplay="menu" :loading="loading"  
                :globalFilterFields="['name', 'category', 'status', 'date', 'subject']" 
                >
                
<!--             <template #header>
                <div class="flex justify-content-end">
                    <IconField iconPosition="left">
                        <InputIcon>
                            <i class="pi pi-search" />
                        </InputIcon>
                        <InputText v-model="filters['global'].value" placeholder="Keyword Search" />
                    </IconField>
                </div>
            </template> -->
            <template #empty> لم يتم العثور على اي بلاغ </template>
            <template #loading> تحميل البلاغات. انتظر من فضلك. </template>
            <Column field="name"  header="المرسل" sortable :showFilterMatchModes="false" filterMenuClass="bg-white" style="min-width: 12rem; color: #223769;" class="text-center " headerClass="w-6" :pt="{ headerContent: 'justify-center gap-1',columnFilter: '!ml-0'}">
                <template #body="{ data }" >
                   <span> {{ data.name }} </span>
                </template>
                <template #filter="{ filterModel }">
                    <InputText v-model="filterModel.value" type="text" class="p-column-filter ml-4" style="width: 10rem;"placeholder="ابحث بإسم المرسل" />
                </template>
                <template #filterclear="{ filterCallback }">
                    <Button type="button" icon="pi pi-times" class=" w-8 h-8 font-medium" @click="filterCallback()" severity="danger"></Button>
                </template>
                <template #filterapply="{ filterCallback }">
                    <Button type="button" icon="pi pi-check" @click="filterCallback()" class=" w-8 h-8 font-medium" severity="success"></Button>
                </template>
            </Column>
            <Column header="العنوان" field="subject" :showFilterMatchModes="false" filterMenuClass="bg-white" style="min-width: 12rem; color: #223769;" class="text-center " :pt="{ headerContent: 'justify-center',columnFilter: '!ml-0'}">
                <template #body="{ data }">
                        <span>{{ data.subject }}</span>
                </template>
                <template #filter="{ filterModel }">
                    <InputText v-model="filterModel.value" type="text" class="p-column-filter ml-4" style="width: 10rem;" placeholder="ابحث بعنوان البلاغ" />
                </template>
                <template #filterclear="{ filterCallback }">
                    <Button type="button" icon="pi pi-times" class=" w-8 h-8 font-medium" @click="filterCallback()" severity="danger"></Button>
                </template>
                <template #filterapply="{ filterCallback }">
                    <Button type="button" icon="pi pi-check" @click="filterCallback()" class=" w-8 h-8 font-medium" severity="success"></Button>
                </template>
            </Column>
            <Column header="نوع البلاغ" filterField="category" :showFilterMatchModes="false" filterMenuClass="bg-white" class="text-center" :filterMenuStyle="{ width: '14rem' }" style="min-width: 14rem; color: #223769;" :pt="{ headerContent: 'justify-center',columnFilter: '!ml-0' }">
                <template #body="{ data }">
                        <span>{{ data.category }}</span>
                </template>
                <template #filter="{ filterModel }">
                    <Dropdown panelClass="bg-white" inputClass="!text-site-primary" v-model="filterModel.value" :options="requestsCategory" placeholder="اختر نوعا" class="p-column-filter ml-4"  >
                        <template #option="slotProps">
                            <div class="flex align-items-center gap-2">
                                <span class="text-site-primary">{{ slotProps.option }}</span>
                            </div>
                        </template>
                    </Dropdown>
                </template>
                <template #filterclear="{ filterCallback }">
                    <Button type="button" icon="pi pi-times" class=" w-8 h-8 font-medium" @click="filterCallback()" severity="danger"></Button>
                </template>
                <template #filterapply="{ filterCallback }">
                    <Button type="button" icon="pi pi-check" @click="filterCallback()" class=" w-8 h-8 font-medium" severity="success"></Button>
                </template>
            </Column>
            <Column header="تاريخ البلاغ" filterField="date" :showFilterMatchModes="false" filterMenuClass="bg-white" sortable class="text-center " dataType="date" style="min-width: 10rem; color: #223769;" :pt="{ headerContent: 'justify-center gap-1',columnFilter: '!ml-0' }">
                <template #body="{ data }">
                    {{ formatDate(data.date) }}
                </template>
                <template #filter="{ filterModel }">
                    <Calendar panelClass="bg-white !text-site-primary" class="ml-4" inputClass="w-40" v-model="filterModel.value" dateFormat="mm/dd/yy" placeholder="mm/dd/yyyy" mask="99/99/9999" />
                </template>
                <template #filterclear="{ filterCallback }">
                    <Button type="button" icon="pi pi-times" class=" w-8 h-8 font-medium" @click="filterCallback()" severity="danger"></Button>
                </template>
                <template #filterapply="{ filterCallback }">
                    <Button type="button" icon="pi pi-check" @click="filterCallback()" class=" w-8 h-8 font-medium" severity="success"></Button>
                </template>
            </Column>
            <Column field="status" header="الحالة" :showFilterMatchModes="false" filterMenuClass="bg-white" class="text-center " :filterMenuStyle="{ width: '14rem' }" style="min-width: 12rem; color: #223769;" :pt="{ headerContent: 'justify-center',columnFilter: '!ml-0' }">
                <template #body="{ data }">
                    <Tag :value="data.status" :severity="getSeverity(data.status)" style="width: 5rem;"/>
                </template>
                <template #filter="{ filterModel }">
                    <Dropdown panelClass="bg-white " inputClass="w-6" v-model="filterModel.value"  :options="statuses" placeholder="اختر حالة" class="p-column-filter ml-4">
                        <template #option="slotProps">
                            <Tag :value="slotProps.option" :severity="getSeverity(slotProps.option)"  />
                        </template>
                    </Dropdown>
                </template>
                <template #filterclear="{ filterCallback }">
                    <Button type="button" icon="pi pi-times" class=" w-8 h-8 font-medium" @click="filterCallback()" severity="danger"></Button>
                </template>
                <template #filterapply="{ filterCallback }">
                    <Button type="button" icon="pi pi-check" @click="filterCallback()" class=" w-8 h-8 font-medium" severity="success"></Button>
                </template>
            </Column>
            <Column :exportable="false" style="min-width:10rem">
                <template #body="slotProps">
                    <Button icon="pi pi-pencil" outlined rounded class="mr-2" @click="editProduct(slotProps.data)" />
                    <Button icon="pi pi-trash" outlined rounded severity="danger" @click="confirmDeleteProduct(slotProps.data)" />
                </template>
            </Column>
        </DataTable>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { FilterMatchMode } from 'primevue/api';

const requests = ref();
const filters = ref({
    global: { value: null, matchMode: FilterMatchMode.CONTAINS },
    name: { value: null, matchMode: FilterMatchMode.STARTS_WITH },
    subject: { value: null, matchMode: FilterMatchMode.STARTS_WITH },
    category: { value: null, matchMode: FilterMatchMode.EQUALS },
    status: { value: null, matchMode: FilterMatchMode.EQUALS },
    date: { value: null, matchMode: FilterMatchMode.DATE_IS },
});
const statuses = ref(['منفذ', 'قيد التنفيذ', 'غير منفذ']);
const loading = ref(true);
const requestsCategory = ref([
                        'صيانة',
                        'بلاغ',
                        ])
onMounted(() => {
            const data = [
            { id: 1,name: 'oiugy' , subject: 'oiuydd', category:'صيانة',date: '2016-09-13',status: 'منفذ' },
            { id: 2,name: 'aaaaiugy' , subject: 'oiuydd', category: 'صيانة',date: '2019-09-13',status: 'قيد التنفيذ' },
            { id: 3,name: 'bbojiiugy' , subject: 'oiuydd', category:'بلاغ',date: '2015-09-13',status: 'غير منفذ' },
            { id: 4,name: 'oiugy' , subject: 'oiuydd', category:'صيانة',date: '2016-09-13',status: 'منفذ' },
            { id: 5,name: 'aaaaiugy' , subject: 'oiuydd', category: 'صيانة',date: '2019-09-13',status: 'قيد التنفيذ' },
            { id: 6,name: 'bbojiiugy' , subject: 'oiuydd', category:'بلاغ',date: '2015-09-13',status: 'غير منفذ' },
            { id: 7,name: 'oiugy' , subject: 'oiuydd', category:'صيانة',date: '2016-09-13',status: 'منفذ' },
            { id: 8,name: 'aaaaiugy' , subject: 'oiuydd', category: 'صيانة',date: '2019-09-13',status: 'قيد التنفيذ' },
            { id: 9,name: 'bbojiiugy' , subject: 'oiuydd', category:'بلاغ',date: '2015-09-13',status: 'غير منفذ' },
            { id: 10,name: 'oiugy' , subject: 'oiuydd', category:'صيانة',date: '2016-09-13',status: 'منفذ' },
            { id: 11,name: 'aaaaiugy' , subject: 'oiuydd', category: 'صيانة',date: '2019-09-13',status: 'قيد التنفيذ' },
            { id: 12,name: 'bbojiiugy' , subject: 'oiuydd', category:'بلاغ',date: '2015-09-13',status: 'غير منفذ' },
            { id: 13,name: 'oiugy' , subject: 'oiuydd', category:'صيانة',date: '2016-09-13',status: 'منفذ' },
            { id: 14,name: 'aaaaiugy' , subject: 'oiuydd', category: 'صيانة',date: '2019-09-13',status: 'قيد التنفيذ' },
            { id: 15,name: 'bbojiiugy' , subject: 'oiuydd', category:'بلاغ',date: '2015-09-13',status: 'غير منفذ' },
            { id: 16,name: 'oiugy' , subject: 'oiuydd', category:'صيانة',date: '2016-09-13',status: 'منفذ' },
            { id: 17,name: 'aaaaiugy' , subject: 'oiuydd', category: 'صيانة',date: '2019-09-13',status: 'قيد التنفيذ' },
            { id: 18,name: 'bbojiiugy' , subject: 'oiuydd', category:'بلاغ',date: '2015-09-13',status: 'غير منفذ' },
            { id: 19,name: 'oiugy' , subject: 'oiuydd', category:'صيانة',date: '2016-09-13',status: 'منفذ' },
            { id: 20,name: 'aaaaiugy' , subject: 'oiuydd', category: 'صيانة',date: '2019-09-13',status: 'قيد التنفيذ' },
            { id: 21,name: 'bbojiiugy' , subject: 'oiuydd', category:'بلاغ',date: '2015-09-13',status: 'غير منفذ' },
            ]
            requests.value = getRequests(data);
            loading.value = false;
});

const getRequests = (data) => {
    return [...(data || [])].map((d) => {
        d.date = new Date(d.date);

        return d;
    });
};
const formatDate = (value) => {
    return value.toLocaleDateString('en-US', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric'
    });
};
const getSeverity = (status) => {
    switch (status) {
        case 'غير منفذ':
            return 'danger';

        case 'منفذ':
            return 'success';

        case 'قيد التنفيذ':
            return 'warning';
    }
}

</script>
<style>
button[data-p-highlight]{
    border-radius: 100%;
    padding: 6px;
    width: 2rem;
    height: 2rem;
    line-height: 0;
}
button[data-p-highlight="true"]{
    background-color: #2237691f;
}
span[data-pc-section="pages"]{
    display: flex;
    gap: 6px;
}
div[data-pc-extend="paginator"]{
    display: flex;
    color: #3D4D61;
    margin: 1rem;
}
</style>