<template>
    <div v-if="user">
        <div class="header">
            <div class=" bg-site-light-background w-full h-52" ></div>
            <div class="flex items-center flex-col gap-3 relative bottom-20 sm:bottom-14">
                <div class="img-container border-4 border-white rounded-full w-44 h-44 sm:w-24 sm:h-24" >
                    <img v-if="user.image" :src="'http://127.0.0.1:8000/'+user.image" class="rounded-full w-full h-full" alt="">
                    <Avatar v-else icon="pi pi-user" class=" bg-site-dark-background rounded-full w-full h-full" size="xlarge"  shape="circle" /> 
                </div>
                <!-- <Avatar v-if="userStore.userImg" :image="'http://127.0.0.1:8000/'+userStore.userImg" size="xlarge" shape="circle" />
                <Avatar v-else icon="pi pi-user" class=" bg-site-dark-background" size="xlarge" shape="circle" /> -->
                <div class="flex">
                    <RouterLink :to="'/userupdate/'+user.id">
                        <Button icon="pi pi-pencil" outlined rounded class=" dark:text-white" />
                    </RouterLink>
                    <h2 class="text-3xl sm:text-xl text-site-text-primary dark:text-white">{{user.name}}</h2>
                </div>
                <h2 class="text-1xl sm:text-md text-site-text-secondary dark:text-white">{{user.UserType.type}}</h2>
            </div>
        </div>
        <div class="info-section flex p-8" style="direction: rtl;">
            <div class="personal-info w-1/2">
                <h2 class="text-xl sm:text-lg text-site-text-primary dark:text-white">المعلومات الشخصية</h2>
                <div class="m-4">
                    <h2 class="text-lg sm:text-lg text-site-text-primary dark:text-white">الاسم</h2>
                    <h2 class="text-lg sm:text-lg text-site-text-secondary dark:text-white">{{ user.name }}</h2>
                    <h2 class="text-lg sm:text-lg text-site-text-primary dark:text-white">اسم المستخدم</h2>
                    <h2 class="text-lg sm:text-lg text-site-text-secondary dark:text-white">{{ user.username }}</h2>
                    <h2 class="text-lg sm:text-lg text-site-text-primary dark:text-white mt-2">الصفة</h2>
                    <h2 class="text-lg sm:text-lg text-site-text-secondary dark:text-white">{{ user.UserType.type }}</h2>
                    <h2 class="text-lg sm:text-lg text-site-text-primary dark:text-white mt-2">رقم الجوال</h2>
                    <h2 class="text-lg sm:text-lg text-site-text-secondary dark:text-white">{{ user.phone }}</h2>
                </div>
            </div>
            <div v-if="userStore.userType == 'ادمن'" class="personal-info w-1/2">
                <h2 class="text-xl sm:text-lg text-site-text-primary dark:text-white"> الصلاحيات</h2>
                <div class="m-4 overflow-y-auto h-80">
                    <h2 v-for="(permission,index) in user.permission" :key="index" class="text-lg sm:text-lg text-site-text-secondary dark:text-white">{{ permission.display_name }}</h2>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
//import { RouterView,useRoute } from 'vue-router';
import { useUserStore } from '../../stores/user'
import { onMounted, ref } from 'vue';
import { useGetRequest } from '../../composables/useRequest';
import { useRoute } from 'vue-router';
const route = useRoute()
const userStore = useUserStore()
const user = ref()
onMounted(async() => {
    const { Data } = await useGetRequest('User/'+route.params.id)
    user.value = Data.value
    const {Data:permissionss} = await useGetRequest('Permission?pagination=none')
    const tempPerm = []
    user.value.permission.forEach(element => {
    if(element)
    tempPerm.push(permissionss.value.filter((el)=>el.id == element)[0])
    });
    console.log(tempPerm)
    user.value.permission = tempPerm
});
</script>

<style lang="scss" scoped>

</style>