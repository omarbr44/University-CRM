<script setup>
import { RouterView,useRoute } from 'vue-router';
import SideBar from './components/Bars/SideBar.vue';
import NavBar from './components/Bars/NavBar.vue';
import Logo from './components/Icon/Logo.vue'
import { onMounted } from 'vue';
import { useUserStore } from './stores/user'
import { useNotification } from "@kyvg/vue3-notification";

const { notify }  = useNotification()
onMounted( async()=>{
  var channel = window.Echo.private('App.Models.User.'+useUserStore().userid)
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
  <NavBar class="hidden sm:block" v-if="useRoute().path != '/login' && useRoute().path != '/signup'"/>
  <p class="dark:bg-slate-800 bg-white">asiisf;iuhfuf</p>
  <div class="flex ">
    <div class="w-full" >
      <nav v-if="useRoute().path != '/login' && useRoute().path != '/signup'"
       class=" w-full h-16 px-4 flex items-center justify-between bg-site-light-background sticky top-px z-10">
        <div class="ml-6 flex gap-3">
          <div class="p-2 bg-site-dark-background rounded-sm ">
                <RouterLink to="/">
                    <i class="pi pi-user" style="font-size: 1.2rem"></i>
                </RouterLink>
          </div>
          <div class="p-2 bg-site-dark-background rounded-sm relative">
                <RouterLink to="/notification">
                    <i class="pi pi-bell" style="font-size: 1.2rem"></i>
                </RouterLink>
                <div class=" absolute w-3 h-3 rounded-full bg-red-600 bottom-2 left-5"
                     :class="{'bg-red-600' : useUserStore().userNotifications.Unread_Notifications.length}"></div>
          </div>
        </div>
        <div class="flex gap-3 items-center">
          <!-- <RouterLink to="/requestsadd">
                <Button type="button" label="اضافة بلاغ" icon="pi pi-plus" class=" text-gray-800 text-md" />
          </RouterLink> -->
          <div class="logo w-8">
            <RouterLink to="/">
                      <Logo />
            </RouterLink>
          </div>
        </div>
      </nav>
      <router-view v-slot="{ Component }">
        <transition name="fade" mode="out-in">
          <component :is="Component" />
        </transition>
      </router-view>

    </div>

    <SideBar class="sm:hidden" v-if="useRoute().path != '/login' && useRoute().path != '/signup'"/>
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
