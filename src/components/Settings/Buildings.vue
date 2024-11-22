<template>
    <section class="p-8 w-full">
        <div class="section-hedear flex">
            <div>

            </div>
            <h2 class="ml-auto text-3xl sm:text-xl text-site-text-primary dark:text-white mb-5">المباني</h2>
        </div>
        <div class="card" style="direction: rtl;" v-if="useUserStore().userPermissions.show_Building">
        <DataTable :value="buildings" dataKey="id" paginator :rows="5" 
                >
            <template #empty>لم يتم العثور على اي مبنى</template>
            <Column field="building"  header="المبنى"  style="min-width: 12rem;" class="text-center text-site-primary dark:text-white" headerClass="w-6" :pt="{ headerContent: 'justify-center gap-1'}">
                <template #body="{ data }" >
                    <Skeleton v-if="loading" style="background-color: #e2e8f0"></Skeleton>
                   <span v-else> {{ data.name }} </span>
                </template>
            </Column>
            <Column field="collegs"  header="الكلية"  style="min-width: 12rem;" class="text-center text-site-primary dark:text-white" headerClass="w-6" :pt="{ headerContent: 'justify-center gap-1'}">
                <template #body="{ data }" >
                    <Skeleton v-if="loading" style="background-color: #e2e8f0"></Skeleton>
                   <span v-else> {{ data.college.name }} </span>
                </template>
            </Column>
            <Column :exportable="false" style="min-width:10rem">
                <template #body="slotProps">
                    <!-- <Button icon="pi pi-pencil" v-if="useUserStore().userPermissions.update_UserType" outlined rounded class="mr-2" @click="editProduct(slotProps.data)" /> -->
                    <ConfirmPopup class="bg-white"></ConfirmPopup>
                    <Button icon="pi pi-trash" v-if="useUserStore().userPermissions.delete_Building" outlined rounded severity="danger" @click="confirmDeleteRequest($event,slotProps.data)" />
                </template>
            </Column>
        </DataTable>
    </div>
    <hr>
    <div class="card my-7" style="direction: rtl;" v-if="useUserStore().userPermissions.create_Building">
        <h2 class="ml-auto text-3xl sm:text-xl text-site-text-primary dark:text-white mb-5">اضافة مبنى</h2>
        <form @submit.prevent="submit" class=" flex flex-col gap-10 mt-10">
                <div>
                    <div class="border-b-2 border-site-primary ">
                        <FloatLabel>
                            <InputText class=" border-none focus:ring-0 w-full" id="name" v-model="name" />
                            <label for="name" class=" text-site-primary" >اسم المبنى</label>
                        </FloatLabel>
                    </div> 
                    <InlineMessage v-if="requestError?.name">{{requestError?.name[0]}}</InlineMessage>
                </div>
                <div>
                    <div class="border-b-2 border-site-primary ">
                        <FloatLabel>
                                <Dropdown panelClass="bg-white" inputId="college_id" v-model="college_id" :options="colleges" optionLabel="name" optionValue="id"  class=" border-none w-full focus:ring-0 ring-transparent outline-0"/>
                                <label for="college_id" class=" text-site-primary" :class="{'float-label': college_id }">الكلية </label>
                        </FloatLabel>
                    </div> 
                    <InlineMessage v-if="requestError?.college_id">{{requestError?.college_id[0]}}</InlineMessage>
                </div>
                    <Button :loading="isLoading" type="submit" label="ارسال" class=" bg-site-primary mt-2" />
                </form>
    </div>
    </section>
</template>

<script setup>
import { ref, onMounted  } from 'vue';
import { useRouter } from 'vue-router';
import { useGetRequest,useDeleteRequest,usePostRequest } from '../../composables/useRequest'
import { useConfirm } from "primevue/useconfirm";
import { useUserStore } from '../../stores/user';
import { useNotification } from "@kyvg/vue3-notification";

const { notify }  = useNotification()
const confirm = useConfirm();
const router = useRouter()
const buildings = ref();
const name = ref();
const college_id = ref();
const colleges = ref();
const loading = ref(true);
const isLoading = ref(false);
const requestError = ref();

onMounted(async() => {
    const { Data } = await useGetRequest('Building')
    const {Data:collegess } = await useGetRequest('College')
    colleges.value = collegess.value
    buildings.value = Data.value;
    loading.value = false;
});
const submit = async function(){
            isLoading.value = true
                const { Error } = await usePostRequest('Building',{'name':name.value, 'college_id':college_id.value})
                requestError.value = Error.value
                isLoading.value = false
            if(!requestError.value){
                notify({
                    title: "المباني",
                    text: "تم انشاء المبنى بنجاح",
                    type: 'success',
                });
                setTimeout(router.go(),3000)
            }
    }
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
          await useDeleteRequest('Building/'+data.id)
          router.go('')      
        },
        reject: () => {
            //toast.add({ severity: 'error', summary: 'Rejected', detail: 'You have rejected', life: 3000 });
        }
    });
};
</script>

<style >
span[data-pc-section="pages"]{
    display: flex;
    gap: 6px;
}
div[data-pc-extend="paginator"]{
    display: flex;
    color: #3D4D61;
    margin: 1rem;
}
.\[\&\>\*\:last-child\]\:left-3>*:last-child {
    inset-inline-start: 0.75rem;
}
</style>