<template>
    <div class="p-8">
        <div class="header flex">
            <div class="filters">
<!--                 <Calendar v-model="notificationDate" showIcon iconDisplay="input" panelClass="bg-white !text-site-primary" />
 -->            </div>
            <h2 class="ml-auto text-3xl sm:text-xl text-site-text-primary">الإشعارات</h2>
        </div>
        <div class="notifications-wrapper my-8" style="direction: rtl;">
            <Skeleton v-for="index in 3" v-if="pageLoading" height="5rem" width="100%" class="mb-3" style="background-color: #e2e8f0"></Skeleton>
            <RouterLink  :to="'/notificationtracking/'+noti.data.id" v-else v-for="(noti,index) in userStore.userNotifications.Unread_Notifications" :key="index"
                     class="notification p-5 flex bg-site-light-background rounded-md shadow-md mb-3">
                <div class="flex items-center justify-between w-full">
                    <div class="right-section flex items-center gap-4">
                        <Avatar v-if="userStore.userImg" :image="'http://127.0.0.1:8000/'+userStore.userImg" class="mr-2" size="large" shape="circle" />
                        <Avatar v-else icon="pi pi-user" class=" bg-site-dark-background" size="large" shape="circle" />
                        <div class="flex">
                            <span class=" mr-3 ml-2 text-site-text-primary" >{{ noti.data.from_user }}</span>
                            <span class=" text-site-text-secondary">{{ noti.data.subject }}</span>
                        </div>
    
                    </div>
                    <div class="left-section text-site-text-secondary" style="direction: ltr;">
                        <span>{{ noti.data.date }}</span>
                    </div>
                </div>
            </RouterLink>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import { useUserStore } from '../../stores/user'
import { useRoute } from 'vue-router';

    const route = useRoute()
    const userStore = useUserStore()
    const notificationDate = ref()
    const pageLoading = ref(true)
    const changeLoad = function(){
        pageLoading.value = false
    }
    console.log(userStore.userNotifications)
    setTimeout(changeLoad,2000)
</script>

<style lang="scss" scoped>

</style>