<script setup>
import { RouterView,useRoute } from 'vue-router';
import SideBar from './components/Bars/SideBar.vue';
import NavBar from './components/Bars/NavBar.vue';
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
  <notifications duration="-3000" />
  <NavBar class="hidden sm:block" v-if="useRoute().path != '/login' && useRoute().path != '/signup'"/>
  <div class="flex">
    <!-- <RouterView /> -->
    <router-view v-slot="{ Component }">
      <transition name="fade" mode="out-in">
        <component :is="Component" />
      </transition>
    </router-view>
    <SideBar class="sm:hidden" v-if="useRoute().path != '/login' && useRoute().path != '/signup'"/>
  </div>
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
