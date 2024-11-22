<template>
    <div class="w-full p-8 sm:p-4" style="direction: rtl;">
        <div class="request-detailes m-4 sm:m-0 p-2 lg:bg-site-light-background">
            <div class="request-header flex items-center justify-between mb-4 mr-1">
                <Skeleton v-if="pageLoading" height="4rem" style="background-color: #e2e8f0"></Skeleton>
                <h2 v-else class="ml-auto text-3xl w-8/12 sm:w-full break-words">
                    <span class=" text-site-text-secondary sm:text-base">الموضوع:</span>
                    <span class=" text-site-text-primary sm:text-base">{{ request.title }}</span>
                </h2>
                <div v-if="!pageLoading" class="sm:hidden">
                    <!-- <Button icon="pi pi-print" style="color: #2D2D2D;" class="text-2xl" /> -->
                    <RouterLink to="/requestssection">
                        <Button icon="pi pi-arrow-left" style="color: #2D2D2D;" class="text-2xl" />
                    </RouterLink>
                </div>
            </div>
            <div class="request-body flex sm:flex-col gap-1">
                <div class="request-body-right bg-white p-8 sm:p-4 w-10/12 md:w-full sm:w-full">
                    <div class="request-body-right-header flex items-center justify-between">
                        <Skeleton v-if="pageLoading" height="2rem" width="10rem" style="background-color: #e2e8f0"></Skeleton>
                        <div v-else class="personal-info ">
                            <h2 class=" text-lg text-site-text-primary">{{ request.user }}</h2>
                            <h2 class=" text-sm text-site-text-secondary">{{ request.user_type }}</h2>
                        </div>
                        <Skeleton v-if="pageLoading" height="2rem" width="10rem" style="background-color: #e2e8f0"></Skeleton>
                        <div v-else class="date">
                            <h2 class=" text-sm text-site-text-secondary">{{ request.created_at }}</h2>
                        </div>
                    </div>
                    <Skeleton v-if="pageLoading" height="20rem" width="100%" class="my-4"style="background-color: #e2e8f0"></Skeleton>
                    <div v-else class="message">
                        <textarea disabled  cols="100" rows="10" class=" text-site-text-secondary bg-white">
                            {{ request.description }}
                        </textarea>

                    </div>
                    <Skeleton v-if="pageLoading" height="2rem" width="5rem" style="background-color: #e2e8f0"></Skeleton>
                    <div v-else class="files-section flex gap-3">
                        <Inplace v-for="(file,index) in request.filePaths" :key="index" :pt="{ display: 'bg-site-primary  w-fit text-white p-2 flex gap-2 items-center rounded-sm'}">
                            <template #display>
                                <span class="pi pi-image" style="vertical-align: middle; font-size: 1.3rem;"></span>
                                <span style="margin-left: 0.5rem; vertical-align: middle"> ملف</span>
                            </template>
                            <template #content>
                                <a :href="'http://127.0.0.1:8000/'+file.path">تحميل الملف</a>
                                <!-- <img class="w-full" alt="Nature" :src="'http://127.0.0.1:8000/'+file.path" /> -->
                            </template>
                        </Inplace>
                    </div>
                <template v-if="useUserStore().userPermissions.update_request" >
                    <Skeleton v-if="pageLoading" class="mt-4"height="2rem" width="15rem" style="background-color: #e2e8f0"></Skeleton>
                    <div v-else class="forward w-full border-t-2 border-dashed border-site-dark-background mt-5 py-5">
                        <!-- <Dropdown optionLabel="name" panelClass="bg-white " inputClass="w-6" v-model="priority"  :options="priorities" placeholder="اختر الاهمية" class="p-column-filter ml-4">
                            <template #option="slotProps">
                                <Tag :value="slotProps.option.name" :severity="getSeverity(slotProps.option.name)"  />
                            </template>
                        </Dropdown> -->
                        <Dropdown optionLabel="status" panelClass="bg-white " inputClass="w-6" v-model="status"  :options="statuses" placeholder="اختر حالة" class="p-column-filter ml-4">
                            <template #option="slotProps">
                                <Tag :value="slotProps.option.status" :severity="getSeverity(slotProps.option.status)"  />
                            </template>
                        </Dropdown>
                        <Button :loading="buttonLoading" v-show="status" @click="updateRequest" type="button" label="اعادة توجيه" icon="pi pi-arrow-right" class="gap-2 bg-site-light-background !text-site-text-primary" />
                    </div>
                </template>
                </div>
                <div class="request-body-left  bg-white p-4 lg:w-2/12 flex flex-col gap-2">
                    <Skeleton v-if="pageLoading" height="4rem" style="background-color: #e2e8f0"></Skeleton>
                    <div v-else-if="request.building" class="detail-container bg-site-light-background p-3 rounded-sm border-site-dark-background border">
                        <h2 class="text-xl text-site-text-secondary">المبنى</h2>
                        <h2 class="text-sm text-site-text-primary">{{request.building}}</h2>
                    </div>
                    <Skeleton v-if="pageLoading" height="4rem" style="background-color: #e2e8f0"></Skeleton>
                    <div v-else-if="request.room_type" class="detail-container bg-site-light-background p-3 rounded-sm border-site-dark-background border">
                        <h2 class="text-xl text-site-text-secondary">نوع الغرفة</h2>
                        <h2 class="text-sm text-site-text-primary">{{ request.room_type }}</h2>
                    </div>
                    <Skeleton v-if="pageLoading" height="4rem" style="background-color: #e2e8f0"></Skeleton>
                    <div v-else-if="request.room" class="detail-container bg-site-light-background p-3 rounded-sm border-site-dark-background border">
                        <h2 class="text-xl text-site-text-secondary">الغرفة</h2>
                        <h2 class="text-sm text-site-text-primary">{{request.room}}</h2>
                    </div>
                    <Skeleton v-if="pageLoading" height="4rem" style="background-color: #e2e8f0"></Skeleton>
                    <div v-else-if="request.category" class="detail-container bg-site-light-background p-3 rounded-sm border-site-dark-background border">
                        <h2 class="text-xl text-site-text-secondary">نوع البلاغ</h2>
                        <h2 class="text-sm text-site-text-primary">{{ request.category }}</h2>
                    </div>
                    <Skeleton v-if="pageLoading" height="4rem" style="background-color: #e2e8f0"></Skeleton>
                    <div v-else-if="request.status" class="detail-container bg-site-light-background p-3 rounded-sm border-site-dark-background border">
                        <h2 class="text-xl text-site-text-secondary">حالة الطلب</h2>
                        <div class=" flex items-center gap-1">
                            <div class=" w-3 h-3 rounded-full bg-red-800"></div>
                            <span class="text-sm text-site-text-primary">{{ request.status }}</span>
                        </div class=" flex items-center gap-1">
                    </div>
                    <Skeleton v-if="pageLoading" height="4rem" style="background-color: #e2e8f0"></Skeleton>
                    <div v-else-if="request.priority" class="detail-container bg-site-light-background p-3 rounded-sm border-site-dark-background border">
                        <h2 class="text-xl text-site-text-secondary">اولوية الطلب</h2>
                        <div class=" flex items-center gap-1">
                            <div class=" w-3 h-3 rounded-full bg-red-800"></div>
                            <span class="text-sm text-site-text-primary">{{ request.priority }}</span>
                        </div class=" flex items-center gap-1">
                    </div>
                    <RouterLink :to="'/requesttracking/'+route.params.id" v-if="useUserStore().userPermissions.show_tracking">
                            <Button class="bg-site-primary gap-5 text-white mx-auto my-4 w-full" label="تحويلات البلاغ" />
                    </RouterLink>
                </div>
            </div>
        </div>
        
        <!-- <h1 class="text-3xl my-8">التحويلات</h1>
        <hr>
        <template v-for="(tracking,index) in trackings" :key="index">
            <Panel toggleable class="my-4" :collapsed="true">
                <template #header>
                    <div class="flex align-items-center gap-2"> 
                        <span class="font-bold">من</span>
                        <span class="font-bold">{{tracking.from_user.name}}</span>
                        <span class="font-bold">الى</span>
                        <span class="font-bold">{{tracking.to_user.name}}</span>
                    </div>
                </template>
                <template #footer>
                        <span class="p-text-secondary">{{ tracking.created_at }}</span>
                </template>

                <p class="m-0">
                    <h2 class="ml-auto text-3xl w-8/12 sm:w-full break-words">
                    <span class=" text-site-text-secondary sm:text-base">الموضوع:</span>
                    <span class=" text-site-text-primary sm:text-base">{{ tracking.subject }}</span>
                    </h2>
                    <textarea disabled  cols="30" rows="10" class=" text-site-text-secondary bg-white mt-5">
                            {{ tracking.details }}
                    </textarea>
                    <div  class="files-section flex gap-3">
                        <Inplace v-for="(file,index) in tracking.file_paths" :key="index" :pt="{ display: 'bg-site-primary  w-fit text-white p-2 flex gap-2 items-center rounded-sm'}">
                            <template #display>
                                <span class="pi pi-image" style="vertical-align: middle; font-size: 1.3rem;"></span>
                                <span style="margin-left: 0.5rem; vertical-align: middle"> صورة</span>
                            </template>
                            <template #content>
                                <img class="w-full" alt="Nature" :src="'http://127.0.0.1:8000/'+file.path" />
                            </template>
                        </Inplace>
                    </div>
                </p>
            </Panel>
        </template> -->
    <form  @submit.prevent="submitTrack" class="request-forward m-4 p-2 sm:m-2 bg-site-light-background" v-if="useUserStore().userPermissions.create_tracking">
        <Skeleton v-if="pageLoading" height="20rem" style="background-color: #e2e8f0"></Skeleton>
        <div v-if="!pageLoading" class="request bg-white p-8 sm:p-4 ">
            <div class="request-header flex flex-col lg:flex-row items-center justify-between gap-5">
                        <div class="personal-info ">
                            <h2 class="text-3xl text-site-text-primary">تحويل البلاغ</h2>
                        </div>
                        <div class="sendin-section gap-2 w-2/6">
                            <div class="dropdown-section mb-4">
                                <p class="mb-10">إلى : </p>
                                <FloatLabel>
                                <Dropdown panelClass="bg-white" inputId="to_user_id" v-model="track.to_user_id"  :options="users" optionLabel="name" optionValue="id"  class=" border-none w-full focus:ring-0 ring-white outline-0" :inputProps="{required: true}"/>
                                <label for="to_user_id" class=" text-site-primary" :class="{'float-label': track.to_user_id }">الحساب</label>
                                </FloatLabel>
                            </div>
                            <InlineMessage v-if="trackingError?.to_user_id">{{ trackingError.to_user_id[0] }}</InlineMessage>
                        </div>
            </div>
            <div class="message my-12">
                <div class="border-b-2 border-site-primary mb-4">
                                <FloatLabel>
                                        <InputText class=" border-none focus:ring-0 w-full" id="title" v-model="track.subject" />
                                        <label for="title" class=" text-site-primary" >الموضوع</label>
                                </FloatLabel>
                </div>
                <InlineMessage v-if="trackingError?.subject">{{ trackingError.subject[0] }}</InlineMessage>
                <div class="border-b-2 border-site-primary mt-12 mb-4">
                            <FloatLabel>
                                <textarea  class=" text-site-text-secondary bg-white border-none focus:ring-0 w-full focus-visible:outline-none" id="description"  
                                    v-model="track.details">
                                </textarea>
                                <label :class="{'float-label': track.details }" for="description" class=" text-site-primary">الوصف</label>
                            </FloatLabel>
                </div> 
                <InlineMessage v-if="trackingError?.details">{{ trackingError.details[0] }}</InlineMessage>
            </div>
            <div class="files-section flex gap-3">
                <div class="card w-full">
                    <FileUpload chooseLabel="اختر الملفات" cancelLabel="الغاء الملفات" :showUploadButton="false"
                     :showCancelButton="true" name="demo[]" @select="onAdvancedUpload"
                      :multiple="true" :maxFileSize="1000000" :pt="{choosebutton:'text-site-primary p-3 items-center cursor-pointer inline-flex', chooseicon:'mt-1 ml-1', filesize:'inline-block', badge:'!hidden',actions:'mr-auto',buttonbar:'border-none',content:'border-none'}">
                        <template #empty>
                            <p>اسحب الملفات إلى هنا</p>
                        </template>
                    </FileUpload>
                </div>
            </div>
            <Button :loading="trackButtonLoading" type="submit" label="تحويل" class="bg-site-primary mt-16 w-full" />
        </div>
    </form>
