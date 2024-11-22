<template>
    <section class="p-8 w-full">
        <div class="section-hedear flex">
            <RouterLink to="/signup" v-if="useUserStore().userPermissions.create_user">
                <Button type="button" label="اضافة حساب" icon="pi pi-plus" class=" bg-site-primary text-white sm:text-sm" />
            </RouterLink>
            <h2 class="ml-auto text-3xl sm:text-xl text-site-text-primary dark:text-white">الحسابات</h2>
        </div>
        <div class="card" style="direction: rtl;">
        <DataTable  v-model:selection="selected" :value="users" dataKey="id" selectionMode="single" :row:select="showDetailesPage()"  paginator :rows="10"  
                >
            <template #empty> لم يتم العثور على اي حساب </template>
            <Column field="image"  header=""  style="width: 1rem;" class="text-center text-site-primary dark:text-white" headerClass="w-6" :pt="{ headerContent: 'justify-center gap-1'}">
                <template #body="{ data }" >
                    <Avatar v-if="data.image" :image="'http://127.0.0.1:8000/'+data.image" size="normal" shape="circle" />
                    <Avatar v-else icon="pi pi-user" class=" bg-site-dark-background" size="normal" shape="circle" />
                </template>
            </Column>
            <Column field="userType"  header="الاسم الكامل"  style="min-width: 14rem;" class="text-center text-site-primary dark:text-white" headerClass="w-6" :pt="{ headerContent: 'justify-center gap-1'}">
                <template #body="{ data }" >
                    <Skeleton v-if="loading" style="background-color: #e2e8f0"></Skeleton>
                   <span v-else> {{ data.name }} </span>
                </template>
            </Column>
            <Column field="userType"  header="اسم المستخدم"  style="min-width: 14rem;" class="text-center text-site-primary dark:text-white" headerClass="w-6" :pt="{ headerContent: 'justify-center gap-1'}">
                <template #body="{ data }" >
                    <Skeleton v-if="loading" style="background-color: #e2e8f0"></Skeleton>
                   <span v-else> {{data.username}}</span>
                   <!-- <span v-else> {{ data.username }} </span> -->
                </template>
            </Column>
            <Column field="userType"  header="رقم الجوال"  style="min-width: 14rem;" class="text-center text-site-primary dark:text-white" headerClass="w-6" :pt="{ headerContent: 'justify-center gap-1'}">
                <template #body="{ data }" >
                    <Skeleton v-if="loading" style="background-color: #e2e8f0"></Skeleton>
                   <span v-else> {{ data.phone }} </span>
                </template>
            </Column>
            <Column field="userType"  header="نوع الحساب"  style="min-width: 14rem;" class="text-center text-site-primary dark:text-white" headerClass="w-6" :pt="{ headerContent: 'justify-center gap-1'}">
                <template #body="{ data }" >
                    <Skeleton v-if="loading" style="background-color: #e2e8f0"></Skeleton>
                   <span v-else> {{data.type.type}}</span>
                   <!-- <span v-else> {{ data.usertype }} </span> -->
                </template>
            </Column>

            <Column :exportable="false" style="min-width:10rem">
                <template #body="slotProps">
                    <Button icon="pi pi-pencil" v-if="useUserStore().userPermissions.update_user" outlined rounded class="mr-2" @click="editProduct(slotProps.data)" />
                    <ConfirmPopup></ConfirmPopup>
                    <Button icon="pi pi-trash" v-if="useUserStore().userPermissions.delete_user" outlined rounded severity="danger" @click="confirmDeleteRequest($event,slotProps.data)" />
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
const users = ref();
const loading = ref(true);
const selected = ref();

onMounted(async() => {
    const { Data } = await useGetRequest('User?pagination=none')
    users.value = Data.value;
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
          await useDeleteRequest('User/'+data.id)
          router.go('')      
        },
        reject: () => {
            //toast.add({ severity: 'error', summary: 'Rejected', detail: 'You have rejected', life: 3000 });
        }
    });
};
const showDetailesPage = () => {
    if(!selected.value) return
    router.push('/userprofile/'+selected.value.id)
}
const editProduct = (data) => {
    router.push('/userupdate/'+data.id)
}
</script>

<style scoped>

</style>