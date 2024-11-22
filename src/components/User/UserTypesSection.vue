<template>
    <section class="p-8 w-full">
        <div class="section-hedear flex">
            <RouterLink to="/usertypeadd/0" v-if="useUserStore().userPermissions.create_UserType">
                <Button type="button" label="اضافة نوع" icon="pi pi-plus" class=" bg-site-primary text-white sm:text-sm" />
            </RouterLink>
            <h2 class="ml-auto text-3xl sm:text-xl text-site-text-primary dark:text-white">انواع الحسابات</h2>
        </div>
        <div class="card" style="direction: rtl;">
        <DataTable  v-model:selection="selected" :value="userTypes" dataKey="id"    
                >
            <template #empty> لم يتم العثور على اي نوع </template>
            <Column field="userType"  header="نوع الحساب"  style="min-width: 12rem;" class="text-center text-site-primary dark:text-white" headerClass="w-6" :pt="{ headerContent: 'justify-center gap-1'}">
                <template #body="{ data }" >
                    <Skeleton v-if="loading" style="background-color: #e2e8f0"></Skeleton>
                   <span v-else> {{ data.type }} </span>
                </template>
            </Column>
            <Column field="permissions"  header="الصلاحيات" style="min-width: 12rem;"  class="text-center text-site-primary dark:text-white" :pt="{ headerContent: 'justify-center gap-1'}">
                <template #body="{ data }" >
                    <Skeleton v-if="loading" style="background-color: #e2e8f0"></Skeleton>
                    <Dropdown panelClass="bg-white " inputClass="w-6 dark:text-site-primary" :options="data.permissions" placeholder=" الصلاحيات" class="p-column-filter ml-4" />
                </template>
            </Column>
            <Column :exportable="false" style="min-width:10rem">
                <template #body="slotProps">
                    <Button icon="pi pi-pencil" v-if="useUserStore().userPermissions.update_UserType" outlined rounded class="mr-2" @click="editProduct(slotProps.data)" />
                    <ConfirmPopup class="bg-white"></ConfirmPopup>
                    <Button icon="pi pi-trash" v-if="useUserStore().userPermissions.delete_UserType" outlined rounded severity="danger" @click="confirmDeleteRequest($event,slotProps.data)" />
                </template>
            </Column>
        </DataTable>
    </div>
    </section>
</template>

<script setup>
import { ref, onMounted  } from 'vue';
import { useRouter } from 'vue-router';
import { useGetRequest,useDeleteRequest } from '../../composables/useRequest'
import { useConfirm } from "primevue/useconfirm";
import { useUserStore } from '../../stores/user';
const confirm = useConfirm();
const router = useRouter()
const userTypes = ref();
const loading = ref(true);

onMounted(async() => {
    const { Data } = await useGetRequest('UserType')
    userTypes.value = Data.value;
    loading.value = false;
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
          await useDeleteRequest('UserType/'+data.id)
          router.go('')      
        },
        reject: () => {
            //toast.add({ severity: 'error', summary: 'Rejected', detail: 'You have rejected', life: 3000 });
        }
    });
};
const editProduct = (data) => {
    router.push('usertypeadd/'+data.id)
}
</script>

<style scoped>

</style>