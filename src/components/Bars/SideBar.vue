<template>
    <div class="h-screen bg-site-light-background sticky top-0">
        <div class="p-3 mt-16 flex flex-col gap-7 items-center">
            <div class="p-3 rounded-sm" :class="{ 'bg-site-primary': useRoute().path == '/requestssection' }">
                <RouterLink to="/requestssection">
                    <i class="pi pi-home pl-0.5 text-site-primary" :class="{ 'text-white': useRoute().path == '/requestssection' }" style="font-size: 1.3rem;"></i>
                </RouterLink>
            </div>
            <!-- <div class="p-3">
                <RouterLink to="/">
                    <i class="pi pi-user" style="font-size: 1.3rem"></i>
                </RouterLink>
            </div> -->
            <!-- <div class=" p-3">
                <RouterLink to="/">
                    <i class="pi pi-bell" style="font-size: 1.3rem"></i>
                </RouterLink>
            </div> -->
            <div class="p-3 rounded-sm" :class="{ 'bg-site-primary': useRoute().path == '/analysis' }">
                <RouterLink to="/analysis">
                    <i class="pi pi-chart-bar text-site-primary dark:text-white" :class="{ 'text-white': useRoute().path == '/analysis' }" style="font-size: 1.3rem"></i>
                </RouterLink>
            </div>
            <div class="p-3 rounded-sm" v-if="useUserStore().userPermissions.show_users" :class="{ 'bg-site-primary': useRoute().path == '/users' }">
                <RouterLink to="/users">
                    <i class="pi pi-user text-site-primary dark:text-white" :class="{ 'text-white': useRoute().path == '/users' }" style="font-size: 1.3rem"></i>
                </RouterLink>
            </div>
            <div class="p-3 rounded-sm" v-if="useUserStore().userPermissions.show_UserType" :class="{ 'bg-site-primary': useRoute().path == '/usertype' }">
                <RouterLink to="/usertype">
                    <i class="pi pi-users text-site-primary dark:text-white" :class="{ 'text-white': useRoute().path == '/usertype' }" style="font-size: 1.3rem"></i>
                </RouterLink>
            </div>
            <div class="p-3 rounded-sm" v-if="useUserStore().userPermissions.show_UserType" :class="{ 'bg-site-primary': useRoute().path == '/settings' }">
                <RouterLink to="/settings">
                    <i class="pi pi-cog text-site-primary dark:text-white" :class="{ 'text-white': useRoute().path == '/settings' }" style="font-size: 1.3rem"></i>
                </RouterLink>
            </div>
            <div class="p-3">
                <ThemeToggle />
            </div>
            <div class="p-3">
                <button @click="logout">
                    <i class="pi pi-sign-out text-site-primary dark:text-white" style="font-size: 1.3rem"></i>
                </button>
            </div>
            <div class="p-3 mt-32">
                <RouterLink to="/">
                    <Logo />
                </RouterLink>
            </div>
        </div>
    </div>
</template>

<script setup>
import { RouterLink,useRoute } from 'vue-router';
import Logo from '../Icon/Logo.vue'
import { useUserStore } from '../../stores/user'
import { useRouter } from 'vue-router';
import ThemeToggle from '../otherSections/ThemeToggle.vue';

const user = useUserStore()
const router = useRouter()
const logout = ()=>{
    user.signOut()
    router.push('/login')
}
</script>

<style lang="scss" scoped>

</style>