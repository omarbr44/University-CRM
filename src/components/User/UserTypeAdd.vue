<template>
    <div class="flex w-full p-8 sm:p-4 gap-10 my-4">
        <div class="left-section md:hidden sm:hidden w-1/3 bg-site-primary rounded-md flex flex-col items-center"
         style="background-image: linear-gradient(to bottom, #436FCE, #315197, #223868);">
            <div class="logo my-20">
                <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="212" zoomAndPan="magnify" viewBox="0 0 159 181.5" height="242" preserveAspectRatio="xMidYMid meet" version="1.0"><defs><clipPath id="df91a46a46"><path d="M 0.21875 40.707031 L 25.65625 40.707031 L 25.65625 115.625 L 0.21875 115.625 Z M 0.21875 40.707031 " clip-rule="nonzero"/></clipPath><clipPath id="8bfe9fe1b8"><path d="M 0.21875 98.390625 L 0.21875 40.78125 L 25.65625 58.019531 L 25.65625 115.625 Z M 0.21875 98.390625 " clip-rule="nonzero"/></clipPath><clipPath id="c2bf657004"><path d="M 33.542969 17.464844 L 58.980469 17.464844 L 58.980469 99.042969 L 33.542969 99.042969 Z M 33.542969 17.464844 " clip-rule="nonzero"/></clipPath><clipPath id="fba6ab8a55"><path d="M 33.542969 81.808594 L 33.542969 17.46875 L 58.980469 34.707031 L 58.980469 99.042969 Z M 33.542969 81.808594 " clip-rule="nonzero"/></clipPath><clipPath id="fc76eac0a3"><path d="M 65.875 45.242188 L 91.3125 45.242188 L 91.3125 137.949219 L 65.875 137.949219 Z M 65.875 45.242188 " clip-rule="nonzero"/></clipPath><clipPath id="a2cfe56f50"><path d="M 65.875 120.710938 L 65.875 45.269531 L 91.3125 62.503906 L 91.3125 137.949219 Z M 65.875 120.710938 " clip-rule="nonzero"/></clipPath><clipPath id="e14975a3bb"><path d="M 99.539062 64.464844 L 124.976562 64.464844 L 124.976562 180.921875 L 99.539062 180.921875 Z M 99.539062 64.464844 " clip-rule="nonzero"/></clipPath><clipPath id="cfd8bc63bd"><path d="M 99.539062 163.683594 L 99.539062 64.492188 L 124.976562 81.726562 L 124.976562 180.921875 Z M 99.539062 163.683594 " clip-rule="nonzero"/></clipPath><clipPath id="62e7340dc9"><path d="M 133.203125 0 L 158.640625 0 L 158.640625 140.132812 L 133.203125 140.132812 Z M 133.203125 0 " clip-rule="nonzero"/></clipPath><clipPath id="f3abaee14a"><path d="M 133.203125 122.898438 L 133.203125 -0.0078125 L 158.640625 17.230469 L 158.640625 140.132812 Z M 133.203125 122.898438 " clip-rule="nonzero"/></clipPath></defs><g clip-path="url(#df91a46a46)"><g clip-path="url(#8bfe9fe1b8)"><path fill="#ffffff" d="M 0.21875 115.625 L 0.21875 40.804688 L 25.65625 40.804688 L 25.65625 115.625 Z M 0.21875 115.625 " fill-opacity="1" fill-rule="nonzero"/></g></g><g clip-path="url(#c2bf657004)"><g clip-path="url(#fba6ab8a55)"><path fill="#ffffff" d="M 33.542969 99.042969 L 33.542969 17.464844 L 58.980469 17.464844 L 58.980469 99.042969 Z M 33.542969 99.042969 " fill-opacity="1" fill-rule="nonzero"/></g></g><g clip-path="url(#fc76eac0a3)"><g clip-path="url(#a2cfe56f50)"><path fill="#ffffff" d="M 65.875 137.949219 L 65.875 45.242188 L 91.3125 45.242188 L 91.3125 137.949219 Z M 65.875 137.949219 " fill-opacity="1" fill-rule="nonzero"/></g></g><g clip-path="url(#e14975a3bb)"><g clip-path="url(#cfd8bc63bd)"><path fill="#ffffff" d="M 99.539062 180.921875 L 99.539062 64.464844 L 124.976562 64.464844 L 124.976562 180.921875 Z M 99.539062 180.921875 " fill-opacity="1" fill-rule="nonzero"/></g></g><g clip-path="url(#62e7340dc9)"><g clip-path="url(#f3abaee14a)"><path fill="#ffffff" d="M 133.203125 140.132812 L 133.203125 0.03125 L 158.640625 0.03125 L 158.640625 140.132812 Z M 133.203125 140.132812 " fill-opacity="1" fill-rule="nonzero"/></g></g></svg>
            </div> 
            <h2 class=" text-xl text-white text-center my-3"> تقديم بلاغات للجامعة<br>بشأن مشاكل الصيانة</h2>
            <h2 class=" text-sm  text-site-dark-background text-center mx-3">يساعد في اصلاح المشاكل بسرعه وفعالية، وتحسين بيئة الجامعة<br> وضمان سلامتها. كما يساهم في تعزيز راجة ورضا الطلاب والموظفين</h2>
        </div>
        <div class="right-section w-2/3 md:w-full sm:w-full">
            <div class="header flex items-center justify-between">
                <div>
                    <RouterLink to="/usertype">
                        <Button icon="pi pi-arrow-left" class=" text-2xl sm:text-xl" style="color: #2D2D2D;" />
                    </RouterLink>
                    <Button @click="Object.keys(obj).forEach((i)=> obj[i]=null)" class=" text-2xl sm:text-xl" icon="pi pi-times" style="color: #2D2D2D;" />
                </div>
                <h2 v-if="route.params.id != 0"class=" text-3xl sm:text-xl text-site-primary"> تعديل نوع الحساب</h2>
                <h2 v-else class=" text-3xl sm:text-xl text-site-primary"> نوع حساب جديد</h2>
            </div>
            <div class="form-section w-full mt-8" style="direction: rtl;" >
                <form @submit.prevent="submit" class=" flex flex-col gap-10">
                <div>
                    <div class="border-b-2 border-site-primary ">
                        <FloatLabel>
                            <InputText class=" border-none focus:ring-0 w-full" id="type" v-model="obj.type" />
                            <label for="type" class=" text-site-primary" >نوع الحساب</label>
                        </FloatLabel>
                    </div> 
                    <InlineMessage v-if="requestError?.type">{{requestError?.type[0]}}</InlineMessage>
                </div>
                <label class=" text-site-primary" >الصلاحيات</label>
                <Listbox v-model="obj.permissions" :options="permissions" multiple optionLabel="display_name" optionValue="id" class="w-full overflow-y-auto h-80" />
                    <Button :loading="isLoading" type="submit" label="ارسال" class=" bg-site-primary mt-2" />
                </form>
            </div>
        </div>
    </div>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import { useGetRequest,usePostRequest,usePutRequest } from '../../composables/useRequest'
