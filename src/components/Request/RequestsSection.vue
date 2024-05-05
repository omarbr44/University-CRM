<template>
    <section class="p-8 mt-9 w-full">
        <div class="requests-section-hedear flex">
            <RouterLink to="/requestsadd">
                <Button type="button" label="اضافة بلاغ" icon="pi pi-plus" class=" bg-site-primary text-white sm:text-sm" />
            </RouterLink>
            <h2 class="ml-auto text-3xl sm:text-xl text-site-text-primary">البلاغات</h2>
        </div>
        <RequestsDataTable />
    </section>
</template>

<script setup>
import RequestsDataTable from './RequestsDataTable.vue'
import Button from 'primevue/button';
import { useRoute } from 'vue-router';
import { useNotification } from "@kyvg/vue3-notification";

const { notify }  = useNotification()
if(useRoute().query.msg) {
    notify({
                    title: "مرحبا",
                    text: useRoute().query.msg,
                    type: 'success',
                });
}

</script>

<style lang="scss" scoped>

</style>