<script setup>
import { RouterView,useRoute } from 'vue-router';
import SideBar from './components/Bars/SideBar.vue';
import NavBar from './components/Bars/NavBar.vue';
import Logo from './components/Icon/Logo.vue'
import { onMounted } from 'vue';
import { useUserStore } from './stores/user'
import { useNotification } from "@kyvg/vue3-notification";

const userStore = useUserStore()
const { notify }  = useNotification()
onMounted( async()=>{
  var channel = window.Echo.private('App.Models.User.'+userStore.userid)
        channel.notification(function(data) {
          notify({
                    title: " تحويل بلاغ بعنوان "+data.subject,
                    text: " تم تحويل بلاغ من قبل "+data.from_user,
                    type: 'success',
                });
        })
})
</script>

<template>
  <notifications  />
  <NavBar class="hidden sm:block" v-if="useRoute().path != '/login' && useRoute().path != '/signup' && useRoute().path != '/'"/>
  <div class="flex ">
    <div class="w-full" >
      <nav v-if="useRoute().path != '/login' && useRoute().path != '/signup' && useRoute().path != '/'"
       class="sm:hidden w-full h-16 px-4 flex items-center justify-between bg-site-light-background dark:bg-site-background-dark-2 sticky top-0 z-10">
        <div class="ml-6 flex gap-3">
          <div class=" bg-site-dark-background rounded-full w-10 h-10 overflow-hidden flex items-center justify-center">
                <RouterLink :to="'/userprofile/'+userStore.userid">
                   <Avatar v-if="userStore.userImg" :image="'http://127.0.0.1:8000/'+userStore.userImg" class="mr-2" size="large" shape="circle" />
                   <Avatar v-else icon="pi pi-user" class=" bg-site-dark-background" size="small" shape="circle" />
                </RouterLink>
          </div>
          <div class="p-2 bg-site-dark-background rounded-sm relative">
                <RouterLink to="/notification">
                    <i class="pi pi-bell text-site-primary" style="font-size: 1.2rem"></i>
                </RouterLink>
                <div class=" absolute w-3 h-3 rounded-full bottom-2 left-5"
                     :class="{'bg-red-600' : userStore.userNotifications?.Unread_Notifications.length}"></div>
          </div>
        </div>
        <div class="flex gap-3 items-center">
          <!-- <RouterLink to="/requestsadd">
                <Button type="button" label="اضافة بلاغ" icon="pi pi-plus" class=" text-gray-800 text-md" />
          </RouterLink> -->
          <div class="logo w-8">
            <RouterLink to="/requestssection">
                      <Logo />
            </RouterLink>
          </div>
        </div>
      </nav>
      <router-view v-slot="{ Component }">
        <transition name="fade" mode="out-in">
          <component :is="Component" class="dark:bg-site-background-dark min-h-screen"/>
        </transition>
      </router-view>

    </div>

    <SideBar class="sm:hidden dark:bg-site-background-dark-2" v-if="useRoute().path != '/login' && useRoute().path != '/signup' && useRoute().path != '/'"/>
  </div>
</template>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
.vue-notification{
  font-size: 1.2rem !important;
}
</style>
