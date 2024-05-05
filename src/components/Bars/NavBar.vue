<template>
    <nav class="border-gray-200 bg-gray-50 dark:bg-gray-800 dark:border-gray-700">
  <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
    <a href="#" class="flex items-center space-x-3 rtl:space-x-reverse">
        <img src="https://flowbite.com/docs/images/logo.svg" class="h-8" alt="Flowbite Logo" />
        <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Flowbite</span>
    </a>
    <button @click="navbar = !navbar" data-collapse-toggle="navbar-solid-bg" type="button" class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-solid-bg" aria-expanded="false">
        <span class="sr-only">Open main menu</span>
        <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
        </svg>
    </button>
    <div v-show="navbar" class="w-full md:block md:w-auto" id="navbar-solid-bg">
        <div style="background-image: linear-gradient(to bottom, #436FCE, #315197, #223868);"
         class=" w-full h-full fixed z-10 left-0 top-0">
            <div class="header flex justify-between">
                <Button type="button" icon="pi pi-times" class="w-20 h-20" style="font-size: 1.5rem" @click=""></Button>
                <Button type="button" icon="pi pi-times" class=" w-20 h-20 " style="font-size: 1.5rem" @click="navbar = !navbar" ></Button>
            </div>
            <div class="profile-info">
                <h2 class="text-xl text-white text-center my-2">{{ user.userName }}</h2>
                <h2 class="text-sm text-site-dark-background text-center my-2 ">{{ user.userType }}</h2>
            </div>
            <div class="links flex flex-col gap-8 mt-10">
                <div class="flex justify-evenly">
                    <div class="link text-center">
                        <div class="p-3 bg-white rounded-sm mb-2">
                            <RouterLink to="/">
                                <i class="pi pi-home" style="font-size: 1.8rem; color: #223769"></i>
                            </RouterLink>
                        </div>
                        <span class=" text-white text-center">الرئيسية</span>
                    </div>
                    <div class="link text-center">
                        <div class="p-3 bg-white rounded-sm mb-2">
                            <RouterLink to="/">
                                <i class="pi pi-home" style="font-size: 1.8rem; color: #223769"></i>
                            </RouterLink>
                        </div>
                        <span class=" text-white text-center">الرئيسية</span>
                    </div>
                </div>
                <div class="flex justify-evenly">
                    <div class="link text-center">
                        <button class="flex items-center flex-col" @click="logout">
                            <div class="w-fit p-3 bg-white rounded-sm mb-2">
                                    <i class="pi pi-sign-out" style="font-size: 1.8rem; color: #223769"></i>
                            </div>
                            <span class=" text-white text-center">تسجيل الخروج</span>
                        </button>
                    </div>
                    <div class="link text-center">
                        <div class="p-3 bg-white rounded-sm mb-2">
                            <RouterLink to="/">
                                <i class="pi pi-home" style="font-size: 1.8rem; color: #223769"></i>
                            </RouterLink>
                        </div>
                        <span class=" text-white text-center">الرئيسية</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
  </div>
</nav>
</template>

<script setup>
import { ref } from 'vue';
import { useUserStore } from '../../stores/user'
import { useRouter } from 'vue-router';

const router = useRouter()
const user = useUserStore()
const navbar = ref(false)

const logout = ()=>{
    user.signOut()
    router.push('/login')
}
</script>

<style scoped>

</style>