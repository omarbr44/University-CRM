<template>
    <div class="flex w-full gap-5 overflow-hidden">
    <div class="left-section w-2/5 md:w-full sm:w-full p-4">
        <div class="logo mx-auto max-w-fit">
                <Logo width="78" />
        </div>
        <div class="header mt-20 text-center">
            <h2 class=" text-3xl sm:text-xl text-site-primary">مرحبا بك</h2>
            <p class=" text-xl text-site-text-secondary">الرجاء ادخال التفاصيل الخاصة بك</p>
        </div>
        <div class="form-section mt-8" style="direction: rtl;" >
            <form @submit.prevent="submit" class=" flex flex-col gap-10">
                        <div class="border-b-2 border-site-primary ">
                            <FloatLabel>
                                    <InputText class=" border-none focus:ring-0 w-full" id="name" v-model="obj.name" />
                                    <label for="name" class=" text-site-primary" >الاسم الرباعي</label>
                                </FloatLabel>
                        </div>
                        <div >
                            <InlineMessage v-if="requestError?.name">{{requestError?.name[0]}}</InlineMessage>
                        </div>
                        <div class="border-b-2 border-site-primary ">
                            <FloatLabel>
                                    <InputText class=" border-none focus:ring-0 w-full" id="username" v-model="obj.username" />
                                    <label for="username" class=" text-site-primary" >اسم المستخدم</label>
                                </FloatLabel>
                        </div>
                        <div >
                            <InlineMessage v-if="requestError?.username">{{requestError?.username[0]}}</InlineMessage>
                        </div>
                        <div class="border-b-2 border-site-primary ">
                            <FloatLabel>
                                    <Password class=" " v-model="obj.password" inputId="password"
                                    promptLabel="ادخل كلمة المرور" weakLabel="ضعيفة" mediumLabel="متوسطة" strongLabel="صعبة"
                                    inputClass=" border-none focus:ring-0 w-full" />
                                    <label for="password" class=" text-site-primary" :class="{'float-label': obj.password }">كلمة المرور</label>
                                </FloatLabel>
                        </div>
                        <div >
                            <InlineMessage v-if="requestError?.password">{{requestError?.password[0]}}</InlineMessage>
                        </div>
                        <div class="border-b-2 border-site-primary ">
                            <FloatLabel>
                                    <Password class=" " v-model="obj.password_confirmation" inputId="password_confirmation"
                                    inputClass=" border-none focus:ring-0 w-full" />
                                    <label for="password_confirmation" class=" text-site-primary" :class="{'float-label': obj.password_confirmation }">تأكيد كلمة المرور</label>
                                </FloatLabel>
                        </div>
                        <div >
                            <InlineMessage v-if="requestError?.password_confirmation">{{requestError?.password_confirmation[0]}}</InlineMessage>
                        </div>
                        <div class="border-b-2 border-site-primary ">
                            <FloatLabel>
                                    <InputText class=" border-none focus:ring-0 w-full" id="phone" v-model="obj.phone" />
                                    <label for="phone" class=" text-site-primary" >رقم الجوال</label>
                                </FloatLabel>
                        </div>
                        <div >
                            <InlineMessage v-if="requestError?.phone">{{requestError?.phone[0]}}</InlineMessage>
                        </div>
                        <div class="border-b-2 border-site-primary ">
                            <FloatLabel>
                                <Dropdown panelClass="bg-white" inputId="user_type_id" v-model="obj.user_type_id" :options="userTypes" optionLabel="type" optionValue="id" class=" border-none w-full focus:ring-0 ring-transparent outline-0"/>
                                <label for="user_type_id" class=" text-site-primary" :class="{'float-label': obj.user_type_id }">الصفة الإدارية</label>
                            </FloatLabel>
                        </div>
                        <div >
                            <InlineMessage v-if="requestError?.user_type_id">{{requestError?.user_type_id[0]}}</InlineMessage>
                        </div>

                    <div class="card w-full border-b-2 border-site-primary p-3">
                        <FileUpload  class=" border-none" chooseLabel="اختر الملفات" cancelLabel="الغاء الملفات" :showUploadButton="false"
                        :showCancelButton="true" name="demo" @select="onAdvancedUpload"
                        :multiple="false" accept="image/*" :maxFileSize="1000000" :pt="{choosebutton:'text-site-primary p-3 items-center cursor-pointer inline-flex', chooseicon:'mt-1 ml-1', filesize:'inline-block', badge:'!hidden',actions:'mr-auto',buttonbar:'border-none',content:'border-none'}">
                            <template #empty>
                                <p>اسحب الملفات إلى هنا</p>
                            </template>
                        </FileUpload>
                        <InlineMessage v-if="requestError?.image">{{ requestError?.image }}</InlineMessage>
                    </div>
                <Button :loading="isLoading" type="submit" label="ارسال" class=" bg-site-primary w-3/5 mx-auto" />
            </form>
        </div>
    </div>
    <div class="right-section md:hidden sm:hidden w-3/5 bg-site-primary rounded-md flex justify-end flex-col  h-screen"
     style="background-image: linear-gradient(to bottom, #436FCE, #315197, #223868);">
        <img src="../assets/imgs/loginImg.jpg" class=" h-4/5" style="
        position: absolute;
        left: 48rem;
        top: -27rem;
        height: 53rem;">
        <h2 class=" text-xl text-white text-center my-3" style="
        margin-bottom: 7rem;
        align-self: baseline;
        margin-left: 5rem;">"CRM على طريقتنا"</h2>
    </div>
</div>
</template>

<script setup>
import Logo from './Icon/Logo.vue'
import { ref,onMounted } from 'vue';
import { usePostRequest,useGetRequest } from '../composables/useRequest'
import { useNotification } from "@kyvg/vue3-notification";
import { serialize } from 'object-to-formdata';

const { notify }  = useNotification()
const obj = ref({
    username:null,
    name:null,
    password:null,
    password_confirmation:null,
    phone:null,
    image:null,
    user_type_id:null,
    })
const userTypes = ref()
const requestError = ref(null)
const isLoading = ref(false)
onMounted(async()=>{
    const {Data:types } = await useGetRequest('UserType')
    userTypes.value = types.value
})
const onAdvancedUpload = function(event){
        obj.value.image = event.files[0]
    }   
const submit = async function(){
        console.log(obj.value)
        const formData = serialize(
                obj.value,
            )
        isLoading.value = true
        const { Error } = await usePostRequest('register',formData)
        requestError.value = Error.value
        isLoading.value = false
        if(!requestError.value){
            notify({
                title: "الحسابات",
                text: "تم انشاء الحساب بنجاح",
                type: 'success',
            });
        } 
}
</script>

<style>
body {
overflow-x: hidden;
}
.float-label{
font-size: 0.875rem;
line-height: 1.25rem;
top: -0.75rem !important;
color: #223769;
}
.\[\&\>\*\:last-child\]\:left-3>*:last-child {
inset-inline-start: 0.75rem;
}
</style>