</div>

</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useRouter, useRoute } from 'vue-router';
import { useGetRequest,usePutRequest,usePostRequest } from '../../composables/useRequest'
import { useNotification } from "@kyvg/vue3-notification";
import { useUserStore } from '../../stores/user'
import { serialize } from 'object-to-formdata';

const userStore = useUserStore()
const { notify }  = useNotification()
const request = ref();
const priority = ref();
const status = ref();
const statuses = ref();
const users = ref();
const trackings = ref();
const priorities = ref();
const track = ref({
    from_user_id:userStore.userid,
    to_user_id:null,
    request_id:null,
    subject:null,
    details:null,
    file_path:null,
    Tracking_id:null,
});
const trackingError = ref();
const pageLoading = ref(true);
const buttonLoading = ref(false);
const trackButtonLoading = ref(false);
const route = useRoute()
const router = useRouter()

onMounted(async() => {
    const {Data:statusess } = await  useGetRequest('RequestStatus')
    const {Data:prioritiess } = await  useGetRequest('Priority')
    const {Data:userss } = await  useGetRequest('user')
    statuses.value = statusess.value
    priorities.value = prioritiess.value
    users.value = userss.value
    const { Data } = await useGetRequest('Request/'+route.params.id)
    request.value = Data.value
    const {Data:trackingss } = await  useGetRequest('Tracking?Request_id='+request.value.id)
    trackings.value = trackingss.value.data
    pageLoading.value = false;
});

