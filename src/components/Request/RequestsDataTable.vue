<template>
    <div class="card" style="direction: rtl;">
        <DataTable v-model:filters="filters" v-model:selection="selected" selectionMode="single" :row:select="showDetailesPage()" :value="requests" paginator :rows="10" dataKey="id" filterDisplay="menu"   
                :globalFilterFields="['user', 'category', 'status', 'date', 'title']"  
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
            <!-- 
            <template #loading> تحميل البلاغات. انتظر من فضلك. </template> -->
            <template #empty> لم يتم العثور على اي بلاغ </template>
            <Column field="user"  header="المرسل" sortable :showFilterMatchModes="false" filterMenuClass="bg-white" style="min-width: 12rem; color: #223769;" class="text-center " headerClass="w-6" :pt="{ headerContent: 'justify-center gap-1',columnFilter: '!ml-0'}">
                <template #body="{ data }" >
                    <Skeleton v-if="loading" style="background-color: #e2e8f0"></Skeleton>
                   <span v-else> {{ data.user }} </span>
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
            <Column  header="العنوان" field="title" :showFilterMatchModes="false" filterMenuClass="bg-white" style="min-width: 12rem; color: #223769;" class="text-center" :pt="{ headerContent: 'justify-center',columnFilter: '!ml-0'}">
                <template #body="{ data }">
                        <Skeleton v-if="loading" style="background-color: #e2e8f0"></Skeleton>
                        <span v-else>{{ data.title }}</span>
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
                        <Skeleton v-if="loading" style="background-color: #e2e8f0"></Skeleton>
                        <span v-else>{{ data.category }}</span>
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
                    <Skeleton v-if="loading" style="background-color: #e2e8f0"></Skeleton>
                    <span v-else>{{ formatDate(data.date) }}</span>          
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
            <Column header="الحالة" filterField="status" :showFilterMatchModes="false" filterMenuClass="bg-white" class="text-center " :filterMenuStyle="{ width: '14rem' }" style="min-width: 12rem; color: #223769;" :pt="{ headerContent: 'justify-center',columnFilter: '!ml-0' }">
                <template #body="{ data }">
                    <Skeleton v-if="loading" style="background-color: #e2e8f0"></Skeleton>
                    <Tag v-else :value="data.status" :severity="getSeverity(data.status)" style="width: 5rem;"/>
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
                    <!-- <Button icon="pi pi-pencil" outlined rounded class="mr-2" @click="editProduct(slotProps.data)" /> -->
                    <ConfirmPopup></ConfirmPopup>
                    <Skeleton v-if="loading" style="background-color: #e2e8f0"></Skeleton>
                    <Button v-else icon="pi pi-trash" outlined rounded severity="danger" @click="confirmDeleteRequest($event,slotProps.data)" />
                </template>
            </Column>
        </DataTable>
    </div>
</template>

<script setup>
import { ref, onMounted  } from 'vue';
import { useRouter } from 'vue-router';
import { FilterMatchMode } from 'primevue/api';
import { useGetRequest,useDeleteRequest } from '../../composables/useRequest'
import { useConfirm } from "primevue/useconfirm";
const confirm = useConfirm();
const router = useRouter()
const requests = ref(new Array(4));
const filters = ref({
    global: { value: null, matchMode: FilterMatchMode.CONTAINS },
    user: { value: null, matchMode: FilterMatchMode.STARTS_WITH },
    title: { value: null, matchMode: FilterMatchMode.STARTS_WITH },
    category: { value: null, matchMode: FilterMatchMode.EQUALS },
    status: { value: null, matchMode: FilterMatchMode.EQUALS },
    date: { value: null, matchMode: FilterMatchMode.DATE_IS },
});
const statuses = ref(['مكتمل', 'قيد التنفيد', 'معلق']);
const loading = ref(true);
const selected = ref();
const requestsCategory = ref([
                        'صيانة',
                        'بلاغ',
                        ])

onMounted(async() => {
    const { Data } = await useGetRequest('Request')
    requests.value = getRequests(Data.value);
    loading.value = false;
    console.log(requests.value)
});

const confirmDeleteRequest = (event,data) => {
    confirm.require({
        target: event.currentTarget,
        message: ' هل أنت متأكد من اكمال عملية الحذف',
        icon: 'pi pi-exclamation-triangle',
        rejectClass: 'p-button-secondary p-button-outlined p-button-sm',
        acceptClass: 'p-button-sm bg-red-600',
        rejectLabel: 'الغاء',
        acceptLabel: 'حذف',
        accept: async () => {
          await useDeleteRequest('Request/'+data.id)
          router.go('')      
        },
        reject: () => {
            //toast.add({ severity: 'error', summary: 'Rejected', detail: 'You have rejected', life: 3000 });
        }
    });
};

const getRequests = (data) => {
    return [...(data || [])].map((d) => {
        d.date = new Date(d.created_at);

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
        case 'معلق':
            return 'danger';

        case 'مكتمل':
            return 'success';

        case 'قيد التنفيد':
            return 'info';
    }
}
const showDetailesPage = () => {
    if(!selected.value) return
    router.push('/requestdetailes/'+selected.value.id)
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