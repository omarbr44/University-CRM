<template>
    <div class="h-screen bg-site-light-background sticky top-px">
        <div class="p-3 mt-8 flex flex-col gap-7">
            <div class="p-3 bg-site-primary rounded-sm">
                <RouterLink to="/">
                    <i class="pi pi-home pl-0.5" style="font-size: 1.3rem; color: white;"></i>
                </RouterLink>
            </div>
            <div class="p-3">
                <RouterLink to="/">
                    <i class="pi pi-user" style="font-size: 1.3rem"></i>
                </RouterLink>
            </div>
            <div class=" p-3">
                <RouterLink to="/">
                    <i class="pi pi-bell" style="font-size: 1.3rem"></i>
                </RouterLink>
            </div>
            <div class="p-3">
                <RouterLink to="/">
                    <i class="pi pi-chart-bar" style="font-size: 1.3rem"></i>
                </RouterLink>
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
import { RouterLink } from 'vue-router';
import Logo from '../Icon/Logo.vue'

</script>

<style lang="scss" scoped>

</style>