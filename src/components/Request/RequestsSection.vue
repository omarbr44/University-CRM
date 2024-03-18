<template>
    <section class="container mt-9">
        <div class="requests-section-hedear flex">
            <!-- <button class="flex gap-1 bg-site-primary text-white p-2">
                <span>اضافة بلاغ</span>
                <IconPlus />
            </button> -->
            <Button type="button" label="اضافة بلاغ" icon="pi pi-plus" @click="load" class=" bg-site-primary text-white" />
           <!--  <button class="flex gap-1">
                <span>تصفية</span>
                <IconFilter />
            </button>
            <BaseSearch /> -->
            <h2 class="ml-auto text-3xl">البلاغات</h2>
        </div>
        <RequestsDataTable />
    </section>
</template>

<script setup>
import RequestsDataTable from './RequestsDataTable.vue'
import Button from 'primevue/button';

</script>

<style lang="scss" scoped>

</style>