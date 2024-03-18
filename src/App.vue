<script setup>
import { RouterView } from 'vue-router';
import SideBar from './components/SideBar/SideBar.vue';


</script>

<template>
  <div class=" flex">
    <RouterView />
    <SideBar />
  </div>
</template>

<style scoped>
</style>