import { useNotification } from "@kyvg/vue3-notification";
import { useRouter,useRoute } from 'vue-router';

    const router = useRouter()
    const route = useRoute()
    const { notify }  = useNotification()
    const obj = ref({
        type:null,
        permissions:null,
        })
    const requestError = ref(null)
    const isLoading = ref(false)
    const permissions = ref()
    onMounted(async()=>{
        const {Data} = await useGetRequest('Permission?pagination=none')
        permissions.value = Data.value
        if(route.params.id != 0) {
            const {Data:UserType} = await useGetRequest('UserType/'+route.params.id)
            obj.value.type = UserType.value.Type
            obj.value.permissions = UserType.value.permissions
        }
    })
    const submit = async function(){
            isLoading.value = true
            if(route.params.id != 0) {
                const { Error } = await usePutRequest('UserType/'+route.params.id,obj.value)
                requestError.value = Error.value
                isLoading.value = false
            if(!requestError.value){
                notify({
                    title: "نوع الحساب",
                    text: "تم تعديل نوع الحساب بنجاح",
                    type: 'success',
                });
                setTimeout(router.push('/usertype'),3000)
            }
            }
            else {
                const { Error } = await usePostRequest('UserType',obj.value)
                requestError.value = Error.value
                isLoading.value = false
            if(!requestError.value){
                notify({
                    title: "نوع الحساب",
                    text: "تم انشاء نوع الحساب بنجاح",
                    type: 'success',
                });
                setTimeout(router.push('/usertype'),3000)
            }
            }
            
    }
</script>

<style>
.\[\&\>\*\:last-child\]\:left-3>*:last-child {
    inset-inline-start: 0.75rem;
}
li[data-p-highlight="true"] {
    background-color: #223769 !important;
    color: white !important;
}
li[data-p-highlight] {
    margin: 1rem !important;
    border-radius: 5px !important;
}
</style>