<template>
    <div class="w-full p-8 sm:p-4" style="direction: rtl;">
        <h1 class="text-3xl my-8">التحويلات</h1>
        <hr>
        <Skeleton v-if="pageLoading" height="4rem" class="my-4" style="background-color: #e2e8f0"></Skeleton>
        <Skeleton v-if="pageLoading" height="4rem" class="my-4" style="background-color: #e2e8f0"></Skeleton>
        <Skeleton v-if="pageLoading" height="4rem" class="my-4" style="background-color: #e2e8f0"></Skeleton>
        <template v-else v-for="(tracking,index) in trackings" :key="index">
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
        </template>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import { useGetRequest } from '../../composables/useRequest'

const route = useRoute()
const trackings = ref()
const pageLoading = ref(true);

onMounted(async() => {
    const {Data:trackingss } = await  useGetRequest('Tracking?request_id='+route.params.id)
    trackings.value = trackingss.value.data
    pageLoading.value = false;
});
</script>

<style scoped>

</style>