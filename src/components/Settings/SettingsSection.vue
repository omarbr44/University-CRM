<template>
    <div>
        <div class="card p-5" style="direction: rtl;">
        <!-- <div class="flex mb-2 gap-2 justify-content-end">
            <Button @click="active.value = 0" rounded label="1" class="w-2rem h-2rem p-0" :outlined="active !== 0" />
            <Button @click="active.value = 1" rounded label="2" class="w-2rem h-2rem p-0" :outlined="active !== 1" />
            <Button @click="active.value = 2" rounded label="3" class="w-2rem h-2rem p-0" :outlined="active !== 2" />
        </div> -->
        <TabMenu v-model:activeIndex="active" :model="items" class=" text-site-text-primary" />

        <component :is="tabView" />
    </div>
    </div>
</template>

<script setup>
import { ref,computed } from "vue";
import Colleags from "./Colleags.vue";
import Buildings from "./Buildings.vue";
import RoomTypes from "./RoomTypes.vue";
import Rooms from "./Rooms.vue";
import Categories from "./Categories.vue";
const active = ref(0);
const tabView = computed(()=>{
    switch(active.value){
        case 0:
            return Colleags
        break
        case 1:
            return Buildings
        break
        case 2:
            return RoomTypes
        break
        case 3:
            return Rooms
        break
        case 4:
            return Categories
    }
})
const items = ref([
    { label: 'الكليات', icon: 'pi pi-home' },
    { label: 'المباني', icon: 'pi pi-chart-line' },
    { label: 'انواع الغرف', icon: 'pi pi-list' },
    { label: 'الغرف', icon: 'pi pi-inbox' },
    { label: 'انواع البلاغات', icon: 'pi pi-inbox' },
]);
</script>

<style>
li[data-p-highlight="true"] {
    background: #F4F5F7;
}
span[data-pc-section="label"] {
    margin-right: 10px;
}
</style>