const getSeverity = (status) => {
    switch (status) {
        case 'عاجل':
            return 'danger';
        case 'معلق':
            return 'danger';

        case 'غير عاجل':
            return 'info';
        case 'قيد التنفيد':
            return 'info';

        case 'مكتمل':
            return 'success';
    }
}
const updateRequest = async () => {
    buttonLoading.value = true
    const { Data } = await usePutRequest('Request/'+route.params.id,{status_id:status.value.id})
    if(Data.value){
                notify({
                    title: "تعديل البلاغ",
                    text: "تم تعديل البلاغ بنجاح",
                    type: 'success',
                });
                setTimeout(router.go(),2000)
            }
}
const onAdvancedUpload = (event) => {
        track.value.file_path = event.files
    }   
const submitTrack = async () => {
    trackButtonLoading.value = true
    track.value.request_id = request.value.id
    track.value.Tracking_id = trackings.value.length > 0 ? trackings.value[trackings.value.length-1].id : null
    const formData = serialize(
                track.value,
            )
            const { Error } = await usePostRequest('Tracking',formData)
            trackButtonLoading.value = false
            trackingError.value = Error.value
            if(!Error.value){
                notify({
                    title: "تحويل البلاغ",
                    text: "تم تحويل البلاغ بنجاح",
                    type: 'success',
                });
                setTimeout(router.go(),2000)
            }
}

</script>

<style scoped>

.\[\&\>\*\:last-child\]\:left-3>*:last-child {
    inset-inline-start: 0.75rem;
}
.float-label{
    font-size: 0.875rem;
    line-height: 1.25rem;
    top: -0.75rem;
    color: #223769;
}
</style>